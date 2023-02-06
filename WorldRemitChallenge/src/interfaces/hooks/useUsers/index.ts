import { IUser } from '../../shared';

interface IUseUsers {
  users: IUser[];
  isLoading: boolean;
  isInitialFetch: boolean;
  getUsers: (pageSize?: number) => void;
  changeUserBlockStatus: (userId: number, isBlocked: boolean) => void;
  changeUserFollowStatus: (userId: number, isFollowing: boolean) => void;
}

export type { IUseUsers };
