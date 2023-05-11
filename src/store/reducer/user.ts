import { signInGoogleStore } from "@/components/Login/googleAndFacebook";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface UserRegister {
  id: string;
  name: string;
  email: string;
  photo: string;
  nivel: number;
  exp: 0;
}
interface userStore {
  user: UserRegister | null;
  loading: boolean;
  idUser: string | null;
}
const INITIAL_STATE: userStore = {
  user: null,
  loading: false,
  idUser: null,
};
const userSlice = createSlice({
  name: "User",
  initialState: INITIAL_STATE,
  reducers: {
    loginUser: (state, action: PayloadAction<UserRegister>) => {
      state.user = action.payload;
    },
    getId: (state, action: PayloadAction<string>) => {
      state.idUser = action.payload;
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

export const { loginUser, getId } = userSlice.actions;
export default userSlice.reducer;
