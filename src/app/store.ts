import {configureStore} from "@reduxjs/toolkit";
import { showReducer } from '../components/Show/showSlice.ts';
import { searchReducer } from '../components/Search/searchSlice.tsx';

export const store = configureStore({
  reducer:{
    show: showReducer,
    search: searchReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof  store.dispatch