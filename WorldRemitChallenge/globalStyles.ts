import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
`;

export { StyledSafeAreaView };
