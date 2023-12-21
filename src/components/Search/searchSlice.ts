import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  input: string
}

export const initialState: SearchState = {
  input:''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers:{
    takeInput: (state, action:PayloadAction<string>)=>{
      state.input = action.payload
    }
  }
})

export const searchReducer = searchSlice.reducer
export const {takeInput}=searchSlice.actions