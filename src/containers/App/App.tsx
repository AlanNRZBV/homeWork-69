import { Container } from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation.tsx';
import Search from '../../components/Search/Search.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import Autocomplete from '../../components/Autocomplete/Autocomplete.tsx';
import { useEffect } from 'react';
import { fetchShows } from '../../components/Autocomplete/autocompleteThunk.ts';

function App() {
  const inputTest = useSelector((state: RootState)=>state.search.input)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchShows(inputTest))
  }, [dispatch, inputTest]);


  return (
    <>
      <Navigation/>
      <Container className="pt-5">
        <Search/>
        <Autocomplete/>
        <span className="text text-primary">{inputTest}</span>
      </Container>
    </>
  );
}

export default App;
