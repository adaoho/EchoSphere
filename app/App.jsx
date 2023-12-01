import { AuthProvider } from "./context/AuthContext";
import StackHolder from "./stacks/StackHolder";
// import { ApolloProvider } from "@apollo/client";

export default function App() {
  return (
    <>
      <AuthProvider>
        {/* <AppoloProvider client={client}> */}
        <StackHolder />
        {/* </AppoloProvider> */}
      </AuthProvider>
    </>
  );
}
