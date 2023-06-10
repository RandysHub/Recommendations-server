const ApolloServer = require("apollo-server");
const express = require("express");
const mongoose = require("mongoose");
const PORT = 3001;
const app = express();

// app.get("/test", (req, res) => {
//   res.json({ ok: true });
// });
mongoose
  .connect(
    "mongodb+srv://shortkidd18:blooplord18@animerecs.8y7nzie.mongodb.net/recs?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is now listening on port ${PORT}`)
    );
    console.log("Connected to MongoDB");
  });
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
