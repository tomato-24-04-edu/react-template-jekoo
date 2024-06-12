import { combineSlices } from "@reduxjs/toolkit";
// import apiService from './apiService';
import { userSlice } from "./slices/userSlice/userSlice";
import { settingsSlice } from "./slices/settingSlice/settingSlice"; // eslint-disable-next-line
// @ts-ignore
export interface LazyLoadedSlices {}

export const rootReducer = combineSlices(
  userSlice,
  settingsSlice
  // {
  // 	[apiService.reducerPath]: apiService.reducer
  // }
).withLazyLoadedSlices<LazyLoadedSlices>();
