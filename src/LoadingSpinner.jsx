function LoadingSpinner({ message = "Cargando..." }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.portal} />
      <p style={styles.text}>{message}</p>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    backgroundColor: "#060b14",
    zIndex: 9999,
  },
  portal: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    border: "5px solid rgba(57,255,20,0.15)",
    borderTop: "5px solid #39ff14",
    borderLeft: "5px solid #00e5ff",
    animation: "spin 2s linear infinite",
    boxShadow: "0 0 24px rgba(57,255,20,0.3)",
  },
  text: {
    color: "#39ff14",
    fontSize: 15,
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    letterSpacing: 1,
    opacity: 0.8,
  },
};

export default LoadingSpinner;