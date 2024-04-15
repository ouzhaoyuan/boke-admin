import { createSlice } from "@reduxjs/toolkit";
export interface global{
  isCollapse: boolean;
}

const initialState: global = {
  isCollapse: false
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setisCollapse: (state, action) => {
      state.isCollapse = action.payload;
    }
  }
});

export  const { setisCollapse } = globalSlice.actions;

export default globalSlice.reducer;