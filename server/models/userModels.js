const { GraphQLError } = require("graphql");
const { getDatabase } = require("../config/mongoConnection");
const { comparePassword, signToken, hashPassword } = require("../utils");
const { ObjectId } = require("mongodb");

const user_collection = "user";
const database = getDatabase();

const findAllUser = async () => {
  const result = await database.collection(user_collection).find({}).toArray();
  return result;
};

const findUserById = async (_id) => {
  const result = await database
    .collection(user_collection)
    .findOne({ _id }, { projection: { password: 0 } });

  return result;
};

const findUserByEmail = async (email) => {
  const result = await database.collection(user_collection).findOne({ email });

  return result;
};

const findUserByUsername = async (username) => {
  const result = await database
    .collection(user_collection)
    .findOne({ username }, { projection: { password: 0 } });

  return result;
};

const postUserSeeding = async (payload) => {
  await database.collection(user_collection).deleteMany();
  const result = await database.collection(user_collection).insertMany(payload);
  return result;
};

const postUserRegister = async (name, username, email, password) => {
  try {
    if (await findUserByUsername(username)) throw { name: "invalidUsername" };
    if (await findUserByEmail(email)) throw { name: "invalidEmail" };
    if (password.length < 6) throw { name: "invalidPassword" };
    if (email.split("@").length !== 2) throw { name: "invalidEmailFormat" };

    const payload = {
      name,
      username,
      email,
      password: hashPassword(password),
    };

    const result = await database
      .collection(user_collection)
      .insertOne(payload);

    return result;
  } catch (error) {
    console.log(error);
    switch (error.name) {
      case "invalidUsername":
        throw new GraphQLError("Username Already Registered");
      case "invalidEmail":
        throw new GraphQLError("Email Already Registered");
      case "invalidPassword":
        throw new GraphQLError("Password Minimum 5 Characters");
      case "invalidEmailFormat":
        throw new GraphQLError("Invalid Email Format");
      default:
        throw new GraphQLError("An error while Register user");
    }
  }
};

const postUserLogin = async (email, password) => {
  try {
    const findUser = await findUserByEmail(email);
    if (!findUser) throw { name: "UserNotFound" };

    if (
      !comparePassword(password, findUser.password) ||
      !email === findUser.email
    )
      throw { name: "InvalidLogin" };

    const payload = { id: findUser._id, email: findUser.email };
    const token = signToken(payload);
    return token;
  } catch (error) {
    // console.log(error);
    switch (error.name) {
      case "invalidEmail":
        throw new GraphQLError("User Not Found");
      case "invalidLogin":
        throw new GraphQLError("Invalid Email/Password");
      default:
        throw new GraphQLError("An error while Login user");
    }
  }
};

module.exports = {
  findAllUser,
  findUserByEmail,
  findUserById,
  findUserByUsername,
  postUserRegister,
  postUserLogin,
  postUserSeeding,
};
