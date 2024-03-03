import { configureStore, createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: "language",
  initialState: "de",
  reducers: {
    setLanguage: (state, action) => {
      return action.payload;
    }
  }
})

export const { setLanguage } = languageSlice.actions;

export const store = configureStore({
  reducer: {
    language: languageSlice.reducer,
  },
});



// import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// export const setLanguage = createAction('language/setLanguage');

// export const initialState = 'de';

// export const languageReducer = createReducer(initialState, builder => {
//   builder.addCase(setLanguage, (state, action) => {
//     return action.payload;
//   });
// });

// export const store = configureStore({
//   reducer: {
//     language: languageReducer,
//   },
// });
