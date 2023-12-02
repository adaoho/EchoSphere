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
  height: 15%;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  backdrop-filter: blur(10px);
`;

const Title = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: 600;
`;

const TitleContainer = styled.View`
  flex: 2;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  row-gap: 2px;
`;

const MessageScreen = () => {
  return (
    <>
      <Container>
        <TitleContainer>
          <Title style={{ fontSize: 35 }}>404!</Title>
          <Title style={{ fontSize: 20, color: "grey" }}>
            Screen on Working!
          </Title>
        </TitleContainer>
      </Container>

      {/* Footer */}
      <Gradient
        locations={[0, 0.26, 0, 1]}
        colors={["#00000000", "#00000000", "#00000000", "#00000090"]}
      ></Gradient>
    </>
  );
};

export default MessageScreen;
