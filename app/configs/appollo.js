// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   gql,
//   HttpLink,
// } from "@apollo/client";
// //import secure store

// import { setContext } from "@apollo/client/link/context";

// export const link = new HttpLink({
//   uri: "http://localhost:4000/graphql",
//   // Additional options
// });

// // Pakei si httpLink untuk modif requetnya kita
// // supaya bisa menambahkan headers authentication kita

// const setAuthorizationLink = setContext(async (request, previousContext) => ({
//   // const token = SecureStore.getItemAsync("token"),
//   // return {
//   //     headers: { ...previousContext.headers, authorization: "1234" },
//   // }
// }));

// export const client = new ApolloClient({
//   // Backendnya kita
//   //   uri: "https://flyby-router-demo.herokuapp.com/",
//   //   link: setAuthorizationHeader.concat(httpLink),
//   cache: new InMemoryCache(),
// });
