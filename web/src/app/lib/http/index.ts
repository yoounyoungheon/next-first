import axios, { AxiosResponse } from 'axios';

export const instance = axios.create({withCredentials: true});

instance.interceptors.response.use((response: AxiosResponse)=>{
  return response;
})