import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.open = !state.open;
    },
  },
});

export const selectSideBarOpen = (state) => state.sideBar.open;

export const { toggleSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;
