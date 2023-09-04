import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updateTokenBearer as updateTokenBearerIdentityService } from 'api/services/identity';
import { RootState } from 'app/store';
import {
  ACCESS_TOKEN,
  DATE_GET_TOKEN,
  REFRESH_TOKEN,
  USER_ID,
  USER_ITEM,
} from 'utils';

import { AuthApi, LoginType, LogoutType, RegisterType } from '../api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body: RegisterType, { rejectWithValue }) => {
    try {
      const data = await AuthApi.register(body);

      return data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body: LoginType, { rejectWithValue }) => {
    try {
      const data = await AuthApi.login(body);

      return data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (body: LogoutType, { rejectWithValue }) => {
    try {
      const data = await AuthApi.logout(body);

      return data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

interface AuthState {
  accessToken?: string;
  item?: any;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  accessToken: '',
  item: {},
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    updateItem: state => {
      const item = localStorage.getItem(USER_ITEM);
      const accessToken = localStorage.getItem(ACCESS_TOKEN);

      if (accessToken) {
        updateTokenBearerIdentityService(`Bearer ${accessToken}`);
      }

      if (item) {
        state.item = JSON.parse(item);
        state.isAuthenticated = true;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(signup.fulfilled, (state, { payload }) => {});
    builder.addCase(login.fulfilled, (state, { payload }) => {
      const accessToken = (payload as any).accessToken;
      const refreshToken = (payload as any).refreshToken;
      const dateGetToken = new Date();

      const { id, firstName, lastName, email } = (payload as any).user;

      state.accessToken = accessToken;
      state.isAuthenticated = true;

      state.item = {
        id,
        firstName,
        lastName,
        email,
      };

      localStorage.setItem(DATE_GET_TOKEN, dateGetToken.toString());
      localStorage.setItem(
        USER_ITEM,
        JSON.stringify({ id, firstName, lastName, email })
      );
      localStorage.setItem(REFRESH_TOKEN, refreshToken);
      localStorage.setItem(ACCESS_TOKEN, accessToken);

      updateTokenBearerIdentityService(`Bearer ${accessToken}`);
    });
    builder.addCase(logout.fulfilled, (state, { payload }) => {
      state.isAuthenticated = false;
      state.item = {};

      localStorage.removeItem(USER_ID);
      localStorage.removeItem(REFRESH_TOKEN);
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(USER_ITEM);

      updateTokenBearerIdentityService('');
    });
  },
});

const { actions, reducer: authReducer } = authSlice;

export const { updateItem } = actions;

export default authReducer;

export const selectAuth = (state: RootState): AuthState =>
  state.auth as AuthState;
