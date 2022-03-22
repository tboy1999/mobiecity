const newsRouter = require('./news');
const adminRouter = require('./admin');
const iphoneRouter = require('./iphone');
const siteRouter = require('./site');
const phoneRouter = require('./phone');
const samsungRouter = require('./samsung');
const xiaomiRouter = require('./xiaomi');

function routers(app) {
  app.use('/news', newsRouter);
  app.use('/dien-thoai', phoneRouter);
  app.use('/admin', adminRouter);
  app.use('/samsung', samsungRouter);
  app.use('/xiaomi', xiaomiRouter);
  app.use('/iphone', iphoneRouter);
  app.use('/', siteRouter);
}

module.exports = routers;
