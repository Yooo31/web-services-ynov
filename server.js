const express = require('express');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

const limiter = rateLimit({
  windowMs: 1000,
  limit: 1,
  statusCode: 418,
  message: 'You are sending too many requests (1 per second max). Please slow down.'
});

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

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`🚀 Listening on http://localhost:${port}`);
});
