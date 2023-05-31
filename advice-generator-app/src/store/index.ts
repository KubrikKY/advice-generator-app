import { configureStore } from '@reduxjs/toolkit';
import { adviceReducer } from './advice/adviceSlice';

export const store = configureStore({
  reducer: {
    advice: adviceReducer,
  },
});
