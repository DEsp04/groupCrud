const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CarModel = new Schema(
  {
    mame_of_model: { type: String, required: true },
    type_of_car: { type: String, required: true },
    car_image: { type: String, required: true },
    car_brand: {type: Schema.Types.ObjectId, ref: 'brands'}
  },
  { timestamps: true },

)

module.exports = mongoose.model("car_model", CarModel);