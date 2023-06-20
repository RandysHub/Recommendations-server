const Friend = require("../models/Friend");
const mongoose = require("mongoose");
const resolvers = {
  Query: {
    async getFriend(_, { ID }) {
      // return await Friend.find();
      return Friend.find({})
        .exec()
        .then((collection) => {
          if (collection.length === 0) {
            return Friend.insertMany([
              { name: "Misael" },
              { name: "Ralph" },
              { name: "Shawtity" },
            ]);
          }
          console.log("Already populated");
        });
    },
    async getBoys(_, { amount }) {
      return await Friend.find().sort({ ID: 1 }).limit(amount);
    },
  },
  Mutation: {
    async createFriend(_, { friendInput: { name } }) {
      const createdFriend = new Friend({
        name: name,
        // recs: [],
      });

      const res = await createdFriend.save();
      console.log(res._doc);
      return {
        id: res.id,
        ...res._doc,
        // don't use ._doc, use .toObject method - Guy in YouTube comments
      };
    },
  },
};

module.exports = resolvers;
