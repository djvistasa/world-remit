import { IUser } from '../../shared';

interface IUsersListProps {
  users: IUser[];
  isInitialFetch: boolean;
  onFollowStatusChange: (account_id: number, followStatus: boolean) => void;
  onBlockStatusChange: (account_id: number, blockStatus: boolean) => void;
}

export type { IUsersListProps };
