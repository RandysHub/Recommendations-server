const { gql } = require("apollo-server");

module.exports = gql`
  type Friend {
    name: String
    recs: [String!]
  }
`;
