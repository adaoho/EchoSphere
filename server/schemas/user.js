const { GraphQLError } = require("graphql");
const { ObjectId } = require("mongodb");
const { hashPassword } = require("../utils");
const {
  postUserRegister,
  findUserById,
  postUserLogin,
  postUserSeeding,
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
        profilePicture: String
    }

    type UserNoPassword {
        _id: ID
        name: String
        username: String!
        email: String!
        profilePicture: String
    }

    input UserRegisterInput {
        name: String
        username: String!
        email: String!
        password: String!
    }

    type Query {
        getUserByUsername(username: String!): ResponseSearchUser
        getUserById(_id: ID): ResponseUserById
    }

    type Mutation {
        userLogin(email: String!, password: String!): ResponseLoginUser
        userRegister(input: UserRegisterInput): ResponseRegisterUser
        userSeeding: ResponseSeeding
    }
`;

const userResolvers = {
  Query: {
    getUserByUsername: async (_, args) => {
      const { username } = args;
      const getUser = await findUserByUsername(username);

      return {
        statusCode: 200,
        message: "Successfully get User by Username",
        data: getUser,
      };
    },
    getUserById: async (_, __, context) => {
      const { id } = await context.authentication();

      console.log(id, "<<< getUserById, id");

      const getUserById = await findUserById(id);

      return {
        statusCode: 200,
        message: "Successfully get User by Username",
        data: getUser,
      };
    },
  },
  Mutation: {
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
        console.log(error, "<<< from Seeding user");
        throw new GraphQLError("An error while Seeding user");
      }
    },
    userRegister: async (_, args, context) => {
      try {
        const { name, username, email, password, profilePicture } = args.input;

        const registerUser = await postUserRegister(
          name,
          username,
          email,
          password,
          profilePicture
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
