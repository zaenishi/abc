import React, { useState } from 'react';
import './App.css';
import { getPrediction } from './api';

function App() {
  const [name, setName] = useState('');
  const [isPredicting, setIsPredicting] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const startPrediction = async () => {
    setIsPredicting(true);

    const data = await getPrediction(name);
    setUserData(data);
    setIsPredicting(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">akujin</h1>
        <p className="App-creator">Dibuat oleh Zaenishi</p>
        {!userData && (
          <>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
              value={name}
              onChange={handleChange}
              className="App-input"
            />
            <button onClick={startPrediction} disabled={!name} className="App-button">
              Mulai
            </button>
          </>
        )}
        {isPredicting && <p className="App-predicting">Jin sedang meramal anda...</p>}
        {userData && (
          <div className="User-data">
            <h2>Hasil Ramalan</h2>
            <p>Nama: {userData.name}</p>
            <p>Umur: {userData.age}</p>
            <p>Pekerjaan: {userData.occupation}</p>
            {/* Tambahkan detail lain yang diinginkan */}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
