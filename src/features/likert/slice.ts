/* eslint-disable no-param-reassign, import/no-cycle */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
/* eslint-enable import/no-cycle */

import { axes, isGroup } from './axes';

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
  name: 'likert',
  initialState,
  reducers: {
    updateSpectrumValue: (state, action: PayloadAction<{ shortName: string; value: number }>) => {
      state[action.payload.shortName] = action.payload.value;
    },
    resetSpectra: (state) => {
      Object.keys(state).forEach((key) => {
        state[key] = -1;
      });
    },
  },
});

/* eslint-enable no-param-reassign */

export const { updateSpectrumValue, resetSpectra } = likertSlice.actions;

export const getSpectrumValue = (state: RootState, spectrum: string): number =>
  state.likert[spectrum];

export const selectSpectrumCompletedPercentage = (state: RootState): number =>
  Object.keys(state.likert).filter((spectrum) => state.likert[spectrum] !== -1).length;

// eslint-disable-next-line import/no-default-export
export default likertSlice.reducer;
