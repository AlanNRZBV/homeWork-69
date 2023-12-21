import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AutocompleteState {
  showsNames: string[]
  isLoading: boolean
}

export const initialState: AutocompleteState ={
  showsNames:[],
  isLoading: false
}

export const autocompleteSlice = createSlice({
  name:'autocomplete',
  initialState,
  reducers:{
    addShowName: (state, action: PayloadAction<string>)=>{
      state.showsNames.push(action.payload)
    }
  }
})

export const autocompleteReducer = autocompleteSlice.reducer
// export const {addShowName}= autocompleteSlice.actions
