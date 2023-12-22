import { Container } from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation.tsx';
import Search from '../../components/Search/Search.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import { useEffect } from 'react';
import { fetchShows } from '../../components/Autocomplete/autocompleteThunk.ts';
import { Route, Routes } from 'react-router-dom';
import Show from '../../components/Show/Show.tsx';

function App() {
  const inputTest = useSelector((state: RootState) => state.search.input);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShows(inputTest));
  }, [dispatch, inputTest]);

  return (
    <>
      <Navigation />
      <Container className="pt-5">
        <Search />
        <Routes>
          <Route path="/" element={<Show/>} />
          <Route path="/shows/:id" element={<Show />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
