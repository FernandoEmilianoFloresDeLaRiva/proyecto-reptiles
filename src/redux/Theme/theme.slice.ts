import { createSlice } from "@reduxjs/toolkit";
import { setThemeReducer } from "./reducers/setTheme.reducer";
import { ReduxSliceName } from "../entities";

export const themeSlice = createSlice({
  name: ReduxSliceName.THEME,
  initialState: "",
  reducers: {
    setTheme: setThemeReducer,
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
