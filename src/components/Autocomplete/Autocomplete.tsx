import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';

const Autocomplete = () => {
  const showNames = useSelector(
    (state: RootState) => state.autocomplete.showsNames,
  );
  const showsLength = showNames.length;
  console.log('shows state ', showNames);

  return (
    <>
      {showsLength > 0 ? (
        <div className="d-flex flex-column">
          Autocomplete here
          <ul>
            {showNames.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Autocomplete;
