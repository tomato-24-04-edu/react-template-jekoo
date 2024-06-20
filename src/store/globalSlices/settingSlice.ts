import { createTheme } from "@mui/material/styles";
import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { ThemeType } from "types/configTypes";
import settingsConfig from "configs/settingsConfig";
import _ from "lodash";
const initialState = {
  current: settingsConfig,
};

export const changeTheme = createAsyncThunk(
  "settings/changeTheme",
  async (theme: any, { dispatch }) => {
    return { theme };
  }
);

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeLayout: (state, action) => {
      state.current.layout = _.merge({}, state.current.layout, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeTheme.fulfilled, (state, action) => {
      state.current.theme = action.payload.theme;
    });
  },
});

export const selectCurrentSettings = (state: RootState) =>
  state.settings.current;

export const selectCurrentTheme = createSelector(
  selectCurrentSettings,
  (settings) => createTheme(settings.theme)
);

export const selectCurrentLayout = createSelector(
  selectCurrentSettings,
  (settings) => settings.layout
);

export const selectSidePanel = createSelector(
  selectCurrentSettings,
  (settings) => settings.layout.sidepanel
);

export const selectNavBar = createSelector(
  selectCurrentSettings,
  (settings) => settings.layout.navbar
);

export const { changeLayout } = settingsSlice.actions;

export default settingsSlice.reducer;
