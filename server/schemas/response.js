const responseTypeDefs = `#graphql
    interface Response {
        statusCode: Int
        message: String
        error: String
    }

    type ResponseRegisterUser implements Response {
        statusCode: Int
        message: String
        error: String
        data: User
    }
`;

module.exports = {
  responseTypeDefs,
};
