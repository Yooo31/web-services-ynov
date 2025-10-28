const express = require('express');
const app = express();
const port = 3000;
const initBookRoutes = require('./api/book/route');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 1000,
  limit: 1,
  statusCode: 418,
  message: 'You are sending too many requests (1 per second max). Please slow down.'
});
app.use(express.json());

initBookRoutes(app, limiter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`🚀 Listening on http://localhost:${port}`);
});
