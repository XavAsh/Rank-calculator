import React, { useState } from 'react';
import './App.css';
import CustomDropdown from './CustomDropdown';

function App() {
  const [currentMMR, setCurrentMMR] = useState('');
  const [rpPerWin, setRpPerWin] = useState('');
  const [desiredMMR, setDesiredMMR] = useState('');
  const [gamesNeeded, setGamesNeeded] = useState(null);

  const getDropRate = (currentMMR) => {
    // For lower ranks (Copper, Bronze, Silver)
    if (currentMMR < 2000) {
      return 1; // Small drop per win (1 RP)
    }
    // For mid-ranks (Gold, Platinum)
    else if (currentMMR >= 2000 && currentMMR < 3000) {
      return 3; // Moderate drop (3 RP)
    }
    // For higher ranks (Emerald, Diamond)
    else {
      return 5; // Larger drop per win (5 RP)
    }
  };

  const calculateGamesNeeded = () => {
    if (currentMMR && rpPerWin && desiredMMR) {
      let mmrDifference = desiredMMR - currentMMR; // Changed to let so it can be modified
      let games = 0;
      let currentRP = rpPerWin;

      const dropRate = getDropRate(currentMMR); // Get dynamic drop rate based on current rank

      // RP can't drop below 4
      while (mmrDifference > 0 && currentRP >= 4) {
        mmrDifference -= currentRP;
        currentRP -= dropRate; // Apply RP drop rate after each win
        currentRP = Math.max(currentRP, 4); // Ensure RP doesn't drop below 4
        games += 1;
      }

      setGamesNeeded(games);
    } else {
      alert("Please fill in all fields with valid numbers");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>R6 Rank Calculator</h1>
        <div className="form-group">
          <label htmlFor="currentMMR" className="form-label">Enter your current Rank or RP (MMR)</label>
          <div className="form-inline">
            <CustomDropdown value={currentMMR} onChange={(value) => setCurrentMMR(value)} />
            <input
              type="number"
              className="form-control"
              id="currentMMR"
              value={currentMMR}
              onChange={(e) => setCurrentMMR(Number(e.target.value))}
              placeholder="Enter your current Rank or RP '(MMR)' "
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="rpPerWin" className="form-label mt-3">Enter RP gained per win</label>
          <input
            type="number"
            className="form-control"
            id="rpPerWin"
            value={rpPerWin}
            onChange={(e) => setRpPerWin(Number(e.target.value))}
            placeholder="Enter RP per win"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desiredMMR" className="form-label mt-3">Enter your desired rank MMR</label>
          <div className="form-inline">
            <CustomDropdown value={desiredMMR} onChange={(value) => setDesiredMMR(value)} />
            <input
              type="number"
              className="form-control"
              id="desiredMMR"
              value={desiredMMR}
              onChange={(e) => setDesiredMMR(Number(e.target.value))}
              placeholder="Enter desired rank MMR"
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3" onClick={calculateGamesNeeded}>
          Calculate Games Needed
        </button>
        {gamesNeeded !== null && (
          <div className="result mt-3">
            {gamesNeeded > 0 ? (
              <h2>You will need to win: {gamesNeeded} {gamesNeeded === 1 ? 'game' : 'games'} in a row</h2>
            ) : (
              <h2>You will need to lose: {Math.abs(gamesNeeded)} {Math.abs(gamesNeeded) === 1 ? 'game' : 'games'} in a row</h2>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
