/**
 *
 * UsersList
 *
 */

import React from 'react';
import { FlatList } from 'react-native';
import { IUsersListProps } from '../../interfaces';
import User from '../../components/user';
import NoUsersFound from '../../components/noUsersFound';
import { StyledUsersList } from './styledComponents';

function UsersList({
  users,
  onBlockStatusChange,
  onFollowStatusChange,
  isInitialFetch,
}: IUsersListProps): JSX.Element {
  return (
    <StyledUsersList>
      <FlatList
        data={users}
        ListEmptyComponent={!isInitialFetch ? <NoUsersFound /> : null}
        renderItem={({ item }) => (
          <User
            user={item}
            onBlockStatusChange={onBlockStatusChange}
            onFollowStatusChange={onFollowStatusChange}
          />
        )}
      />
    </StyledUsersList>
  );
}

export default UsersList;
