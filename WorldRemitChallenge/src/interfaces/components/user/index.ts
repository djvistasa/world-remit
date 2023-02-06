import { IUser } from '../../shared';

interface IUserProps {
  user: IUser;
  onFollowStatusChange: (account_id: number, followStatus: boolean) => void;
  onBlockStatusChange: (account_id: number, blockStatus: boolean) => void;
}

export type { IUserProps };
