import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShowData } from '../../types';

interface AutocompleteState {
  showsInfo: IShowData[];
  isLoading: boolean;
  isVisible: boolean;
}

export const initialState: AutocompleteState = {
  showsInfo: [],
  isLoading: false,
  isVisible: true,
};

export const autocompleteSlice = createSlice({
  name: 'autocomplete',
  initialState,
  reducers: {
    addShowName: (
      state,
      action: PayloadAction<{ id: number; name: string }>,
    ) => {
      state.showsInfo.push(action.payload);
    },
    turnOffVisibility: (state) => {
      state.isVisible = false;
      state.showsInfo = []
    },
    turnOnVisibility: (state) => {
      state.isVisible = true;
      state.showsInfo = []
    },
  },
});

export const autocompleteReducer = autocompleteSlice.reducer;
export const { addShowName, turnOffVisibility, turnOnVisibility } =
  autocompleteSlice.actions;
