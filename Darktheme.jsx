import React, { useState, useEffect } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </h1>
        <button onClick={() => setDarkMode(!darkMode)} style={styles.button}>
          Toggle Theme
        </button>
        <p style={styles.text}>This is a simple dark/light mode example.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--bg)",
    color: "var(--text)",
    transition: "all 0.3s ease",
  },
  card: {
    padding: "2rem",
    borderRadius: "8px",
    backgroundColor: "var(--card)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "1rem",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "var(--button-bg)",
    color: "var(--button-text)",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
  },
};

export default App;