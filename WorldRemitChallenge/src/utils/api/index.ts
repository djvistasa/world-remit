import axios, { AxiosHeaders } from 'axios';
import { IApiResponse } from '../../interfaces';

const handleApiError = (error: Error) => ({
  ok: false,
  result: null,
  error: error.message,
});

const handleApiSuccess = (result: unknown) => ({
  ok: true,
  result,
  error: null,
});

const makeApiCall = async (
  method: string,
  url: string,
  data?: unknown,
  headers?: AxiosHeaders,
  callBack?: (response: unknown) => void,
): Promise<IApiResponse> => {
  try {
    const { data: response } = await axios({
      method,
      url,
      data,
      headers,
    });

    if (response.error) {
      return handleApiError(new Error(response.error));
    }

    if (callBack) {
      callBack(response);
    }

    if (response.data) {
      return handleApiSuccess(response.data);
    }

    return handleApiSuccess(response);
  } catch (error: unknown) {
    return handleApiError(new Error(error as string));
  }
};

export { makeApiCall };
