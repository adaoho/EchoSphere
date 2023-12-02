import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CardUserComponent from "../components/CardUser";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #141414;
  position: relative;
`;

const ProfilePicture = styled.View`
  flex: 2.7;
  margin-top: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StatsBlock = styled.View`
  position: flex;
  flex-direction: row;
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  column-gap: 20px;
`;

const StatsText = styled.View`
  position: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1px;
`;

const ButtonBlock = styled.View`
  position: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  padding-top: 20px;
`;

const ButtonAddProfile = styled.TouchableOpacity`
  position: flex;
  flex-direction: row;
  background-color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 8px;
  padding-top: 8px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
`;

const ProfileUsername = styled.Text`
  color: white;
  font-size: 20px;
`;

const NormalText = styled.Text`
  color: white;
  font-size: 20px;
`;

const ContainerContent = styled.View`
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 8%;
  flex: 3;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: #141414;
  column-gap: 8px;
  row-gap: 8px;
`;

const Gradient = styled(LinearGradient)`
  height: 7%;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;

const TextInput = styled.TextInput`
  color: #fefefe;
  background-color: #494949;
  font-size: 28px;
  height: 45px;
  width: 88%;
  font-size: 16px;
  text-align: center;
  border-radius: 10px;
`;

const SearchContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  top: 43%;
`;

const ButtonSearch = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  background-color: #292727;
  position: absolute;
  right: 6%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const ScrollView = styled.ScrollView`
  width: 100%;
  position: flex;
  flex-direction: column;
`;

const EmptyView = styled.View`
  position: flex;
  height: 90px;
  width: 100%;
`;

const ProfileScreen = ({ navigation }) => {
  return (
    <>
      <Container>
        <ProfilePicture>
          <Ionicons
            name="ios-person-circle-sharp"
            color="white"
            size={120}
            style={{ paddingLeft: 6 }}
          />
          <ProfileUsername>Adnan Nugroho</ProfileUsername>
          <ProfileUsername
            style={{ fontSize: 16, color: "grey", marginTop: 2 }}
          >
            @adaoho
          </ProfileUsername>
          {/* Statistic Followers */}
          <StatsBlock>
            <StatsText>
              <NormalText style={{ fontWeight: "bold" }}>200</NormalText>
              <NormalText style={{ fontSize: 14 }}>Following</NormalText>
            </StatsText>
            <StatsText>
              <NormalText style={{ fontWeight: "bold" }}>230</NormalText>
              <NormalText style={{ fontSize: 14 }}>Followers</NormalText>
            </StatsText>
            <StatsText>
              <NormalText style={{ fontWeight: "bold" }}>32</NormalText>
              <NormalText style={{ fontSize: 14 }}>Likes</NormalText>
            </StatsText>
          </StatsBlock>
          {/* Button Add Profile */}

          <ButtonBlock>
            <StatsText>
              <ButtonAddProfile>
                <Ionicons name="people-circle" color="black" size={18} />
                <NormalText style={{ fontSize: 18, color: "black" }}>
                  Following
                </NormalText>
              </ButtonAddProfile>
            </StatsText>
            <StatsText>
              <ButtonAddProfile>
                <Ionicons
                  name="people-circle-outline"
                  color="black"
                  size={18}
                />
                <NormalText style={{ fontSize: 18, color: "black" }}>
                  Followers
                </NormalText>
              </ButtonAddProfile>
            </StatsText>
          </ButtonBlock>
        </ProfilePicture>

        {/* Container Followers */}
        <ContainerContent>
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
              rowGap: 8,
              paddingTop: 5,
            }}
          >
            <CardUserComponent />
            <CardUserComponent />
            <CardUserComponent />
            <CardUserComponent />
            <CardUserComponent />
            <CardUserComponent />
            <EmptyView />
          </ScrollView>
        </ContainerContent>

        <SearchContainer>
          <TextInput
            placeholder="Search by Username"
            placeholderTextColor="gray"
          />
          <ButtonSearch>
            <Ionicons name="ios-search" color="white" size={22} />
          </ButtonSearch>
        </SearchContainer>
      </Container>

      <Gradient
        locations={[0, 1]}
        colors={["#00000000", "#00000090"]}
      ></Gradient>
    </>
  );
};

export default ProfileScreen;
