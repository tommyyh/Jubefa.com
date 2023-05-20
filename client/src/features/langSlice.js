import { createSlice } from '@reduxjs/toolkit';

export const langSlice = createSlice({
  name: 'lang',
  initialState: {
    value: {
      langCode: '',
      lang: {},
    },
  },
  reducers: {
    setLangCode: (state, data) => {
      state.value.langCode = data;
    },
    setLang: (state, data) => {
      state.value.lang = data;
    },
  },
});

export const { setLangCode, setLang } = langSlice.actions;

export default langSlice.reducer;
