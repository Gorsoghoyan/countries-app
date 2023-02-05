import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./slices/sideBar/sideBarSlice";
import userSlice from "./slices/user/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        sideBar: sideBarSlice,
    }           
});