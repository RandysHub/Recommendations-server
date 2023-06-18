const { ApolloServer } = require("apollo-server");
const express = require("express");
const mongoose = require("mongoose");
const PORT = 3001;
const app = express();
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

//hello I'm trying to figure out how to have the most egonomic setup possible
// app.get("/test", (req, res) => {
//   res.json({ ok: true });
// });
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(
    "mongodb+srv://shortkidd18:blooplord18@animerecs.8y7nzie.mongodb.net/recs?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    return server.listen({ port: PORT });
  });
