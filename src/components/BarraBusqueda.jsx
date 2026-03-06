import { useState } from "react";

function BarraBusqueda({ setSearch }) {

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      margin: "20px"
    },

    form: {
      display: "flex",
      gap: "10px"
    },

    input: {
      padding: "10px 15px",
      width: "250px",
      border: "2px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none"
    },

    button: {
      padding: "10px 20px",
      border: "none",
      backgroundColor: "#4CAF50",
      color: "white",
      fontSize: "16px",
      borderRadius: "8px",
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>

        <input
          type="text"
          placeholder="Buscar personaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />

        <button style={styles.button}>
          Buscar
        </button>

      </form>
    </div>
  );
}

export default BarraBusqueda;