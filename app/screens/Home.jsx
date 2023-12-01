import styled from "styled-components/native";
import TabBar from "../components/TabBar";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Description from "../components/Description";

const Container = styled.View`
  background-color: #141414;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;

const HomeScreen = () => {
  return (
    <Container>
      <TabBar />
      <SideBar />
      <TopBar />
      <Description />

      <Image
        style={{
          position: "absolute",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          zIndex: -2,
          objectFit: "cover",
        }}
        source={{
          uri: "https://source.unsplash.com/random/900x700/?indonesia",
        }}
      />
      <Gradient
        locations={[0, 0.26, 0.6, 1]}
        colors={["#00000060", "#00000000", "#00000000", "#00000090"]}
      ></Gradient>
    </Container>
  );
};

export default HomeScreen;
