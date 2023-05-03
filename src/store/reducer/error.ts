import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface StateError {
  errorMessage: string | null;
}

const INITIAL_STATE: StateError = {
  errorMessage: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: INITIAL_STATE,
  reducers: {
    viewError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { viewError } = pokemonSlice.actions;
export default pokemonSlice.reducer;
