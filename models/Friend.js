const { model, Schema } = require("mongoose");

const friendSchema = new Schema({
  name: String,
  recs: Array,
});
const theModel = model("Friend", friendSchema);
module.exports = theModel;

// Friend.find({})
//   .exec()
//   .then((collection) => {
//     if (collection.length === 0) {
//       return Friend.insertMany([
//         { name: "Misael" },
//         { name: "Ralph" },
//         { name: "Shawtity" },
//       ]);
//     }
//     console.log("Already populated");
//   });
