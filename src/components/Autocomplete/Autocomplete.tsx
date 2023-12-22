import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import { fetchShow } from '../Show/showThunk.ts';
import { NavLink } from 'react-router-dom';
import { turnOffVisibility } from './autocompleteSlice.ts';

const Autocomplete = () => {
  const dispatch:AppDispatch = useDispatch()
  const showNames = useSelector(
    (state: RootState) => state.autocomplete.showsInfo,
  );
  const isVisible = useSelector((state: RootState)=>state.autocomplete.isVisible)
  const showsLength = showNames.length;

  const clickHandler=(itemID:number)=>{
    dispatch(fetchShow(itemID))
    dispatch(turnOffVisibility())
  }


  return (
    <>
      {showsLength > 0 && isVisible ? (
        <div className="d-flex flex-column border border-1 rounded-2 w-50 ms-auto">
          <ul>
            {showNames.map((item) => (
              <NavLink onClick={()=>clickHandler( item.id)} to={`/shows/${item.id}`} className="nav-link" key={item.id}>{item.name}</NavLink>
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
