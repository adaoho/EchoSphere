const { findUserByEmail } = require("../models/userModels");
const { verifyToken } = require("../utils");

const authN = async (req) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  const payload = verifyToken(token);
  const user = await findUserByEmail(payload.email);

  if (!authorization || !user)
    throw new GraphQLError("You are not authenticated", {
      extensions: {
        http: "401",
        code: "UNAUTHENTICATED",
      },
    });

  return {
    id: payload._id,
    email: payload.email,
  };
};

module.exports = {
  authN,
};