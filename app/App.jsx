import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./components/TabBar";
import { AuthProvider } from "./context/AuthContext";
import StackHolder from "./stacks/StackHolder";
// import { ApolloProvider } from "@apollo/client";

export default function App() {
  return (
    <>
      <AuthProvider>
        <NavigationContainer>
          <StackHolder />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
}
