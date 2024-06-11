import { combineSlices } from "@reduxjs/toolkit";
// import { i18nSlice } from 'app/store/i18nSlice';
// import apiService from './apiService';
import { userSlice } from "./slices/userSlice/userSlice";
import { settingsSlice } from "./slices/settingSlice/settingSlice"; // eslint-disable-next-line
// @ts-ignore
export interface LazyLoadedSlices {}

export const rootReducer = combineSlices(
  userSlice,
  settingsSlice
  // fuseSettingsSlice,
  // i18nSlice,
  // {
  // 	[apiService.reducerPath]: apiService.reducer
  // }
).withLazyLoadedSlices<LazyLoadedSlices>();
