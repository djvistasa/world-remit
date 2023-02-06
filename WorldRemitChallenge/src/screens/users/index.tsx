/**
 *
 * Users
 *
 */
import React, { useEffect } from 'react';
import ApplicationWrapper from '../../components/applicationWrapper';
import UsersList from '../../components/usersList';
import { useUsers } from '../../hooks';

function Users(): JSX.Element {
  const {
    users,
    isInitialFetch,
    getUsers,
    changeUserBlockStatus,
    changeUserFollowStatus,
  } = useUsers();

  const handleBlockStatusChange = (accountId: number, blockStatus: boolean) =>
    changeUserBlockStatus(accountId, blockStatus);

  const handleFollowStatusChange = (accountId: number, blockStatus: boolean) =>
    changeUserFollowStatus(accountId, blockStatus);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <ApplicationWrapper>
      <UsersList
        users={users}
        onBlockStatusChange={handleBlockStatusChange}
        onFollowStatusChange={handleFollowStatusChange}
        isInitialFetch={isInitialFetch}
      />
    </ApplicationWrapper>
  );
}

export default Users;
