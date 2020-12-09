const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const winerySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: String,
  email: String,
  website: { type: String, required: true },
  notes: String,
  date: { type: Date, default: Date.now }
});

const Winery = mongoose.model("Winery", winerySchema);

module.exports = Winery;