const { GraphQLError } = require("graphql");
const { getDatabase } = require("../config/mongoConnection");
const { ObjectId } = require("mongodb");

const post_collection = "post";
const database = getDatabase();

const findAllPost = async () => {
  const result = await database.collection.find({}).to;
};
