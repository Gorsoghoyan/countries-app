import { configureStore } from "@reduxjs/toolkit";
import searchInputSlice from "./slices/search/searchInputSlice";
import sideBarSlice from "./slices/sideBar/sideBarSlice";
import userSlice from "./slices/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    sideBar: sideBarSlice,
    searchInput: searchInputSlice
  },
});
