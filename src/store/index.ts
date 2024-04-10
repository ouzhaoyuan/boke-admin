import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import movieSlice from "./features/movieSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    movie: movieSlice
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
