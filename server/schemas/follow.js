const { GraphQLError } = require("graphql");
const { ObjectId } = require("mongodb");
const { findFollowById, postFollow } = require("../models/followModels");
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
        followingId: UserFollowing
        followerId: UserFollower
    }

    type OneFollow {
        _id: ID
        followingId: UserFollowing
        followerId: UserFollower
    }

    type Mutation {
        followCreate(followerId: String!): ResponseCreateFollow
    }
`;

const followingResolvers = {
  Mutation: {
    followCreate: async (_, args, context) => {
      try {
        const { followerId } = args;
        const { id } = await context.authentication();

        console.log(id, "<<< from id followCreate");

        const createFollow = await postFollow(
          new ObjectId(followerId),
          new ObjectId(id)
        );

        const follow = await findFollowById(
          new ObjectId(createFollow.insertedId)
        );

        return {
          statusCode: 200,
          message: `Successfully Follow User Id ${id} `,
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
