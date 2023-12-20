import { Form, InputGroup } from 'react-bootstrap';
import { AppDispatch, RootState } from '../../app/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { takeInput } from './searchSlice.tsx';

const Search = () => {
  const dispatch: AppDispatch = useDispatch()
  const inputTest = useSelector((state: RootState)=>state.search.input)



  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(takeInput(e.target.value))
  }

  return (
    <form>
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
  );
};

export default Search;