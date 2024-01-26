import React, { useState } from 'react';

const App = () => {
  const [participants, setParticipants] = useState([]);
  const [newParticipant, setNewParticipant] = useState({
    nama: '',
    email: '',
    pelatihan: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewParticipant((prevParticipant) => ({
      ...prevParticipant,
      [name]: value
    }));
  };

  const handleAddParticipant = () => {
    setParticipants((prevParticipants) => [...prevParticipants, newParticipant]);
    setNewParticipant({ nama: '', alamat: '', telepon: '' });
  };

  return (
    <div style={styles.container}>
      <h1>Hallo, Saya Bella!</h1>
      <p> Saya dari bacth 53 berhasil Mengintal react </p>
      <div style={styles.formContainer}>
        <label htmlFor="nama">Nama: Inka Bella Nur Aisyah</label>
       
<p>
        <label htmlFor="email">Email : inkabella0303@gmail.com</label>
        
          
        
</p>
        <label htmlFor="pelatihan">Bact Pelatihan : React</label>
       
<p>
        <button onClick={handleAddParticipant} style={styles.button}>
          Tambah 
        </button>

        </p>
      </div>

      <div style={styles.participantList}>
      
        <ul>
          {participants.map((participant, index) => (
            <li key={index} style={styles.listItem}>
              {participant.nama} - {participant.alamat} - {participant.telepon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    border: '2px solid #ddd',
    borderRadius: '10px',
    width: '400px',
  },
  formContainer: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '16px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  participantList: {
    textAlign: 'left',
  },
  listItem: {
    listStyle: 'none',
    marginBottom: '8px',
  },
};

export default App;