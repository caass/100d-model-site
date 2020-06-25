import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { axes, isGroup } from "./axes";

interface LikertState {
  [key: string]: number | undefined;
}

const initialState: LikertState = axes
  .flatMap((a) => (isGroup(a) ? a.axes : a))
  .reduce((accumulatedSpectra, { shortName }) => {
    accumulatedSpectra[shortName] = undefined;
    return accumulatedSpectra;
  }, {} as { [key: string]: undefined });
export const likertSlice = createSlice({
  name: "likert",
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<{ shortName: string; value: number }>
    ) => {
      state[action.payload.shortName] = action.payload.value;
    },
  },
});

export const { update } = likertSlice.actions;

// I have no idea if this is correct
export const selectSpectrumValue = (state: RootState, spectrum: string) =>
  state.likert[spectrum];

export const selectSpectrumCompletedPercentage = (state: RootState) =>
  Object.keys(state.likert).filter(
    (spectrum) => state.likert[spectrum] !== undefined
  ).length;

export default likertSlice.reducer;
