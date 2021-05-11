const mongoose = require('mongoose');
//I want to create a struture which mongoose allow you to do so because they have the schema attriubute
const Schema = mongoose.Schema




const CarBrand = new Schema(
  {
    title: { type: String, required: true },
    country_of_origin: { type: String, required: true },
    website_link: { type: String, required: true },
  },
  {timestamps: true},
)

module.exports = mongoose.model('car_brand', CarBrand)