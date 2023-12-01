import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import TabBar from "../components/TabBar";
import CardUser from "../components/CardUser";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #141414;
  position: relative;
`;

const Gradient = styled(LinearGradient)`
  height: 25%;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;

const TextInput = styled.TextInput`
  color: #fefefe;
  background-color: #494949;
  font-size: 28px;
  height: 45px;
  width: 88%;
  font-size: 16px;
  text-align: center;
  border-radius: 10px;
`;

const SearchContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  top: 10%;
`;

const ButtonSearch = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  background-color: #292727;
  position: absolute;
  right: 6%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const PostDetailScreen = () => {
  return (
    <>
      <Container>
        {/* Bungkus di Header */}
        <SearchContainer>
          <TextInput
            placeholder="Search by Username"
            placeholderTextColor="gray"
          />
          <ButtonSearch>
            <Ionicons name="ios-search" color="white" size={22} />
          </ButtonSearch>
        </SearchContainer>

        {/* Bungkus Card Follower */}
        <CardUser />
      </Container>

      {/* Footer */}
      <TabBar />
      <Gradient
        locations={[0, 0.26, 0, 1]}
        colors={["#00000000", "#00000000", "#00000000", "#00000090"]}
      ></Gradient>
    </>
  );
};

export default PostDetailScreen;
