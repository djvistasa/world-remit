/**
 *
 * User
 *
 */

import React, { useState } from 'react';
import { Button } from 'react-native';
import { IUserProps } from '../../interfaces';
import {
  StyledUser,
  StyledUserInfoContainer,
  StyledProfileImage,
  StyledUserInfo,
  StyledUserActions,
  StyledName,
  StyledReputation,
} from './styledComponents';

function User({
  user: {
    profile_image,
    display_name,
    reputation,
    account_id,
    is_blocked,
    is_following,
  },
  onFollowStatusChange,
  onBlockStatusChange,
}: IUserProps): JSX.Element {
  const [isDetailsShown, setIsDetailsShown] = useState<boolean>();

  const toggleDetails = () => setIsDetailsShown(!isDetailsShown);

  const handleBlockStatusChange = (accountId: number, blockStatus: boolean) => {
    toggleDetails();
    onBlockStatusChange(accountId, blockStatus);
  };

  const handleFollowStatusChange = (
    accountId: number,
    blockStatus: boolean,
  ) => {
    toggleDetails();
    onFollowStatusChange(accountId, blockStatus);
  };

  return (
    <StyledUser onPress={() => toggleDetails()} disabled={is_blocked}>
      <StyledUserInfoContainer>
        <StyledProfileImage
          source={{
            uri: profile_image,
          }}
        />
        <StyledUserInfo>
          <StyledName>Name: {display_name}</StyledName>
          <StyledReputation>Reputation: {reputation}</StyledReputation>
        </StyledUserInfo>
      </StyledUserInfoContainer>
      {isDetailsShown && !is_blocked && (
        <StyledUserActions>
          <Button
            title={is_following ? 'Unfollow' : 'Follow'}
            onPress={() => handleFollowStatusChange(account_id, !is_following)}
          />
          <Button
            title="Block"
            onPress={() => handleBlockStatusChange(account_id, !is_blocked)}
          />
        </StyledUserActions>
      )}
    </StyledUser>
  );
}

export default User;
