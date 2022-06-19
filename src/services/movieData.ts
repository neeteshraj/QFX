import axios from 'axios';
import {BaseUrl} from '@constants/baseUrl';

/**
 * It takes a URL as a parameter, and returns a response from the server
 * @param {any} url - The endpoint you want to hit.
 * @returns The response from the API call.
 */
export const GET = async (url: any) => {
  const BASE_URL = `${BaseUrl}${url}`;
  const response = await axios.get(BASE_URL);

  return response;
};
