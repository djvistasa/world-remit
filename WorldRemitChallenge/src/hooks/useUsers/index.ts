import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { UsersApi } from '../../api';
import { IGetUserResponse, IUser, IUseUsers } from '../../interfaces';

function useUsers(): IUseUsers {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInitialFetch, setIsInitialFetch] = useState<boolean>(true);

  const enhanceUsers = (responseFromServer: IGetUserResponse): IUser[] =>
    responseFromServer.items.map(user => ({
      ...user,
      is_blocked: false,
      is_following: false,
    }));

  const getUsers = useCallback(async (pageSize?: number) => {
    setIsLoading(true);
    const { result, ok, error } = await UsersApi.getUsers(pageSize || 20);
    setIsLoading(false);
    setIsInitialFetch(false);

    if (error) {
      return Alert.alert(error as string);
    }

    if (ok && result && result) {
      const enhancedUsers = enhanceUsers(result as IGetUserResponse);
      setUsers(enhancedUsers);
    }
  }, []);

  const changeUserBlockStatus = (userId: number, isBlocked: boolean) => {
    const userToModifyIndex = users.findIndex(
      ({ account_id }) => account_id === userId,
    );

    if (userToModifyIndex > -1) {
      users[userToModifyIndex].is_blocked = isBlocked;

      setUsers([...users]);
    }
  };

  const changeUserFollowStatus = (userId: number, isFollowing: boolean) => {
    const userToModifyIndex = users.findIndex(
      ({ account_id }) => account_id === userId,
    );

    if (userToModifyIndex > -1) {
      users[userToModifyIndex].is_following = isFollowing;

      setUsers([...users]);
    }
  };

  return {
    users,
    isLoading,
    isInitialFetch,
    getUsers,
    changeUserBlockStatus,
    changeUserFollowStatus,
  };
}

export default useUsers;
