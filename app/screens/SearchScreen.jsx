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
  padding-left: 2%;
  padding-right: 6%;
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
  text-align: left;
  padding-left: 4%;
  border-radius: 10px;
`;

const SearchContainer = styled.View`
  position: flex;
  justify-content: center;
  align-items: start;
  width: 380px;
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

const Title = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: 600;
`;

const TitleContainer = styled.View`
  position: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  left: 3%;
  top: 10%;
  align-items: start;
  row-gap: 8px;
`;

const ButtonFilter = styled.TouchableOpacity`
  padding: 10px;
  background-color: #2a2828;
  border-radius: 12px;
  position: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 14px;
  color: white;
`;

const FilterContainer = styled.View`
  position: flex;
  margin-top: 25px;
  flex-direction: row;
  column-gap: 10px;
  width: 100%;
  height: 35px;
`;

const UserContainer = styled.View`
  flex: 1;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: red;
`;

const SearchScreen = () => {
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>Search User</Title>
          <SearchContainer>
            <TextInput
              placeholder="Search by Username"
              placeholderTextColor="gray"
            />
            <ButtonSearch>
              <Ionicons name="ios-search" color="white" size={22} />
            </ButtonSearch>
          </SearchContainer>

          <FilterContainer>
            <ButtonFilter>
              <Text>Your Following</Text>
            </ButtonFilter>
            <ButtonFilter>
              <Text>Your Followers</Text>
            </ButtonFilter>
          </FilterContainer>
        </TitleContainer>

        <UserContainer>
          <CardUser />
        </UserContainer>
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

export default SearchScreen;
