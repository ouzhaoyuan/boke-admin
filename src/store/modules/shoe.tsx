import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getShotListApi, getShotBrandApi } from "@/api/modules/shoe";
// export interface shoe {
//   list: any;
// }

export const getShot = createAsyncThunk<any>("shoe/getShot", async () => {
  return await getShotListApi();
});

export const getShotBrand = createAsyncThunk<any>(
  "shoe/getShotBrand",
  async () => {
    return await getShotBrandApi();
  }
);

const initialState: any = {
  list: [],
  brandList: []
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
    builder.addCase(getShotBrand.fulfilled, (state, action) => {
      state.brandList = action.payload;
    });
  }
});

export const { setUserInfo } = shoeSlice.actions;

export default shoeSlice.reducer;
