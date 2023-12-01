import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const CardContent = styled.View`
  position: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  height: 80px;
  width: 95%;
  border-radius: 15px;
  background-color: #101010;
`;

const CardProfile = styled.View`
  background-color: gray;
  height: 60px;
  width: 60px;
  border-radius: 16px;
`;

const NormalText = styled.Text`
  color: white;
  font-size: 20px;
`;

const CardUser = styled.View`
  position: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 156px;
`;

const FollowButton = styled.TouchableOpacity`
  background-color: #0b9d10;
  position: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 10px;
`;

const CardUserComponent = () => {
  return (
    <>
      <CardContent>
        <CardProfile />
        <CardUser>
          <NormalText
            style={{ fontSize: 18, fontWeight: "bold", textAlign: "left" }}
          >
            Susanti Jaya Karta
          </NormalText>
          <NormalText style={{ fontSize: 14, color: "gray" }}>
            @uhuoho
          </NormalText>
        </CardUser>
        <FollowButton>
          <NormalText style={{ fontSize: 15 }}>Follow</NormalText>
        </FollowButton>
      </CardContent>
    </>
  );
};

export default CardUserComponent;
