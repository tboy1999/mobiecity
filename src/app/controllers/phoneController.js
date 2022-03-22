const Phone = require('../models/Phone');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class PhoneController {
  //[GET] /dien-thoai
  index(req, res, next) {
    Phone.find({ typeBig: 'dien-thoai' })
      .then((phones) =>
        res.render('pages/phone', { phones: mutipleMongooseToObject(phones) }),
      )
      .catch(next);
  }

  //[GET] /dien-thoai/create
  create(req, res, next) {
    res.render('pages/phoneCreate');
  }

  //[GET] /dien-thoai/store
  store(req, res, next) {
    const newStore = new Phone(req.body);
    newStore.save().then(() => res.redirect('/'));
  }
}

module.exports = new PhoneController();
