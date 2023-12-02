const responsePostTypeDefs = `#graphql
    interface Response {
        statusCode: Int!
        message: String!
        error: String
    }

    type ResponseGetPostAll implements Response {
        statusCode: Int!
        message: String!
        error: String
        data: [Post]
    }

    type ResponseGetPostAll implements Response {
        statusCode: Int!
        message: String!
        error: String
        data: Post
    }
    
    type ResponseCreatePost implements Response {
        statusCode: Int!
        message: String!
        error: String
        data: Post
    }

    type ResponseCreateLike implements Response {
        statusCode: Int!
        message: String!
        error: String
        data: Like
    }

    type ResponseCreateComment implements Response {
        statusCode: Int!
        message: String!
        error: String
        data: Comment
    }
`;

module.exports = {
  responsePostTypeDefs,
};
