import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";
// import { fetchCount } from './counterAPI';

export interface MoreInfoState {
  all_data: {
    movieName: string;
    duration: string;
    language: string;
    gener1: string;
    gener2: string;
    gener3: string;
    description: string;
    cast: string;
    type: string;
    videoUrl: string;
    imgUrl: string;
    logo: string;
    bg: string;
    match: string;
    censor: string;
    time_stamp: string;
  };
}

const initialState: MoreInfoState = {
  all_data: {
    movieName: " ",
    duration: " ",
    language: " ",
    gener1: " ",
    gener2: " ",
    gener3: " ",
    description: " ",
    cast: " ",
    type: " ",
    videoUrl: " ",
    imgUrl: " ",
    logo: " ",
    bg: " ",
    match: " ",
    censor: " ",
    time_stamp: " ",
  },
};

export const MoreInfoSlice = createSlice({
  name: "more_info_data",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    moreData: (state, action: PayloadAction<any>) => {
      state.all_data.movieName = action.payload.movieName;
      state.all_data.duration = action.payload.duration;
      state.all_data.language = action.payload.language;
      state.all_data.gener1 = action.payload.gener1;
      state.all_data.gener2 = action.payload.gener2;
      state.all_data.gener3 = action.payload.gener3;
      state.all_data.description = action.payload.description;
      state.all_data.cast = action.payload.cast;
      state.all_data.type = action.payload.type;
      state.all_data.videoUrl = action.payload.videoUrl;
      state.all_data.imgUrl = action.payload.imgUrl;
      state.all_data.logo = action.payload.logo;
      state.all_data.bg = action.payload.bg;
      state.all_data.match = action.payload.match;
      state.all_data.censor = action.payload.censor;
      state.all_data.time_stamp = action.payload.time_stamp;
    },
  },
});

export const { moreData } = MoreInfoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectInfo = (state: RootState) => state.more_info_data.all_data;

export default MoreInfoSlice.reducer;
