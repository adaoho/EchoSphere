const { getDatabase } = require("../config/mongoConnection");

const user_collection = "user";
const database = getDatabase();

const postUserRegister = async (payload) => {
  const result = await database.collection(user_collection).insertOne(payload);
  return result;
};

const findUserById = async (_id) => {
  const result = await database
    .collection(user_collection)
    .findOne({ _id }, { projection: { password: 0 } });

  return result;
};

const findUserByEmail = async (email) => {
  const result = await database
    .collection(user_collection)
    .findOne({ email }, { projection: { password: 0 } });

  return result;
};

module.exports = {
  findUserByEmail,
  findUserById,
  postUserRegister,
};
