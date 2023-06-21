const Friend = require("../models/Friend");
const resolvers = {
  Query: {
    async getFriend(_, { name }) {
      return await Friend.findOne({ name });
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
    async deleteFriend(_, { ID }) {
      const wasDeleted = (await Friend.deleteOne({ _id: ID })).deletedCount;
      //1 if something was deleted
      return wasDeleted;
    },
    async editFriend(_, { ID, friendInput: { name } }) {
      const wasEdited = await Friend.updateOne({ _id: ID }, { name: name });
      //1 if something was edited
      return wasEdited;
    },
  },
};

module.exports = resolvers;
