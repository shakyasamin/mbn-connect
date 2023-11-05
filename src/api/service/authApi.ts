import { ILoginModel, ITokenModel } from "@/model/authModel";
import axios from "axios";
import { API_URL } from "../constant";

export const AuthApi = {
  login: (body: ILoginModel) => {
    const options = {
      method: "POST",
      url: `${API_URL}/auth/login`,
      data: body,
    };
    return axios.request(options);
  },
  refreshToken: (oldToken: ITokenModel) => {
    const options = {
      method: "POST",
      url: `${API_URL}/auth/refresh-token`,
      data: oldToken,
    };
    return axios.request(options);
  },

  verify: () => {
    const options = {
      method: "GET",
      url: `${API_URL}/auth/verify`,
    };

    return axios.request(options);
  },
};
