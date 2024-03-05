import { PayloadAction } from "@reduxjs/toolkit";

export const setThemeReducer = (
  state: string,
  action: PayloadAction<string>
) => {
  const theme = action.payload;
  console.log(theme);
  return theme;
};
