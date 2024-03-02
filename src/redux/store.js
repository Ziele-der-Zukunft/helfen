import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const setLanguage = createAction('language/setLanguage');

export const initialState = "de"
;

export const languageReducer = createReducer(initialState, builder => {
  builder.addCase(setLanguage, (state, action) => {
    return action.payload;
  });
});

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});
