const responseTypeDefs = `#graphql
    interface Response {
        statusCode: Int!
        message: String!
        error: String
    }

    type ResponseRegisterUser implements Response {
        statusCode: Int!
        message: String!
        error: String
        data: UserNoPassword
    }

    type ResponseLoginUser implements Response {
        statusCode: Int!
        message: String!
        error: String
        access_token: String
    }
`;

module.exports = {
  responseTypeDefs,
};
