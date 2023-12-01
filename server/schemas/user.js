const { GraphQLError } = require("graphql");
const { getDatabase } = require("../config/mongoConnection");
const { ObjectId } = require("mongodb");
const user = require("../data/user.json");
const { hashPassword } = require("../utils");
const {
  postUserRegister,
  findUserById,
  postUserLogin,
  postUserSeeding,
  findUserByEmail,
  findUserByUsername,
} = require("../models/userModels");
const dataUser = require("../data/user.json");

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

    type Query {
        userLogin(email: String!, password: String!): ResponseLoginUser
        userSearch(username: String!): ResponseSearchUser
    }

    type Mutation {
        userRegister(input: UserRegisterInput): ResponseRegisterUser
        userSeeding: ResponseSeeding
    }
`;

const userResolvers = {
  Query: {
    userLogin: async (_, args) => {
      try {
        const { email, password } = args;
        const getLogin = await postUserLogin(email, password);

        return {
          statusCode: 200,
          message: "Successfully Login",
          data: { token: getLogin },
        };
      } catch (error) {
        // console.log(error.message, "<<< from login");
        throw new GraphQLError(`${error.message}`);
      }
    },
    userSearch: async (_, args) => {
      const { username } = args;
      const getUser = await findUserByUsername(username);

      return {
        statusCode: 200,
        message: "Successfully get User by Username",
        data: getUser,
      };
    },
  },
  Mutation: {
    userSeeding: async () => {
      try {
        dataUser.forEach((el) => {
          el.password = hashPassword(el.password);
        });
        await postUserSeeding(dataUser);

        return {
          statusCode: 200,
          message: "Successfully Seeding User",
        };
      } catch (error) {
        // console.log(error, "<<< from Seeding user");
        throw new GraphQLError("An error while Seeding user");
      }
    },
    userRegister: async (_, args, context) => {
      try {
        const { name, username, email, password } = args.input;

        const registerUser = await postUserRegister(
          name,
          username,
          email,
          password
        );
        const user = await findUserById(new ObjectId(registerUser.insertedId));

        return {
          statusCode: 200,
          message: "Successfully registered",
          data: user,
        };
      } catch (error) {
        // console.log(error, "<<< from user register");
        throw new GraphQLError(`${error.message}`);
      }
    },
  },
};

module.exports = {
  userTypeDefs,
  userResolvers,
};
