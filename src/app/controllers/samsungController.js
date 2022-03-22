const Phone = require('../models/Phone');
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../../util/mongoose');

class SamsungController {
  //[GET] /Samsung
  index(req, res, next) {
    Phone.find({ type: 'samsung' })
      .then((phones) =>
        res.render('pages/samsung', {
          phones: mutipleMongooseToObject(phones),
        }),
      )
      .catch(next);
  }

  //[GET] /Samsung/:slug
  show(req, res, next) {
    Phone.findOne({ slug: req.params.slug })
      .then((phone) => res.render('detail', { phone: mongooseToObject(phone) }))
      .catch(next);
  }
}

module.exports = new SamsungController();
