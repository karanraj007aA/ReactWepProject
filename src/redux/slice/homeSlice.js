import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    updateLogin: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

// export const { updateLogin } = homeSlice.actions;
// export default homeSlice.reducer;

export const {
  actions: { updateLogin },
  reducer: homeReducer,
} = homeSlice;
