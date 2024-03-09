import { createSlice } from "@reduxjs/toolkit";
import { setThemeReducer } from "./reducers/setTheme.reducer";

export const themeSlice = createSlice({
  name: "theme",
  initialState: "",
  reducers: {
    setTheme: setThemeReducer,
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
