if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { ApolloServer } = require("@apollo/server");
const PORT = process.env.PORT || 3000;
const mongoConnection = require("./config/mongoConnection");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { authN } = require("./context/authN");
const { userTypeDefs, userResolvers } = require("./schemas/user");
const { postTypeDefs, postResolvers } = require("./schemas/post");
const { responseUserTypeDefs } = require("./schemas/responseUser");
const { responsePostTypeDefs } = require("./schemas/responsePost");
const { followingTypeDefs, followingResolvers } = require("./schemas/follow");
const { responseFollowType } = require("./schemas/responseFollow");

const server = new ApolloServer({
  typeDefs: [
    userTypeDefs,
    responseUserTypeDefs,
    postTypeDefs,
    responsePostTypeDefs,
    followingTypeDefs,
    responseFollowType,
  ],
  resolvers: [userResolvers, postResolvers, followingResolvers],
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
