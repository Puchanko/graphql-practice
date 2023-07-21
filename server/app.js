const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");
require("dotenv").config();

const app = express();

const uri = process.env.MONGODB_URI;
mongoose.connect(uri);
mongoose.connection.once("open", () => {
  console.log("mongodb connected!!");
});

// ミドルウェアの作成
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("listening port 4000");
});
