import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  align-items: start;
  justify-content: space-between;
  height: 90px;
  background-color: #ffffff05;
  width: 100%;
  position: flex;
  position: absolute;
  bottom: 0;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 2%;
  z-index: 1;
  border-top-width: 1px;
  border-top-color: #ffffff50;
  flex-direction: row;
  column-gap: 8px;
`;

const Text = styled.Text`
  color: white;
  font-size: 12px;
`;

const Icon = styled.View`
  position: flex;
  flex-direction: column;
  row-gap: 4px;
  justify-content: center;
  align-items: center;
`;

const IconAdd = styled.View`
  position: flex;
  padding-left: 4px;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
`;

const IconAddCont = styled.View``;

const TabBar = () => {
  return (
    <Container>
      <Icon>
        <Ionicons name="home-outline" color="white" size={24} />
        <Text>Home</Text>
      </Icon>
      <Icon>
        <Ionicons name="people-outline" color="white" size={24} />
        <Text>Friends</Text>
      </Icon>
      <Icon>
        <IconAdd>
          <Ionicons name="add-sharp" color="black" size={28} />
        </IconAdd>
      </Icon>
      <Icon>
        <Ionicons name="mail-open-outline" color="white" size={24} />
        <Text>Message</Text>
      </Icon>
      <Icon>
        <Ionicons name="person-outline" color="white" size={24} />
        <Text>Profile</Text>
      </Icon>
    </Container>
  );
};

export default TabBar;
