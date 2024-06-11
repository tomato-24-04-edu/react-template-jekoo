import {
  createTheme,
  // getContrastRatio
} from "@mui/material/styles";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import _ from "@lodash";
import { RootState } from "src/store/store";
import themesConfig from "src/configs/themeConfig";

const defaultSettings = {
  theme: "default",
  layout: "normal",
};

const initialState = {
  current: defaultSettings,
};

export const changeTheme = createAsyncThunk(
  "settings/changeTheme",
  async (theme: "default" | "dark", { dispatch }) => {
    return { theme };
  }
);

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeLayout: (state, action: PayloadAction<"wide" | "normal">) => {
      state.current.layout = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeTheme.fulfilled, (state, action) => {
      state.current.theme = action.payload.theme;
    });
  },
});

function generateTheme(theme: string) {
  return createTheme(
    theme === "default" ? themesConfig.default : themesConfig.dark
  );
}

export const selectCurrentSettings = (state: RootState) =>
  state?.settings.current;
export const selectCurrentTheme = createSelector(
  selectCurrentSettings,
  (settings) => generateTheme(settings.theme)
);
export const selectCurrentLayout = createSelector(
  selectCurrentSettings,
  (settings) => settings.layout
);

export const { changeLayout } = settingsSlice.actions;
export type settingsSliceType = typeof settingsSlice;

export default settingsSlice.reducer;
