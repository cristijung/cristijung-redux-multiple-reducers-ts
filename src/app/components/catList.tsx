
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { fetchCats } from '../store/cat/catSlice';

const CatList: React.FC = () => {
  const dispatch = useDispatch();
  const cats = useSelector((state: RootState) => state.cat.cats);
  const status = useSelector((state: RootState) => state.cat.status);
  const error = useSelector((state: RootState) => state.cat.error);

  useEffect(() => {
    dispatch(fetchCats() as any); // Adicione 'as any' aqui
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
        <hr/>
      <h2>Lista de Gatos - via API</h2>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <img src={cat.url} alt={`Cat ${cat.id}`} style={{ maxWidth: '300px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatList;
