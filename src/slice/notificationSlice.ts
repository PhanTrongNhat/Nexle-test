import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

interface NotificationState {
  title: string;
  description: string;
  type: 'success' | 'error';
  isOpen: boolean;
  isReload: boolean;
}

const initialState: NotificationState = {
  title: '',
  description: '',
  type: 'success',
  isOpen: false,
  isReload: false,
};

const notificationSlice = createSlice({
  name: 'notificationSlice',
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.isReload = !state.isReload;
    },
    resetNotification: state => {
      state.isOpen = false;
      state.title = '';
      state.description = '';
      state.isReload = !state.isReload;
    },
  },
  extraReducers: builder => {},
});

const { actions, reducer: notificationReducer } = notificationSlice;

export const { showNotification, resetNotification } = actions;

export default notificationReducer;

export const selectNotification = (state: RootState): NotificationState =>
  state.notification as NotificationState;
