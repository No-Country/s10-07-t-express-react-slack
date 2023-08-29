import { AxiosError, AxiosResponse } from 'axios';
import { IUser } from '../../interfaces/user';

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

// {msg: 'Session y token invalido', data: {existUser : {}, token: ""}}
// data: existUser
// : 
// email: "fabian69@gmail.com"
// fullName:"fabian carabajal"
// password: "$2b$10$U3GmdVJMcLyEXInS3yo8ruNrPODfOGvviyH5EhMbpU.Pimsg47osu"
// _id: "64e79857a2e76009952bed61"
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZhYmlhbjY5QGdtYWlsLmNvbSIsImlhdCI6MTY5MzMxNjQwOCwiZXhwIjoxNjkzMzE2NDA4fQ.-gag7fygNsQ0WINBwgcfLS4zmMOh2QxnZHxBmRz5_FY"
// msg: "Session y token invalido"

interface MyApiResponse {
  data: DataResponse;
  status: number;
  statusText: string;
  headers: any;
}

export interface MyAxiosError extends AxiosError {
  response?: AxiosResponse<MyApiResponse>; 
}

export interface Data {
  existUser?: IUser;
  token: string; 
}

export interface ResponseAxios {
  msg: string;
  data: Data;
}
