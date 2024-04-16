import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";

import counterSlice from "./features/counterSlice";
import movieSlice from "./features/movieSlice";
import globalSlice from "./modules/global";
import userSlice from "./modules/user";

const persistConfig = {
  key: "root", // 持久化的 key
  storage, // 指定持久化存储的方式，默认为 localStorage
  whitelist: ["global", "user"] // 指定哪些 reducer 需要持久化
};

const rootReducer = combineReducers({
  counter: counterSlice,
  movie: movieSlice,
  global: globalSlice,
  user: userSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
