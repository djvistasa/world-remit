import { IApiResponse } from '../../interfaces';
import { makeApiCall } from '../../utils/api';
import { BASE_URL } from '../constants';

export default class UsersApi {
  static async getUsers(pageSize?: number): Promise<IApiResponse> {
    return await makeApiCall(
      'get',
      `${BASE_URL}pagesize=${
        pageSize || 20
      }&order=desc&sort=reputation&site=stackoverflow`,
    );
  }
}
