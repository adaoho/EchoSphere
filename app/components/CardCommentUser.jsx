import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const CardContent = styled.View`
  position: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  height: 85px;
  width: 95%;
  border-radius: 15px;
  background-color: #101010;
  justify-content: center;
  column-gap: 15px;
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
  justify-content: center;
  align-items: start;
  row-gap: 5px;
  width: 75%;
  height: 100%;
`;

const CardCommentUser = () => {
  return (
    <>
      <CardContent>
        <CardProfile />
        <CardUser>
          <NormalText
            style={{ fontSize: 14, fontWeight: "bold", textAlign: "left" }}
          >
            Adnan Nugroho
          </NormalText>
          <NormalText style={{ fontSize: 15, color: "gray" }}>
            Wow Bagus sekali ini tampilannya! Wow sekarang Banget
          </NormalText>
        </CardUser>
      </CardContent>
    </>
  );
};

export default CardCommentUser;
