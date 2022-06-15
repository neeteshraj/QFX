import axios from 'axios';
import {BaseUrl} from '@constants/baseUrl';

export const GET = async (url: any) => {
  const BASE_URL = `${BaseUrl}${url}`;
  const response = await axios.get(BASE_URL);

  return response;
};
