import { Container } from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation.tsx';
import Search from '../../components/Search/Search.tsx';

function App() {
  return (
    <>
      <Navigation/>
      <Container className="pt-5">
        <Search/>
        <span className="text text-primary">test</span>
      </Container>
    </>
  );
}

export default App;
