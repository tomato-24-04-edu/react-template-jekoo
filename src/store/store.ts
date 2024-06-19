import {
  Action,
  Middleware,
  ThunkAction,
  configureStore,
  createSelector,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import apiService from "app/store/apiService";
import { rootReducer } from "./reducer";
import { dynamicMiddleware } from "./middleware";

export type RootState = ReturnType<typeof rootReducer>;

// const middlewares: Middleware[] = [apiService.middleware, dynamicMiddleware];
const middlewares: Middleware[] = [dynamicMiddleware];

export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  });
  setupListeners(store.dispatch);
  return store;
};

export const store = makeStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

export default store;
