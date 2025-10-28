const dbBooks = require("../../proxy/dbBooks")

const getCollectionRoute = require('./getCollection/route');
const getItemRoute = require('./getItem/route');
const createItemRoute = require('./createItem/route');
const updateItemRoute = require('./updateItem/route');
const deleteItemRoute = require('./deleteItem/route');

module.exports = (app, limiter) => {
  const router = require('express').Router();

  router.use(limiter);

  router.get('/', (req, res) => getCollectionRoute(req, res, dbBooks));
  router.get('/:id', (req, res) => getItemRoute(req, res, dbBooks));
  router.post('/', (req, res) => createItemRoute(req, res, dbBooks));
  router.put('/:id', (req, res) => updateItemRoute(req, res, dbBooks));
  router.delete('/:id', (req, res) => deleteItemRoute(req, res, dbBooks));

  app.use('/api/book', router);
};
