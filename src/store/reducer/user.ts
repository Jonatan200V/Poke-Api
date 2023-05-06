import { signInGoogleStore } from "@/components/Login/googleAndFacebook";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface UserRegister {
  id: string;
  name: string;
  email: string;
  photo: string;
}
interface userStore {
  user: UserRegister | null;
  loading: boolean;
}
const INITIAL_STATE: userStore = {
  user: null,
  loading: false,
};
const userSlice = createSlice({
  name: "User",
  initialState: INITIAL_STATE,
  reducers: {
    loginUser: (state, action: PayloadAction<UserRegister>) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(signInGoogleStore.pending, state => {
      state.loading = true;
    });
    builder.addCase(signInGoogleStore.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload) state.user = action.payload;
    });
    builder.addCase(signInGoogleStore.rejected, state => {
      state.loading = false;
    });
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
