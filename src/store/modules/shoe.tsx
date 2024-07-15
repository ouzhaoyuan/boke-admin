import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getShotListApi } from "@/api/modules/shoe";
// export interface shoe {
//   list: any;
// }

export const getShot = createAsyncThunk<any>("shoe/getShot", async () => {
  console.log(222);

  return await getShotListApi();
});

const initialState: any = {
  list: []
};

export const shoeSlice = createSlice({
  name: "shoe",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.list = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(getShot.fulfilled, (state, action) => {
      state.list = state.list.concat(action.payload);
    });
  }
});

export const { setUserInfo } = shoeSlice.actions;

export default shoeSlice.reducer;
