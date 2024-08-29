import axios, { AxiosResponse } from 'axios';
import { httpErrorHandler } from './http-error-handler';
import Cookies from 'js-cookie';

export const instance = axios.create({withCredentials: true});

instance.interceptors.response.use((response: AxiosResponse)=>{
  return response;
}, httpErrorHandler ); // 에러 식별 후 비동기로 반환

instance.interceptors.request.use(
  function(config){
    const tocken = Cookies.get('accessTocken'); // 토큰 쿠키 가져오기
    if(tocken){
      config.headers.Authorization = `Bearer ${tocken}`;
    }
    // 요청이 전달되기 전에 작업 수행
    return config
  },
  function (error){
    return Promise.reject(error);
  },
)