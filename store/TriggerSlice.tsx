import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";
// import { fetchCount } from './counterAPI';

export interface TriggerState {
  value: boolean;
}

const initialState: TriggerState = {
  value: false,
};

export const triggerSlice = createSlice({
  name: "trigger",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    triggerStateChange: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
    },
    triggerSetFalse: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = false;
    },
  },
});

export const { triggerStateChange, triggerSetFalse } = triggerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTrig = (state: RootState) => state.trigger.value;

export default triggerSlice.reducer;
