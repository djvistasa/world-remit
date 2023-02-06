/**
 *
 * NoUsersFound
 *
 */

import React from 'react';
import { StyledNoUsersFound, StyledNoUsersFoundText } from './styledComponents';

function NoUsersFound(): JSX.Element {
  return (
    <StyledNoUsersFound>
      <StyledNoUsersFoundText>There are no users found.</StyledNoUsersFoundText>
    </StyledNoUsersFound>
  );
}

export default NoUsersFound;
