const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  wineries: [String],
  date: { type: Date, default: Date.now }
});

const List = mongoose.model("List", listSchema);

module.exports = List;
