import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  position: flex;
  position: absolute;
  flex-direction: column;
  row-gap: 8px;
  left: 4%;
  bottom: 120px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: white;
`;

const Paragraph = styled.Text`
  font-size: 14px;
  width: 300px;
  color: white;
  line-height: 20px;
`;

const MusicDesc = styled.View`
  position: flex;
  flex-direction: row;
  column-gap: 8px;
`;

const MusicText = styled.Text`
  color: #d1d1d1;
  font-size: 14px;
`;

const Description = () => {
  return (
    <>
      <Container>
        <Title>YourBabe_Score</Title>
        <Paragraph>
          Lagi nyobain Lagunya yang bikin candu nih parah bikin candu dan pengen
          pake templatenya terus nih kacau kacau kacau kacau kacau
        </Paragraph>
        <MusicDesc>
          <Ionicons name="musical-notes" color="#d1d1d1" size={14} />
          <MusicText>Listening To Radio - By Your Radio</MusicText>
        </MusicDesc>
      </Container>
    </>
  );
};

export default Description;
