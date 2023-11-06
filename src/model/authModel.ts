export interface ITokenModel {
  accessToken: string;
  refreshToken: string;
}

export interface ILoginModel {
  email: string;
  password: string;
}
export interface ILoginResponseModel {
  data: ITokenModel;
  success: boolean;
  message: string;
  errors: Array<string> | null;
}
