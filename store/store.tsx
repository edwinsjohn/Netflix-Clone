import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import TriggerReducer from "./TriggerSlice";
import MoreInfoReducer from "./moreInfoSlice";

export const store = configureStore({
  reducer: {
    trigger: TriggerReducer,
    more_info_data: MoreInfoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
