const Phone = require('../models/Phone');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
  index(req, res, next) {
    Phone.find({})
      .then((phones) =>
        res.render('home', { phones: mutipleMongooseToObject(phones) }),
      )
      .catch(next);
  }
  search(req, res, next) {
    res.render('search');
  }
}

module.exports = new SiteController();
