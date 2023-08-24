import { AxiosError, AxiosResponse } from 'axios';

export interface Register {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Errors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

interface DataResponse {
  error?: string;
  existUser?: Register;
  token?: string;
}

interface MyApiResponse {
  data: DataResponse;
  status: number;
  statusText: string;
  headers: any;
}

export interface MyAxiosError extends AxiosError {
  response?: AxiosResponse<MyApiResponse>; 
}
