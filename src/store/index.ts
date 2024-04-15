import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import movieSlice from "./features/movieSlice";
import globalSlice from "./modules/global";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    movie: movieSlice,
    global: globalSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
