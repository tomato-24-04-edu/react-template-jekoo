import { combineSlices } from "@reduxjs/toolkit";
// import { fuseSettingsSlice } from '@fuse/core/FuseSettings/fuseSettingsSlice';
// import { i18nSlice } from 'app/store/i18nSlice';
// import apiService from './apiService';
import { userSlice } from "./slices/userSlice/userSlice";

// eslint-disable-next-line
// @ts-ignore
export interface LazyLoadedSlices {}

export const rootReducer = combineSlices(
  userSlice
  // fuseSettingsSlice,
  // i18nSlice,
  // {
  // 	[apiService.reducerPath]: apiService.reducer
  // }
).withLazyLoadedSlices<LazyLoadedSlices>();
