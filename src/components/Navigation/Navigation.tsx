import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="text text-black">
          TVShows
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default Navigation;
