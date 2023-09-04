import { combineReducers } from 'redux';

import appDeviceReducer from 'slice/appDeviceSlice';
import authReducer from 'slice/authSlice';
import notificationReducer from 'slice/notificationSlice';

const rootReducer = combineReducers({
  appDevice: appDeviceReducer,
  auth: authReducer,
  notification: notificationReducer,
});

export default rootReducer;
