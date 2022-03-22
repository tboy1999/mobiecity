const Phone = require('../models/Phone');
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../../util/mongoose');

class NewsController {
  //[GET] /admin
  index(req, res, next) {
    Phone.find({})
      .then((phones) =>
        res.render('pages/admin', { phones: mutipleMongooseToObject(phones) }),
      )
      .catch(next);
  }

  //[GET] /admin/:id/edit
  edit(req, res, next) {
    Phone.findById({ _id: req.params.id })
      .then((phone) =>
        res.render('pages/adminEdit', { phone: mongooseToObject(phone) }),
      )
      .catch(next);
  }

  //[PUT] /admin/:id/update
  update(req, res, next) {
    Phone.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/admin'))
      .catch(next);
  }

  //[DELETE] /admin/:id/delete
  destroy(req, res, next) {
    Phone.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new NewsController();
