const requireAdminAccess = require("../../../middleware/checkPermissions")(["admin"]);

const getCollectionRoute = require('./getCollection/route');
const deleteItemRoute = require('./deleteItem/route');

module.exports = (app, limiter, version) => {
  const router = require('express').Router();

  router.use(limiter);

  router.get('/health', (req, res) => {
    res.json({ version, message: "This is Book API v2!" });
  });
  router.get('/', (req, res) => getCollectionRoute(req, res));
  router.delete('/:id', requireAdminAccess, (req, res) => deleteItemRoute(req, res));

  app.use(`/api/${version}/book`, router);
};
