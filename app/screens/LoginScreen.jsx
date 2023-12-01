import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

const Container = styled.View`
  position: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #141414;
  row-gap: 5px;
`;

const FormContainer = styled.View`
  position: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const TextInput = styled.TextInput`
  color: black;
  background-color: white;
  font-size: 28px;
  height: 45px;
  width: 80%;
  font-size: 16px;
  border-width: 1px;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
`;

const TitleText = styled.Text`
  font-size: 40px;
  color: white;
  font-weight: 800;
`;

const SignInButton = styled.TouchableOpacity`
  height: 20px;
  position: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 80%;
  height: 45px;
  background-color: #535353;
`;

const TextButton = styled.Text`
  font-size: 16px;
  color: white;
`;

const ContainerFooter = styled.View`
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const ContainerTitle = styled.View`
  position: flex;
  flex-direction: row;
  column-gap: 7px;
`;

const ContainerHeader = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 25%;
  width: 100%;
`;

const TouchButton = styled.TouchableOpacity`
  position: flex;
  justify-content: center;
  align-items: center;
`;

const LoginScreen = () => {
  return (
    <>
      <Container>
        {/* Header */}
        <ContainerHeader>
          <TitleText style={{ fontSize: 18, fontWeight: "normal" }}>
            Sign In For
          </TitleText>
          <ContainerTitle>
            <FontAwesome5 name="tiktok" color="white" size={45} />
            <TitleText style={{ fontSize: 50, marginTop: -6 }}>
              TokTik
            </TitleText>
          </ContainerTitle>
        </ContainerHeader>

        {/* Form */}
        <FormContainer>
          <TextInput placeholder="input your email" />
          <TextInput placeholder="input your password" />
          <SignInButton>
            <TextButton>Signed In</TextButton>
          </SignInButton>
        </FormContainer>

        {/* Footer */}
        <ContainerFooter>
          <TextButton>Wanna Create an Account?</TextButton>
          <TouchButton>
            <TextButton
              style={{ marginTop: 3, textDecorationLine: "underline" }}
            >
              Try for Register
            </TextButton>
          </TouchButton>
        </ContainerFooter>
      </Container>
    </>
  );
};

export default LoginScreen;
