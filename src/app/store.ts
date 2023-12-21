import {configureStore} from "@reduxjs/toolkit";
import { showReducer } from '../components/Show/showSlice.ts';
import { searchReducer } from '../components/Search/searchSlice.ts';
import { autocompleteReducer } from '../components/Autocomplete/autocompleteSlice.ts';

export const store = configureStore({
  reducer:{
    show: showReducer,
    search: searchReducer,
    autocomplete: autocompleteReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof  store.dispatch