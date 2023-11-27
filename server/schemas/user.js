const { GraphQLError } = require("graphql");
const { getDatabase } = require("../config/mongoConnection");
const { ObjectId } = require("mongodb");

const userTypeDefs = `#graphql
    type User {
        id: ID
        name: String
        username: String!
        email: String!
        password: String!
    }

    input UserRegisterInput {
        name: String
        username: String!
        email: String!
        password: String!
    }  

    type Mutation {
        userRegister(input: UserRegisterInput): ResponseRegisterUser
    }
`;

const userResolvers = {
  Mutation: {
    userRegister: async (_, args) => {
      try {
        const database = getDatabase();
        const userCollection = database.collection("user");

        console.log(userCollection, "<<< userCollection");
        const newUser = await userCollection.insertOne(args.input);

        return {
          statusCode: 200,
          message: "Successfully registered",
          data: newUser,
        };
      } catch (error) {
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
