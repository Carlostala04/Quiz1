import { useState } from "react";
import useRickAndMorty from "./hooks/UseRickAndMorty";
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const [search, setSearch] = useState("");
  const { characters, loading, error } = useRickAndMorty(search);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar personaje..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <LoadingSpinner message="Cargando personajes..." />}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;