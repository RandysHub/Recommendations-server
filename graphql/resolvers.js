const { Friend } = require("../models/Friend");

const resolvers = {
  Query: {
    getFriends: async () => {
      return User.find({});
    },
  },
};
