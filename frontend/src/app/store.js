import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import doubtsReducer from '../features/doubts/doubtsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    doubts: doubtsReducer,
  },
});
