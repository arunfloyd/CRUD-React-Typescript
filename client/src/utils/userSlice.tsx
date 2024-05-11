import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserData {
  email: string;
  username: string;
  _id: string;
}

const userSlice = createSlice({
  name: "User",
  initialState: null as UserData | null,
  reducers: {
    userDetails: (state, action: PayloadAction<UserData>) => {
      return action.payload;
    },
  },
});

export const { userDetails } = userSlice.actions;

export default userSlice.reducer;


