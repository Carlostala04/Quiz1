import { useState, useEffect } from "react";

const useRickAndMorty = (search) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
};

export default useRickAndMorty;

