import { Container } from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation.tsx';
import Search from '../../components/Search/Search.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import Autocomplete from '../../components/Autocomplete/Autocomplete.tsx';

function App() {
  const inputTest = useSelector((state: RootState)=>state.search.input)

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
