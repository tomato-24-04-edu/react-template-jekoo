import { combineSlices } from "@reduxjs/toolkit";
// import apiService from './apiService';
import { userSlice } from "./globalSlices/userSlice";
import { settingsSlice } from "./globalSlices/settingSlice"; // eslint-disable-next-line
// @ts-ignore
export interface LazyLoadedSlices {}

export const rootReducer = combineSlices(
  userSlice,
  settingsSlice
  // {
  // 	[apiService.reducerPath]: apiService.reducer
  // }
).withLazyLoadedSlices<LazyLoadedSlices>();
