import { createSlice } from '@reduxjs/toolkit';

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
}
const initialState: ShowState = {
  id: 0,
  url:'',
  name: '',
  type: '',
  language: '',
  genres: [],
  status: '',
  premiered: '',
  isLoading: false
}

export const showSlice = createSlice({
  name:'show',
  initialState,
  reducers:{

  }

}

)

export const showReducer = showSlice.reducer