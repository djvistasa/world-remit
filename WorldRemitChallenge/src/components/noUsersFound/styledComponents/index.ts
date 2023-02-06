import styled from 'styled-components/native';

const StyledNoUsersFound = styled.View``;

const StyledNoUsersFoundText = styled.Text`
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

export { StyledNoUsersFound, StyledNoUsersFoundText };
