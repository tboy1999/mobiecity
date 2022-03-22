const Phone = require('../models/Phone');
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../../util/mongoose');

class XiaomiController {
  //[GET] /Xiaomi
  index(req, res, next) {
    Phone.find({ type: 'xiaomi' })
      .then((phones) =>
        res.render('pages/xiaomi', { phones: mutipleMongooseToObject(phones) }),
      )
      .catch(next);
  }

  //[GET] /Xiaomi/:slug
  show(req, res, next) {
    Phone.findOne({ slug: req.params.slug })
      .then((phone) => res.render('detail', { phone: mongooseToObject(phone) }))
      .catch(next);
  }
}

module.exports = new XiaomiController();
