const { gql } = require("apollo-server");

module.exports = gql(`
  type Friend {
    id: ID!
    name: String
    recs: [Anime]
  }

  type Anime {
    id: ID!
    name: String
  }

  type Query {
    friend(ID: ID!): Friend!
    getFriends(amount: Int): [Friend]
  }
`);
