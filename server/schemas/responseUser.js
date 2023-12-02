const responseUserTypeDefs = `#graphql
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

    type ResponseLoginUserToken {
        token: String
    }

    type ResponseLoginUser implements Response {
        statusCode: Int!
        message: String!
        error: String
        data: ResponseLoginUserToken
    }

    type ResponseSearchUser implements Response {
        statusCode: Int!
        message: String!
        error: String
        data: UserNoPassword
    }

    type ResponseSeeding {
        statusCode: Int!
        message: String
    }
`;

module.exports = {
  responseUserTypeDefs,
};
