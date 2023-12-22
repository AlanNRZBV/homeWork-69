import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchShow } from './showThunk.ts';

interface ShowState {
  id: number,
  url:string,
  name: string,
  type: string,
  language: string,
  genres: string[],
  status: string,
  premiered: string,
  isLoading: boolean,
  isEmpty: boolean
}

export interface Show extends ShowState{}

const initialState: ShowState = {
  id: 0,
  url:'',
  name: '',
  type: '',
  language: '',
  genres: [],
  status: '',
  premiered: '',
  isLoading: false,
  isEmpty:true
}

export const showSlice = createSlice({
  name:'show',
  initialState,
  reducers:{
    addShowData:(state, action:PayloadAction<Show>)=>{
      return {
        ...state,
        id:action.payload.id,
        url:action.payload.url,
        name: action.payload.name,
        type:action.payload.type,
        language: action.payload.language,
        genres: action.payload.genres,
        status: action.payload.status,
        premiered: action.payload.premiered
      }
    },
    turnOffVisibility:(state)=>{
      state.isEmpty = true
    }

  },
    extraReducers: (builder) => {
      builder.addCase(fetchShow.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(fetchShow.fulfilled, (state) => {
        state.isLoading = false;
        state.isEmpty = false;
      });
      builder.addCase(fetchShow.rejected, (state) => {
        state.isLoading = false;
      });
    },

}

)

export const showReducer = showSlice.reducer
export const {turnOffVisibility}=showSlice.actions