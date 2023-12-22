import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import axios from 'axios';
import { showSlice } from './showSlice.ts';
const URL = 'https://api.tvmaze.com/shows/'

export const fetchShow = createAsyncThunk<void, number, {state: RootState}>(
  'show/fetch', async (arg, thunkAPI)=>{
    try{
      const response= await axios.get(`${URL}${arg}`)
      if(response.data !== null){
        const newShow = response.data
        thunkAPI.dispatch(showSlice.actions.addShowData(newShow))
      }
    }catch (error){
      console.log('Caught on try - FETCH SHOW - ', error)
    }
  }
)