import { useState, useEffect } from "react";

const useRickAndMorty = (search) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      });
  }, [search]);

  return { characters, loading, error };
};

export default useRickAndMorty;

