import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import CardHome from "../components/CardHome";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Tab = createBottomTabNavigator();

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-top: 20%;
  background-color: #141414;
  justify-content: flex-start;
  align-items: center;
  row-gap: 15%;
`;

const Gradient = styled(LinearGradient)`
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;

const NormalText = styled.Text`
  color: "#141414";
  font-size: 20px;
`;

const ContainerHeader = styled.View`
  flex: 0.5;
  width: 85%;
  height: 5%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContainerCard = styled.View`
  flex: 9.5;
  height: 10%;
  width: 100%;
  align-items: center;
`;

const ScrollView = styled.ScrollView`
  flex: 9.5;
  width: 100%;
`;

const imageUnsplash = (image) => {
  return `https://source.unsplash.com/random/900×900/?${image}`;
};

const ProfileImage = styled.Image.attrs({ resizeMode: "cover" })`
  height: 24px;
  width: 24px;
  border-radius: 20px;
`;

const HeaderProfile = styled.View`
  position: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 10%;
`;

const EmptyView = styled.View`
  position: flex;
  height: 90px;
  width: 100%;
`;

const HomeScreenCard = ({ navigation }) => {
  const { setIsSignedIn } = useContext(AuthContext);
  return (
    <>
      <Container>
        <ContainerHeader>
          <HeaderProfile>
            <ProfileImage source={{ uri: imageUnsplash("profile") }} />
            <NormalText
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Hola, Adnan!
            </NormalText>
          </HeaderProfile>
          <TouchableOpacity
            onPress={() => {
              setIsSignedIn(false);
            }}
          >
            <Ionicons
              style={{ paddingTop: 4 }}
              name="ios-exit"
              color="white"
              size={30}
            />
          </TouchableOpacity>
        </ContainerHeader>

        {/* <CardHome /> */}
        <ContainerCard>
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
              flexDirection: "column",
              rowGap: 20,
              paddingTop: 5,
            }}
          >
            <CardHome navigation={navigation} />
            <CardHome />
            <CardHome />
            <EmptyView />
          </ScrollView>
        </ContainerCard>
      </Container>

      {/* Footer */}

      <Gradient
        locations={[0, 1]}
        colors={["#00000000", "#00000090"]}
      ></Gradient>
    </>
  );
};

export default HomeScreenCard;
