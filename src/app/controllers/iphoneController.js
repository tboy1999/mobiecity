const Phone = require('../models/Phone');
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../../util/mongoose');

class IphoneController {
  //[GET] /iphone/:slug
  show(req, res, next) {
    Phone.findOne({ slug: req.params.slug })
      .then((phone) => res.render('detail', { phone: mongooseToObject(phone) }))
      .catch(next);
  }

  //[GET] /iphone
  index(req, res, next) {
    Phone.find({ type: 'iphone' })
      .then((phones) =>
        res.render('pages/iphone', { phones: mutipleMongooseToObject(phones) }),
      )
      .catch(next);
  }
}

module.exports = new IphoneController();
