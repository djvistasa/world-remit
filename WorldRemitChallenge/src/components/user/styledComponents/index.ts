import styled from 'styled-components/native';

const StyledUser = styled.TouchableOpacity`
  border-radius: 15px;
  background-color: ${({
    disabled,
    theme: {
      colors: { lightGray, white },
    },
  }) => (disabled ? lightGray : white)};
  padding: 12px;
  margin-bottom: 10px;
`;

const StyledUserInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledProfileImage = styled.Image`
  border-radius: 50px;
  height: 60px;
  width: 60px;
`;

const StyledUserInfo = styled.View`
  margin-left: 20px;
`;

const StyledUserActions = styled.View`
  flex-direction: row;
`;

const StyledName = styled.Text`
  font-size: 20px;
`;

const StyledReputation = styled.Text`
  font-size: 20px;
`;

export {
  StyledUser,
  StyledUserInfoContainer,
  StyledProfileImage,
  StyledUserInfo,
  StyledUserActions,
  StyledName,
  StyledReputation,
};
