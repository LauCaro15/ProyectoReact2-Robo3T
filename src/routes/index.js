const express = require('express');
const userBillRouter = require('./user.router');
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userBillRouter);
}
module.exports = routerApi;