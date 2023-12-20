import { useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { Spinner } from 'react-bootstrap';

const Show = () => {
  const showInfo = useSelector((state: RootState) => state.show);
  const isShowLoading = useSelector((state: RootState) => state.show.isLoading);

  return (
    <>
      {isShowLoading ? (
        <Spinner />
      ) : (
        <div className="d-flex flex-column">
          <span>Title: {showInfo.name}</span>
          <span>Type: {showInfo.type}</span>
          <span>Status: {showInfo.status}</span>
          <span>URl: {showInfo.url}</span>
          <span>Language: {showInfo.language}</span>
          <span>Premiered: {showInfo.premiered}</span>
          <span>Genres: {showInfo.genres.join(', ')}</span>
        </div>
      )}
    </>
  );
};

export default Show;
