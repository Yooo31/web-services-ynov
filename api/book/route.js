const requireWriteAccess = require("../../middleware/checkPermissions")(["writer"]);
const requireAdminAccess = require("../../middleware/checkPermissions")(["admin"]);

const getCollectionRoute = require('./getCollection/route');
const getItemRoute = require('./getItem/route');
const createItemRoute = require('./createItem/route');
const updateItemRoute = require('./updateItem/route');
const deleteItemRoute = require('./deleteItem/route');

module.exports = (app, limiter) => {
  const router = require('express').Router();

  router.use(limiter);

  router.get('/', (req, res) => getCollectionRoute(req, res));
  router.get('/:id', (req, res) => getItemRoute(req, res));
  router.post('/', requireWriteAccess, (req, res) => createItemRoute(req, res));
  router.put('/:id', requireWriteAccess, (req, res) => updateItemRoute(req, res));
  router.delete('/:id', requireAdminAccess, (req, res) => deleteItemRoute(req, res));

  app.use('/api/book', router);
};
