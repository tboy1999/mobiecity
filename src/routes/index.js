const newsRouter = require('./news');
const siteRouter = require('./site');

function routers(app) {
  app.use('/news', newsRouter);

  app.use('/', siteRouter);
}

module.exports = routers;
