import { createSlice } from "@reduxjs/toolkit";
export interface user {
  info: {};
}

const initialState: user = {
  info: {}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload;
    }
  }
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
