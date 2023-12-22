import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import { Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { turnOffVisibility } from './showSlice.ts';

const Show = () => {

  const dispatch: AppDispatch = useDispatch()

  const showInfo = useSelector((state: RootState) => state.show);
  const isShowLoading = useSelector((state: RootState) => state.show.isLoading);
  const isShowEmpty = useSelector((state: RootState)=>state.show.isEmpty)

  const location=useLocation()

  useEffect(() => {
    if (location.pathname === '/'){
      dispatch(turnOffVisibility())
    }
  }, [dispatch, location.pathname]);

  return (
    <>
      {isShowLoading ? (
        <Spinner />
      ) : (
        !isShowEmpty ? (
          <div className="d-flex flex-column">
            <span>Title: {showInfo.name}</span>
            <span>Type: {showInfo.type}</span>
            <span>Status: {showInfo.status}</span>
            <span>URl: <a href={showInfo.url}>{showInfo.url}</a></span>
            <span>Language: {showInfo.language}</span>
            <span>Premiered: {showInfo.premiered}</span>
            <span>Genres: {showInfo.genres.join(', ')}</span>
          </div>
        ) : (<></>)

      )}
    </>
  );
};

export default Show;
