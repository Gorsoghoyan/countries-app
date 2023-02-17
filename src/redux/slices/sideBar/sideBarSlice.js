import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSideBar: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const selectSideBarOpen = (state) => state.sideBar.open;

export const { toggleSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;
