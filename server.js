const express = require('express');
const app = express();
const port = 3000;
const initBookRoutes = require('./api/book/route');

app.use(express.json());

initBookRoutes(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`🚀 Listening on http://localhost:${port}`);
});
