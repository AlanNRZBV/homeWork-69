import { Form, InputGroup } from 'react-bootstrap';

const Search = () => {
  return (
    <form>
    <InputGroup className="mb-3">
      <InputGroup.Text id="search">Search for TV show</InputGroup.Text>
      <Form.Control
        placeholder="Lost"
        name="search"
        id="search"
      />
    </InputGroup>
    </form>
  );
};

export default Search;