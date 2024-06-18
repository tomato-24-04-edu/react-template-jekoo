import { combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { DeepPartial } from "react-hook-form";
import { SlicesType } from "./dynamicInjection";

export const getReducersFromSlices = <T = unknown>(
  slices: SlicesType
): ReducersMapObject<T> => {
  const reducerGroups: DeepPartial<ReducersMapObject> = {};
  slices?.forEach((slice) => {
    const [primary, secondary] = slice.name.split("/");
    if (secondary) {
      if (!reducerGroups[primary]) {
        reducerGroups[primary] = {};
      }
      (reducerGroups[primary] as ReducersMapObject<T>)[secondary] =
        slice.reducer;
    } else {
      reducerGroups[primary] = slice.reducer;
    }
  });

  const combinedReducers = {};

  Object.entries(reducerGroups).forEach(([key, reducerGroup]) => {
    if (typeof reducerGroup === "function") {
      combinedReducers[key] = reducerGroup as Reducer;
    } else if (typeof reducerGroup === "object") {
      combinedReducers[key] = combineReducers(reducerGroup);
    }
  });

  return combinedReducers as ReducersMapObject<T>;
};
export default getReducersFromSlices;
