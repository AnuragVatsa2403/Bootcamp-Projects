import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        

        <h2 style={styles.name}>Arjun Mehta</h2>
        <p style={styles.role}>Frontend Developer</p>
        <p style={styles.bio}>
          Passionate about building modern, responsive websites and user interfaces with React and Tailwind CSS.
        </p>
        <button style={styles.button}>Contact</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '30px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  name: {
    fontSize: '22px',
    margin: '10px 0 5px',
  },
  role: {
    fontSize: '14px',
    color: '#777',
    marginBottom: '15px',
  },
  bio: {
    fontSize: '14px',
    color: '#333',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default App;
