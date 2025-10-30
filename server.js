const express = require('express');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const helmet = require('helmet');
const { generateSwaggerSpec } = require('./swagger/swaggerConfig');

const app = express();
const port = 3000;

// Middleware: Security headers with Helmet
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    frameAncestors: ["'none'"],
  },
}));

// Middleware: CORS
app.use(cors({
  origin: [`http://localhost:${port}`],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204,
}));

// Middleware: Block non-authorized origins (server-side check)
app.use((req, res, next) => {
  const allowedOrigins = [`http://localhost:${port}`];
  const origin = req.headers.origin;

  if (origin && !allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: 'Origin not allowed' });
  }
  next();
});


// Middleware: JSON body parsing
app.use(express.json());

// Middleware: Rate limiting
const limiter = rateLimit({
  windowMs: 1000,
  limit: 1,
  statusCode: 418,
  message: 'You are sending too many requests (1 per second max). Please slow down.'
});

// Load API routes dynamically
const apiDir = path.join(__dirname, 'api');
const versions = fs.readdirSync(apiDir).filter(f => f.startsWith('v'));
console.log('Available API versions:', versions);

versions.forEach(version => {
  const versionPath = path.join(apiDir, version);
  const resources = fs.readdirSync(versionPath);

  resources.forEach(resource => {
    const routePath = path.join(versionPath, resource, 'route.js');
    if (fs.existsSync(routePath)) {
      const initRoutes = require(routePath);
      initRoutes(app, limiter, version);
      console.log(`✅ Loaded routes for ${version}/${resource}`);
    }
  });
});

// Root route
app.get('/', (_req, res) => {
  res.send('Hello World!');
});

// Swagger documentation
const swaggerSpec = generateSwaggerSpec(versions);
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    swaggerOptions: {
      displayRequestDuration: true,
      persistAuthorization: true,
      docExpansion: 'none',
    },
  })
);

// Start the server
app.listen(port, () => {
  console.log(`🚀 Listening on http://localhost:${port}`);
});
