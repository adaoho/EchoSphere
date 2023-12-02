const { GraphQLError } = require("graphql");
const { getDatabase } = require("../config/mongoConnection");
const { ObjectId } = require("mongodb");

const follow_collection = "follow";
const database = getDatabase();

const findAllFollow = async () => {
  const result = await database
    .collection(follow_collection)
    .find({})
    .toArray();
  return result;
};

const findFollowById = async (_id) => {
  const result = await database.collection(follow_collection).findOne({ _id });
  return result;
};

const findFollowing = async (followingId) => {
  const result = await database
    .collection(follow_collection)
    .findOne({ followingId });

  return result;
};

const findFollowers = async (followersId) => {
  const result = await database
    .collection(follow_collection)
    .findOne({ followersId });

  return result;
};

const postFollow = async (followingId, followerId) => {
  try {
    const payload = { followingId, followerId };

    const result = await database
      .collection(follow_collection)
      .insertOne(payload);

    return result;
  } catch (error) {
    console.log(error, "<<<< from postFollow");
    throw new GraphQLError(error);
  }
};

module.exports = {
  findFollowById,
  findFollowing,
  findFollowers,
  findAllFollow,
  postFollow,
};
