/**
 *
 * ApplicationWrapper
 *
 */

import React from 'react';
import { IApplicationWrapperProps } from '../../interfaces';
import { StyledApplicationWrapper } from './styledComponents';

function ApplicationWrapper({
  children,
}: IApplicationWrapperProps): JSX.Element {
  return <StyledApplicationWrapper>{children}</StyledApplicationWrapper>;
}

export default ApplicationWrapper;
