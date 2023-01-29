import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./slices/sideBar/sideBarSlice";

export const store = configureStore({
    reducer: {
        sideBar: sideBarSlice,
    }           
});