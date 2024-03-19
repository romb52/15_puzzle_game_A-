import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  soundOn: false,
};

export const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {
    toggleSound: (state) => {
      state.soundOn = !state.soundOn;
    },
  },
});

export const { toggleSound } = soundSlice.actions;
export default soundSlice.reducer;