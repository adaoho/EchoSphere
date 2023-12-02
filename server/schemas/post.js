const { GraphQLError } = require("graphql");
const { ObjectId } = require("mongodb");
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

const postTypeDefs = `#graphql
    type UserDetail {
        _id: ID
        username: String
        name: String
    }

    type Like {
        _id: ID
        authord: UserDetail
        createdAt: String
        updatedAt: String
    }

    type Comment {
        _id: ID
        content: String
        authordId: UserDetail
        createdAt: String
        updatedAt: String
    }

    type Post {
        _id: ID
        content: String!
        description: String
        tags: [String]
        imgUrl: String
        authorId: UserDetail
        likes: [Like]
        comments: [Comment]
        createdAt: String
        updatedAt: String
    }

    input PostCreate {
        content: String
        description: String
        imgUrl: String
        tags: [String]
    }

    type Query {
        getPostOne: ResponseGetPostAll
        getPostOne: ResponseGetPostOne
    }

    type Mutation {
        postCreate(input: PostCreate): ResponseCreatePost
        likeCreate: ResponseCreateLike
        commentCreate(content: String!): ResponseCreateComment
    }
`;

const postResolvers = {
  Query: {
    getPostAll: async (_, args) => {
      try {
        return {
          statusCode: 200,
          message: "Successfully Login",
          data: { token: getLogin },
        };
      } catch (error) {
        console.log(error);
        // throw new GraphQLError(`${error.message}`);
      }
    },
    getPostOne: async (_, args) => {
      try {
        return {
          statusCode: 200,
          message: "Successfully Login",
          data: { token: getLogin },
        };
      } catch (error) {
        console.log(error);
        // throw new GraphQLError(`${error.message}`);
      }
    },
  },
  Mutation: {
    postCreate: async () => {
      try {
        return {
          statusCode: 200,
          message: "Successfully Seeding User",
        };
      } catch (error) {
        console.log(error);
        // throw new GraphQLError("An error while Seeding user");
      }
    },
    likeCreate: async (_, args, context) => {
      try {
        return {
          statusCode: 200,
          message: "Successfully registered",
        };
      } catch (error) {
        console.log(error);
        // throw new GraphQLError(`${error.message}`);
      }
    },
    commentCreate: async (_, args, context) => {
      try {
        return {
          statusCode: 200,
          message: "Successfully registered",
        };
      } catch (error) {
        console.log(error);
        // throw new GraphQLError(`${error.message}`);
      }
    },
  },
};

module.exports = {
  postTypeDefs,
  postResolvers,
};
