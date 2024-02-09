import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const CharactersPage = () => {
  const [showChars, setShowChars] = useState(false);
  const rickApi = 'https://rickandmortyapi.com/api/character';

  const fetchData = async () => {
    const response = await fetch(rickApi);
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: rickData, isLoading } = useQuery({
    queryKey: ['rickChars'],
    queryFn: fetchData,
    enabled: showChars,
  });

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      <h1>Rick & Morty - Characters</h1>
      <button onClick={() => setShowChars(true)}>Show characters</button>
      <ul>
        {rickData?.results.map((char) => (
          <li key={char.id}>
            <Link to={char.id.toString()}>
              <p>{char.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
