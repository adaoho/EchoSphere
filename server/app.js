if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { ApolloServer } = require("@apollo/server");
const PORT = process.env.PORT || 3000;
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoConnection = require("./config/mongoConnection");
const { userTypeDefs, userResolvers } = require("./schemas/user");
const { responseTypeDefs } = require("./schemas/response");
const { GraphQLError } = require("graphql");
const { verifyToken } = require("./utils");
const { findUserByEmail } = require("./models/userModels");
const { authN } = require("./context/authN");

const server = new ApolloServer({
  typeDefs: [userTypeDefs, responseTypeDefs],
  resolvers: [userResolvers],
});

(async () => {
  try {
    await mongoConnection.connect();
    const { url } = await startStandaloneServer(server, {
      listen: {
        port: PORT,
      },

      context: async ({ req, res }) => {
        return {
          authentication: async () => authN(req),
        };
      },
    });

    console.log(`🚀  Server ready at: ${url}`);
  } catch (error) {
    console.log(error);
  }
})();

// throw new GraphQLError("Terjadi Error Nih", {
//   extensions: {
//     http: "401",
//     code: "NOT_ALLOWED_TO_ACCESS",
//   },
// });
