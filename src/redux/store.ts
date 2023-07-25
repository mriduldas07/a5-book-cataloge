import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { api } from "./api/apiSlice";
import bookReducer from "./features/books/bookSlice";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";
import wishListReducer from "./features/wishList/wishListSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  cart: cartReducer,
  user: userReducer,
  wishlist: wishListReducer,
  book: bookReducer,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefauultMiddleware) =>
    getDefauultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
