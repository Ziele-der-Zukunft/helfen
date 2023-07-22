import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: 'de', // Початкова мова (наприклад, англійська)
  reducers: {
    setLanguage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;

