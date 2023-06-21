const { model, Schema } = require("mongoose");

const friendSchema = new Schema({
  name: String,
  recs: Array,
});
const Friend = model("Friend", friendSchema);
module.exports = Friend;
