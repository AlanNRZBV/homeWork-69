import { Form, InputGroup } from 'react-bootstrap';
import { AppDispatch, RootState } from '../../app/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { resetSearch, takeInput } from './searchSlice.ts';
import Autocomplete from '../Autocomplete/Autocomplete.tsx';
import { useLocation } from 'react-router-dom';
import { turnOnVisibility } from '../Autocomplete/autocompleteSlice.ts';

const Search = () => {
  const dispatch: AppDispatch = useDispatch()
  const location = useLocation()
  const inputTest = useSelector((state: RootState)=>state.search.input)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(takeInput(e.target.value))
    dispatch(turnOnVisibility())
  }

  const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
  }
  useEffect(() => {
    if(location.pathname === '/shows/:id'){
      dispatch(resetSearch())
    }
  }, [dispatch, location.pathname]);

  return (
    <>
    <form onSubmit={submitHandler}>
    <InputGroup className="mb-3">
      <InputGroup.Text id="search">Search for TV show</InputGroup.Text>
      <Form.Control
        onChange={changeHandler}
        placeholder="Lost"
        name="search"
        id="search"
        value={inputTest}
      />
    </InputGroup>
    </form>
      <Autocomplete/>
    </>
  );
};

export default Search;