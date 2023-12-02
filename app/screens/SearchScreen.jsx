import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import CardUserComponent from "../components/CardUser";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #141414;
  padding-left: 2%;
  position: relative;
`;

const Gradient = styled(LinearGradient)`
  height: 8%;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  backdrop-filter: blur(10px);
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
  width: 355px;
  top: 3%;
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
  flex: 1.8;
  flex-direction: column;
  width: 95%;
  height: 20%;
  right: 3%;
  left: 4%;
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
  margin-top: 4%;
  flex-direction: row;
  column-gap: 10px;
  width: 100%;
  height: 35px;
`;

const UserContainer = styled.View`
  flex: 4.5;
  padding-top: 5px;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100px;
  row-gap: 10%;
`;

const ScrollView = styled.ScrollView`
  width: 100%;
  right: 1%;
  position: flex;
  flex-direction: column;
`;

const EmptyView = styled.View`
  position: flex;
  height: 90px;
  width: 100%;
`;

const SearchScreen = ({ navigation }) => {
  return (
    <>
      <Container>
        <TitleContainer>
          <Title style={{ fontSize: 35 }}>Find Your Friend</Title>
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
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
              rowGap: 8,
              paddingTop: 5,
            }}
          >
            <CardUserComponent />
            <CardUserComponent />
            <CardUserComponent />
            <CardUserComponent />
            <CardUserComponent />
            <CardUserComponent />
            <CardUserComponent />
            <CardUserComponent />
            <CardUserComponent />
            <CardUserComponent />
            <EmptyView />
          </ScrollView>
        </UserContainer>
      </Container>

      {/* Footer */}
      <Gradient
        locations={[0, 0.26, 0, 1]}
        colors={["#00000000", "#00000000", "#00000000", "#00000090"]}
      ></Gradient>
    </>
  );
};

export default SearchScreen;
