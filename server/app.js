if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { ApolloServer } = require("@apollo/server");
const PORT = process.env.PORT || 4000;
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoConnection = require("./config/mongoConnection");
const { userTypeDefs, userResolvers } = require("./schemas/user");
const { responseTypeDef } = require("./schemas/response");

const server = new ApolloServer({
  typeDefs: [userTypeDefs, responseTypeDef],
  resolvers: [userResolvers],
});

(async () => {
  try {
    await mongoConnection.connect();
    const { url } = await startStandaloneServer(server, {
      listen: {
        port: PORT,
      },
    });

    console.log(`🚀  Server ready at: ${url}`);
  } catch (error) {
    console.log(error);
  }
})();
