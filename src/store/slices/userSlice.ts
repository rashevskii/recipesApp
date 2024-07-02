import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../types";

const initialState: UserState = {
  user: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = initialState.user
    },
    loginUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
    }
  }
});

export const { clearUser, loginUser } = userSlice.actions;

export default userSlice.reducer;