const { GraphQLError } = require("graphql");
const { getDatabase } = require("../config/mongoConnection");
const { ObjectId } = require("mongodb");
const user = require("../data/user.json");
const { hashPassword } = require("../utils");
const { postUserRegister, findUserById } = require("../models/userModels");

const userTypeDefs = `#graphql
    type User {
        _id: ID
        name: String
        username: String!
        email: String!
        password: String!
    }

    type UserNoPassword {
        _id: ID
        name: String
        username: String!
        email: String!
    }

    input UserRegisterInput {
        name: String
        username: String!
        email: String!
        password: String!
    }

    input UserLoginInput {
        name: String!
        password: String!
    }  

    type Query {
      userLogin: ResponseLoginUser
    }

    type Mutation {
        userRegister(input: UserRegisterInput): ResponseRegisterUser
    }
`;

const userResolvers = {
  Query: {
    userLogin: async (_, args) => {
      try {
        const database = getDatabase();
        const userCollection = database.collection("user");

        const { email, password } = args;
        const findUser = await userCollection.findOne({
          email,
        });

        return {
          statusCode: 200,
          message: "Successfully Login",
        };
      } catch (error) {
        throw new GraphQLError("An error while Login user");
      }
    },
  },
  Mutation: {
    userRegister: async (_, args) => {
      try {
        const { name, username, email, password } = args.input;
        const payload = {
          name,
          username,
          email,
          password: hashPassword(password),
        };
        const registerUser = await postUserRegister(payload);
        const user = await findUserById(new ObjectId(registerUser.insertedId));

        console.log(user, "<<< data from user");

        return {
          statusCode: 200,
          message: "Successfully registered",
          data: user,
        };
      } catch (error) {
        console.log(error);
        throw new GraphQLError("An error while Register user");
        // console.log(error);
      }
    },
  },
};

module.exports = {
  userTypeDefs,
  userResolvers,
};
