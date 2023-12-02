import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

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

const TextInput = styled.TextInput`
  color: #fefefe;
  background-color: #494949;
  font-size: 28px;
  height: 45px;
  width: 90%;
  font-size: 16px;
  text-align: left;
  padding-left: 4%;
  border-radius: 10px;
`;

const TitleContainer = styled.View`
  flex: 1.6;
  flex-direction: column;
  width: 95%;
  height: 20%;
  right: 3%;
  left: 4%;
  top: 10%;
  align-items: start;
  row-gap: 5px;
  position: relative;
`;

const Title = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: 600;
`;

const SearchContainer = styled.View`
  position: flex;
  justify-content: center;
  align-items: start;
  width: 355px;
  row-gap: 15%;
  top: 2%;
`;

const FilterContainer = styled.View`
  position: flex;
  margin-top: 10%;
  flex-direction: row;
  column-gap: 10px;
  width: 100%;
  height: 35px;
`;

const ButtonFilter = styled.TouchableOpacity`
  padding: 10px;
  background-color: #2a2828;
  border-radius: 12px;
  position: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 14px;
  color: white;
`;

const ViewVertical = styled.View`
  position: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  row-gap: 10%;
`;

const ViewHorizontal = styled.View`
  position: flex;
  flex-direction: row;
  width: 100%;
  column-gap: 10%;
`;

const PostCreateScreen = ({ navigation }) => {
  const onLogin = () => {
    // Dialog.show({
    //   type: ALERT_TYPE.SUCCESS,
    //   title: "Success",
    //   textBody: "Congrats! this is dialog box success",
    //   button: "close",
    // });

    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: "Success",
      textBody: "Congrats! this is toast notification success",
    });
  };

  return (
    <>
      <AlertNotificationRoot theme="dark">
        <Container>
          {/* Header */}
          <TitleContainer>
            <Title style={{ fontSize: 35 }}>Create Your Post</Title>
            <Title style={{ fontSize: 14, color: "#9b9b9b" }}>
              @adaoho - Adnan Nugroho
            </Title>
            <SearchContainer>
              <TextInput
                placeholder="Your Content Title"
                placeholderTextColor="gray"
              />
              <TextInput
                placeholder="Image URL Link"
                placeholderTextColor="gray"
              />
              <TextInput
                placeholder="Insert Some Tag"
                placeholderTextColor="gray"
              />
            </SearchContainer>

            <FilterContainer>
              <ViewVertical>
                <Title style={{ fontSize: 14, color: "#9b9b9b" }}>
                  Tag Suggestion
                </Title>

                <ViewHorizontal>
                  <ButtonFilter>
                    <Text>Flower</Text>
                  </ButtonFilter>
                  <ButtonFilter>
                    <Text>Fruit</Text>
                  </ButtonFilter>
                  <ButtonFilter>
                    <Text>Park</Text>
                  </ButtonFilter>
                  <ButtonFilter>
                    <Text>Programming</Text>
                  </ButtonFilter>
                </ViewHorizontal>
              </ViewVertical>
            </FilterContainer>

            <ViewVertical style={{ marginTop: 50 }}>
              <TouchableOpacity>
                <ButtonFilter
                  style={{ width: "90%", height: 40, backgroundColor: "green" }}
                >
                  <Text>Create Post</Text>
                </ButtonFilter>
              </TouchableOpacity>
            </ViewVertical>
          </TitleContainer>
        </Container>
      </AlertNotificationRoot>
    </>
  );
};

export default PostCreateScreen;
