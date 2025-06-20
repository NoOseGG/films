import { createSlice } from "@reduxjs/toolkit";

export interface SettingsState {
  value: number;
}

const initialState: SettingsState = {
  value: 0,
};

export const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState,
  reducers: {
    increment: state => {
      state.value + 1;
    },
  },
});

export const { increment } = settingsSlice.actions;
export default settingsSlice.reducer;
