import _ from "lodash";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import settingsConfig from "../../../configs/settingsConfig";
import { User } from "../../../types/userTypes";
import { PartialDeep } from "type-fest";
import { RootState } from "../../store";
import UserModel from "./userModel";

function updateRedirectUrl(user: PartialDeep<User>) {
  if (user?.data?.loginRedirectUrl && user?.data?.loginRedirectUrl !== "") {
    settingsConfig.loginRedirectUrl = user.data.loginRedirectUrl;
  }
}

export const setUser = createAsyncThunk<User, User>(
  "user/setUser",
  async (user) => {
    updateRedirectUrl(user);
    return user;
  }
);

export const resetUser = createAsyncThunk("user/resetUser", async () => {
  return true;
});

const initialState: User = UserModel({});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserSettings: (state, action) => {
      const oldState = _.cloneDeep(state);
      const newUser = _.setIn(
        oldState,
        "data.settings",
        action.payload
      ) as User;

      if (_.isEqual(oldState, newUser)) {
        return undefined;
      }

      return newUser;
    },

    updateUser: (state, action) => {
      const oldState = _.cloneDeep(state);
      const user = action.payload as PartialDeep<User>;
      const newUser = _.merge({}, oldState, user);

      if (_.isEqual(oldState, newUser)) {
        return undefined;
      }

      return newUser as User;
    },
    userSignOut: () => initialState,
  },

  extraReducers: (builder) => {
    builder.addCase(setUser.fulfilled, (state, action) => {
      const user = action.payload as PartialDeep<User>;
      const newUser = _.defaults(user, state);

      if (_.isEqual(state, newUser)) {
        return undefined;
      }

      return action.payload;
    });
    builder.addCase(resetUser.fulfilled, (state) => {
      if (!_.isEqual(state, initialState)) {
        return initialState;
      }
      return undefined;
    });
  },
});

export const { userSignOut, updateUser, setUserSettings } = userSlice.actions;

export const selectUser = (state: RootState) => state?.user;

export const selectUserId = (state: RootState) => state?.user?.uid;

export const selectUserRole = (state: RootState) => state?.user?.role;

export const selectIsUserGuest = (state: RootState) => {
  const userRole = state?.user?.role;

  return !userRole || userRole?.length === 0;
};

export const selectUserSettings = (state: RootState) =>
  state.user?.data?.settings;

export type userSliceType = typeof userSlice;

export default userSlice.reducer;
