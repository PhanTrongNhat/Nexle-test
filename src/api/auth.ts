/* eslint-disable no-useless-catch */
import { identityService } from 'api/services';

const pathname = '/auth';

export const AuthApi = {
  login: async (body: LoginType) => {
    try {
      const response = await identityService.post(`${pathname}/signin`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  logout: async (body: LogoutType) => {
    try {
      const response = await identityService.post(`${pathname}/signout`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },

  register: async (data: RegisterType) => {
    try {
      const response = await identityService.post(`${pathname}/signup`, data);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export type LogoutType = {
  refreshToken: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
