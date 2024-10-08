import { AxiosResponse } from 'axios';
import { ErrorResponseData } from './http-error-handler';

type ErrorConstructor = {
  message?: string;
  statusCode?: number;
  response?: AxiosResponse<ErrorResponseData>;
};

export class NetworkError extends Error {
  constructor(readonly message = 'Network Error'){
    super(message);
    this.name = 'NetworkError';
  };
}

export class TimeoutError extends Error {
  constructor(readonly message = 'Timeout Error'){
    super(message);
    this.name = 'TimeoutError';
  };
}

export class HttpError extends Error {
  constructor(
    readonly statusCode?:number,
    message?: string,
    readonly response?: AxiosResponse<ErrorResponseData>
  ){
    super(message);
  };
}

export class BadRequestError extends HttpError {
  constructor({message = 'Bad Request', statusCode= 400, response}: ErrorConstructor){
    super(statusCode, message, response);
    this.name = 'BadRequestError';
  };
}

export class UnauthorizedError extends HttpError {
  constructor({message = 'Unauthorized', statusCode= 401, response}: ErrorConstructor){
    super(statusCode, message, response);
    this.name = 'UnauthorizedError';
  };
}

export class ForbiddenError extends HttpError {
  constructor({message = 'Forbidden', statusCode= 403, response}: ErrorConstructor){
    super(statusCode, message, response);
    this.name = 'ForbiddenError';
  };
}

export class NotFoundError extends HttpError {
  constructor({message = 'NotFound', statusCode = 404, response}:ErrorConstructor){
    super(statusCode, message, response)
    this.name = 'NotFoundError'
  };
}

export class InternalServerError extends HttpError {
  constructor({message = 'Internal Server Error', statusCode = 500, response}:ErrorConstructor){
    super(statusCode, message, response)
    this.name = 'InternalServerError'
  };
}