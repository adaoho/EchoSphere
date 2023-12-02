import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const imageUnsplash = (image) => {
  return `https://source.unsplash.com/random/900×900/?${image}`;
};
const CardComponent = styled.View`
  position: flex;
  background-color: white;
  border-radius: 10px;
  width: 85%;
  height: 350px;
  overflow: hidden;
  position: relative;
`;

const DescriptionComponent = styled.View`
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 35%;
  left: 7%;
  z-index: 10;
  row-gap: 3%;
  padding-right: 15%;
  overflow: hidden;
`;

const FooterComponent = styled.View`
  position: absolute;
  align-items: flex-end;
  justify-content: flex-end;
  top: 2%;
  right: 5%;
  width: 100%;
  height: 12%;
  z-index: 10;
  row-gap: 3px;
  flex-direction: row;
  column-gap: 10%;
`;

const NormalText = styled.Text`
  color: "#141414";
  font-size: 20px;
`;

const BackgroundImage = styled.Image.attrs({ resizeMode: "cover" })`
  height: 100%;
`;

const ProfileImage = styled.Image.attrs({ resizeMode: "cover" })`
  height: 24px;
  width: 24px;
  border-radius: 20px;
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

const UserContainer = styled.View`
  width: 100%;
  position: flex;
  flex-direction: row;
  margin-top: 10px;
  height: 20%;
  column-gap: 5px;
  align-items: center;
`;

const CardHome = ({ navigation }) => {
  const SizeIcon = 30;
  return (
    <>
      {/* Card Component */}
      <CardComponent>
        {/* Description Component */}
        <DescriptionComponent>
          <NormalText
            style={{ color: "white", fontWeight: "bold", fontSize: 30 }}
          >
            Hello World
          </NormalText>
          <NormalText style={{ fontSize: 15, color: "white" }}>
            This prop can also contain several remote URLs, specified together
          </NormalText>
          <UserContainer>
            <ProfileImage
              style={{ marginRight: 5 }}
              source={{ uri: imageUnsplash("person") }}
            />
            <NormalText style={{ fontSize: 15, color: "#bdbdbd" }}>
              from
            </NormalText>
            <TouchableOpacity>
              <NormalText
                style={{
                  fontSize: 15,
                  color: "#bdbdbd",
                  textDecorationLine: "underline",
                }}
              >
                @adaoho
              </NormalText>
            </TouchableOpacity>
          </UserContainer>
        </DescriptionComponent>

        {/* Backrground Card Component */}
        <Gradient
          style={{ zIndex: 7, height: 200 }}
          locations={[0, 1]}
          colors={["#00000000", "#00000090"]}
        ></Gradient>
        <BackgroundImage source={{ uri: imageUnsplash("fruit") }} />
        {/* Footer Button Comment, Likes */}
        <FooterComponent>
          <TouchableOpacity>
            <Ionicons name="heart" color="white" size={SizeIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PostDetail");
            }}
          >
            <Ionicons
              name="chatbubble-ellipses-sharp"
              color="white"
              size={SizeIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="arrow-redo-sharp" color="white" size={SizeIcon} />
          </TouchableOpacity>
        </FooterComponent>
      </CardComponent>
    </>
  );
};

export default CardHome;
