import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  placeholder: "",
  value: "",
  location: null
};

export const searchInputSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
    changePlaceholder: (state, action) => {
      state.placeholder = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    }
  },
});

export const selectInput = (state) => state.searchInput;

export const { changeValue, changePlaceholder, setLocation } = searchInputSlice.actions;

export default searchInputSlice.reducer;
