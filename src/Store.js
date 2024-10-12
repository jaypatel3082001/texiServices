import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './reduxFiles/inputSlice';

export const store = configureStore({
  reducer: {
    input: inputReducer,
  },
});
