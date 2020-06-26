import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { axes, isGroup } from "./axes";

interface LikertState {
  [key: string]: number;
}

const initialState: LikertState = axes
  .flatMap((a) => (isGroup(a) ? a.axes : a))
  .reduce((accumulatedSpectra, { shortName }) => {
    accumulatedSpectra[shortName] = -1;
    return accumulatedSpectra;
  }, {} as { [key: string]: number });

export const likertSlice = createSlice({
  name: "likert",
  initialState,
  reducers: {
    updateSpectrumValue: (
      state,
      action: PayloadAction<{ shortName: string; value: number }>
    ) => {
      state[action.payload.shortName] = action.payload.value;
    },
    resetSpectra: (state) => {
      state = initialState;
    },
  },
});

export const { updateSpectrumValue, resetSpectra } = likertSlice.actions;

export const getSpectrumValue = (state: RootState, spectrum: string) =>
  state.likert[spectrum];

export const selectSpectrumCompletedPercentage = (state: RootState) =>
  Object.keys(state.likert).filter((spectrum) => state.likert[spectrum] !== -1)
    .length;

export default likertSlice.reducer;
