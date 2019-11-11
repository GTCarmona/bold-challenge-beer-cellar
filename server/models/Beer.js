const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId

const beerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  type: {
    type: String,
    required: true,
    enum: ["Malt", "Stout", "Ale", "Lager"],
  },
  style: {
    type: String,
    enum: [
      "Amber",
      "Blonde",
      "Brown",
      "Cream",
      "Dark",
      "Pale",
      "Strong",
      "Wheat",
      "IPA",
      "Red",
      "Pilsner",
      "Honey",
    ],
  },
  description: {
    type: String,
  },
  nationality: {
    type: String,
    default: "Unknown",
  },
  image: {
    type: String,
    default: "images/beerImage.png",
  },
  _creator: { type: objectId, ref: "User" },
  // comments: [String],
  // ratings: [Number],
})

const Beer = mongoose.model("Beer", beerSchema)

module.exports = Beer
