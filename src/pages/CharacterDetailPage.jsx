import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export const CharacterDetailPage = () => {
  const rickApi = 'https://rickandmortyapi.com/api/character';
  const { id } = useParams();

  const fetchDataById = async (id) => {
    const response = await fetch(`${rickApi}/${id}`);
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: rickData, isLoading } = useQuery({
    queryKey: ['rickCharDetail', id],
    queryFn: () => fetchDataById(id),
  });

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      <h1>Rick & Morty - Characters</h1>
      <ul>
        <li>
          <p>{rickData.name}</p>
        </li>
      </ul>
    </div>
  );
};
