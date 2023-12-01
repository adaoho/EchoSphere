import { Text } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  position: absolute;
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  top: 9%;
  padding-left: 16px;
  padding-right: 16px;
`;

const Group = styled.View`
  flex: 1;
  column-gap: 10px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Separator = styled.View`
  width: 20px;
  height: 20px;
  border-right-width: 1px;
  margin-left: -20px;
  border-right-color: white;
`;

const Status = styled.Text`
  color: white;
  font-size: 16px;
`;

const TopBar = () => {
  return (
    <>
      <Container>
        <Ionicons name="md-videocam-outline" color="white" size={24} />
        <Group>
          <Status>Following</Status>
          <Separator />
          <Status>For You</Status>
        </Group>
        <Ionicons name="search" color="white" size={24} />
      </Container>
    </>
  );
};

export default TopBar;
