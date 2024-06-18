import { createTheme } from "@mui/material/styles";
import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import settingsConfig from "configs/settingsConfig";

const initialState = {
  current: settingsConfig,
};

export const changeTheme = createAsyncThunk(
  "settings/changeTheme",
  async (theme: any, { dispatch }) => {
    // 나중에 테마 바꿀 때 캐치할 미들웨어 액션이 있을 수 있음
    return { theme };
  }
);

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeLayout: (state, action) => {
      state.current.layout = {
        ...state.current.layout,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeTheme.fulfilled, (state, action) => {
      state.current.theme = action.payload.theme;
    });
  },
});

export const selectCurrentSettings = (state: RootState) => state.settings.current;

export const selectCurrentTheme = createSelector(
  selectCurrentSettings,
  (settings) => createTheme(settings.theme)
);

export const selectCurrentLayout = createSelector(
  selectCurrentSettings,
  (settings) => settings.layout
);

export const { changeLayout } = settingsSlice.actions;

export default settingsSlice.reducer;
