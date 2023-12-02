import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import CardCommentUser from "../components/CardCommentUser";
import { imageUnsplash } from "../constant/imageUnsplash";

const DetailImage = styled.Image.attrs({ resizeMode: "cover" })`
  height: 100%;
  width: 100%;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #141414;
  position: relative;
`;

const TextInput = styled.TextInput`
  color: #fefefe;
  background-color: #494949;
  font-size: 28px;
  height: 55px;
  width: 88%;
  font-size: 16px;
  padding-left: 4%;
  padding-right: 4%;
  text-align: left;
  border-radius: 10px;
  margin-top: 10px;
  overflow: hidden;
`;

const CommentContainer = styled.View`
  position: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 20%;
  flex-direction: row;
  padding-bottom: 40%;
  padding-top: 2%;
`;

const ButtonSearch = styled.TouchableOpacity`
  width: 45px;
  height: 55px;
  background-color: #292727;
  position: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;
`;

const PictureContainer = styled.View`
  flex: 4;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 20%;
  position: relative;
`;

const GroupContainer = styled.View`
  position: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 6%;
  padding-right: 8%;
  column-gap: 5%;
  height: 8px;
`;

const ContainerCommentUser = styled.View`
  flex: 5;
  height: 60%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 95%;
  row-gap: 10%;
`;

const ScrollView = styled.ScrollView`
  width: 100%;
  position: flex;
  flex-direction: column;
`;

const NormalText = styled.Text`
  font-size: 20px;
  color: white;
`;

const TitlePost = styled.View`
  position: absolute;
  width: 100%;
  height: 10%;
  bottom: 15%;
  left: 5%;
  margin-bottom: 4%;
  z-index: 2;
`;

const UsernamePost = styled.View`
  width: 100%;
  height: 100%;
  position: flex;
  flex-direction: row;
  column-gap: 5%;
  align-items: center;
`;

const PostDetailScreen = ({ navigation }) => {
  return (
    <>
      <Container>
        {/* Bungkus di Header */}

        <PictureContainer>
          <TitlePost>
            <NormalText style={{ fontWeight: "bold", height: 25 }}>
              All Fruits Post
            </NormalText>

            <UsernamePost>
              <DetailImage
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 250,
                  marginTop: 5,
                }}
                source={{ uri: imageUnsplash("person") }}
              />
              <NormalText
                style={{
                  height: 20,
                  fontSize: 15,
                  paddingTop: 5,
                  color: "#d2d2d2",
                }}
              >
                from
              </NormalText>
              <TouchableOpacity>
                <NormalText
                  style={{
                    height: 20,
                    fontSize: 15,
                    paddingTop: 5,
                    textDecorationLine: "underline",
                    color: "#d2d2d2",
                  }}
                >
                  @adaoho
                </NormalText>
              </TouchableOpacity>
            </UsernamePost>
          </TitlePost>
          <DetailImage source={{ uri: imageUnsplash("fruit") }} />
        </PictureContainer>

        <ContainerCommentUser>
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
              rowGap: 10,
              paddingBottom: 5,
              paddingTop: 15,
            }}
          >
            <CardCommentUser />
          </ScrollView>
        </ContainerCommentUser>

        {/* Comment Input */}
        <KeyboardAvoidingView behavior={"padding"}>
          <CommentContainer>
            <GroupContainer>
              <TextInput
                placeholder="Type your Comment"
                placeholderTextColor="gray"
              />
              <ButtonSearch>
                <Ionicons name="send" color="white" size={18} />
              </ButtonSearch>
            </GroupContainer>
          </CommentContainer>
        </KeyboardAvoidingView>
      </Container>

      {/* Footer */}
    </>
  );
};

export default PostDetailScreen;
