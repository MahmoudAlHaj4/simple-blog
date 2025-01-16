// src/utils/sendRequest.ts
import axios from 'axios';
import { RequestMethod } from '../enums/requestMethods';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'; 

interface SendRequestParams {
  method: RequestMethod;
  route: string;
  body?: any;
}

export const sendRequest = async <T>({ method, route, body }: SendRequestParams): Promise<T> => {
  try {
    const response = await axios.request<T>({
      method: method,
      url: route,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
      },
    });
    console.log(response);


    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
    }
    throw error;
  }
};
