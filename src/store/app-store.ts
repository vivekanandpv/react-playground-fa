import { configureStore } from '@reduxjs/toolkit';
import { languageSlice } from './language-slice';
import { loginSlice } from './login-slice';

export interface AppStore {
  language: string;
  login: boolean;
}

export const appStore = configureStore({
  reducer: {
    language: languageSlice.reducer,
    login: loginSlice.reducer,
  },
});
