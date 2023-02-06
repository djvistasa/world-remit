import { IUser } from '../shared';

interface IApiResponse {
  error: unknown;
  ok: boolean;
  result: unknown;
}

interface IGetUserResponse {
  has_more: boolean;
  items: IUser[];
  quota_max: number;
  quota_remaining: number;
}

export type { IApiResponse, IGetUserResponse };
