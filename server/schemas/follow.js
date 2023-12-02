const { GraphQLError } = require("graphql");
const { ObjectId } = require("mongodb");
const {
  findFollowById,
  findFollowing,
  findFollowers,
  findAllFollow,
  postFollow,
  postFollow,
} = require("../models/followModels");
const dataUser = require("../data/user.json");

const followingTypeDefs = `#graphql
    type UserFollowing {
        _id: ID
        username: String
        name: String
    }

    type UserFollower{
        _id: ID
        username: String
        name: String
    }

    type Follow {
        _id: ID
        followingId: [UserFollowing]
        followerId: [UserFollower]
    }

    type OneFollow {
        _id: ID
        followingId: UserFollowing
        followerId: UserFollower
    }

    type Query {
        getFollowAll: ResponseGetFollow
    }

    type Mutation {
        followCreate(followerId: ID!): ResponseCreateFollow
    }
`;

const followingResolvers = {
  Query: {
    getFollowAll: async (_, args) => {
      try {
        return {
          statusCode: 200,
          message: "Successfully Login",
        };
      } catch (error) {
        console.log(error);
        // throw new GraphQLError(`${error.message}`);
      }
    },
  },
  Mutation: {
    followCreate: async (_, args, context) => {
      try {
        const { followerId } = args;
        const { id } = await context.authentication();

        console.log(id, "<<< from id followCreate");

        const postFollow = await postFollow(
          new ObjectId(followerId),
          new ObjectId(id)
        );

        const follow = await findFollowById(
          new ObjectId(postFollow.insertedId)
        );

        return {
          statusCode: 200,
          message: "Successfully Seeding User",
          data: follow,
        };
      } catch (error) {
        console.log(error);
        // throw new GraphQLError("An error while Seeding user");
      }
    },
  },
};

module.exports = {
  followingTypeDefs,
  followingResolvers,
};
