import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosAPI.ts';
import { RootState } from '../../app/store.ts';
import { autocompleteSlice } from './autocompleteSlice.ts';

export const fetchShows = createAsyncThunk<void,string,{state: RootState}>(
  'autocomplete/fetch', async (arg, thunkAPI)=>{
    try{
      const response = await axiosApi.get(arg)
      if (response.data !== null){
        for (let i = 0; i < response.data.length;i++){
          const name = response.data[i].show.name
          thunkAPI.dispatch(autocompleteSlice.actions.addShowName(name))
        }
        console.log(response.data)
      }
    }catch (error){
      console.log('Caught on try - FETCH SHOWS - ', error)
    }
  }
)