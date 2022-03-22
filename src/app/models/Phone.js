const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Phone = new Schema(
  {
    name: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    price: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    type: { type: String, maxLength: 255 },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Phone', Phone);
