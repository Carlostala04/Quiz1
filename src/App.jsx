import { useState } from "react";
import useRickAndMorty from "./hooks/UseRickAndMorty";

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
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;