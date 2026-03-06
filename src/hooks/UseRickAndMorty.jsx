import { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner.jsx";
import CardCharacter from "../components/CardCharacter.jsx";
import BarraBusqueda from "../components/BarraBusqueda.jsx";

function RickAndMorty() {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const styles = {
    container: {
      width: "100%",
      minHeight: "100vh",
      padding: "20px",
      boxSizing: "border-box",
    },

    cardContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "20px",
      width: "100%",
      padding: "20px",
      boxSizing: "border-box",
    },

    message: {
      textAlign: "center",
      fontSize: "18px",
      marginTop: "20px",
    },
  };

  useEffect(() => {
    let cancelado = false;
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      const cargarPersonajes = async () => {
        try {
          const url = search.trim()
            ? `https://rickandmortyapi.com/api/character/?name=${search}`
            : `https://rickandmortyapi.com/api/character`;

          const response = await fetch(url);

          if (!response.ok) {
            throw new Error("No se encontraron personajes");
          }

          const data = await response.json();

          if (!cancelado) {
            setCharacters(data.results);
            setError(null);
          }
        } catch (error) {
          if (!cancelado) {
            setCharacters([]);
            setError(error.message);
          }
        } finally {
          if (!cancelado) {
            setLoading(false);
          }
        }
      };

      cargarPersonajes();
    }, 500);

    return () => {
      cancelado = true;
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div style={styles.container}>
      <BarraBusqueda setSearch={setSearch} />

      {loading && <LoadingSpinner />}

      {error && <p style={styles.message}>Error: {error}</p>}

      {!loading && !error && (
        <div style={styles.cardContainer}>
          {characters.map((personaje) => (
            <CardCharacter
              key={personaje.id}
              nombre={personaje.name}
              urlImage={personaje.image}
              status={personaje.status}
              gender={personaje.gender}
              especie={personaje.species}
              origen={personaje.origin.name}
              creacion={personaje.created}
              location={personaje.location.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default RickAndMorty;
