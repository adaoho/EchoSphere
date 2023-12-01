import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

const ContainerSide = styled.View`
  position: absolute;
  right: 8px;
  bottom: 14%;
  row-gap: 10px;
`;

const Text = styled.Text`
  color: white;
  font-size: 14px;
`;

const Icon = styled.View`
  position: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4px;
`;

const IconSquare = styled.View`
  width: 45px;
  height: 45px;
  background-color: white;
  border-radius: 20px;
`;

const SideBar = () => {
  return (
    <>
      <ContainerSide>
        <Icon>
          <Ionicons name="heart" color="white" size={40} />
          <Text>160k</Text>
        </Icon>
        <Icon>
          <Ionicons name="chatbubble-ellipses-sharp" color="white" size={34} />
          <Text>160k</Text>
        </Icon>
        <Icon>
          <Ionicons name="bookmark" color="white" size={38} />
          <Text>160k</Text>
        </Icon>
        <Icon>
          <Ionicons name="arrow-redo-sharp" color="white" size={38} />
          <Text>160k</Text>
        </Icon>
        <Icon>
          <Image
            style={{ width: 35, height: 35, borderRadius: 20 }}
            source={{
              uri: "https://source.unsplash.com/random/900x700/?person",
            }}
          />
          <Text>160k</Text>
        </Icon>
      </ContainerSide>
    </>
  );
};

export default SideBar;
