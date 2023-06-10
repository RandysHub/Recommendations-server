const { model, Schema } = require("mongoose");

const friendSchema = new Schema({
  name: String,
  recs: Array,
});

module.exports = model("Friend", friendSchema);
