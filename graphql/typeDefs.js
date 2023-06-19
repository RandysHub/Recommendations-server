const { gql } = require("apollo-server");

module.exports = gql`
  type Friend {
    id: ID!
    name: String
    recs: [Anime]
  }

  input AnimeInput {
    name: String
  }

  input FriendInput {
    name: String
  }
  type Anime {
    id: ID!
    name: String
  }

  type Query {
    getFriend(ID: ID!): Friend!
    getBoys(amount: Int): [Friend]
  }

  type Mutation {
    createFriend(friendInput: FriendInput): Friend!
    createRec(recInput: AnimeInput): Anime!
  }
`;
