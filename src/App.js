import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables for inputs
  const [currentMMR, setCurrentMMR] = useState('');
  const [rpPerWin, setRpPerWin] = useState('');
  const [desiredMMR, setDesiredMMR] = useState('');
  const [gamesNeeded, setGamesNeeded] = useState(null);

  // Handler to calculate games needed to reach desired rank
  const calculateGamesNeeded = () => {
    if (currentMMR && rpPerWin && desiredMMR) {
      const mmrDifference = desiredMMR - currentMMR;
      const games = Math.ceil(mmrDifference / rpPerWin);
      setGamesNeeded(games);
    } else {
      alert("Please fill in all fields with valid numbers");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>R6 Rank Calculator</h1>

        <label htmlFor="currentMMR" className="form-label">Enter your current Rank or RP (MMR)</label>
        <select
          type="number"
          className="form-control"
          id="currentMMR"
          value={currentMMR}
          onChange={(e) => setCurrentMMR(Number(e.target.value))}
          placeholder="Enter your current Rank or RP '(MMR)' "
        >
          <option value="">Select rank</option>
          <option value="1000">Copper V</option>
          <option value="1000">Copper IV</option>
          <option value="1000">Copper III</option>
          <option value="1000">Copper II</option>
          <option value="1000">Copper I</option>
          <option value="2000">Bronze V</option>
          <option value="2000">Bronze IV</option>
          <option value="2000">Bronze III</option>
          <option value="2000">Bronze II</option>
          <option value="2000">Bronze I</option>
          <option value="3000">Silver V</option>
          <option value="3000">Silver IV</option>
          <option value="3000">Silver III</option>
          <option value="3000">Silver II</option>
          <option value="3000">Silver I</option>
          <option value="4000">Gold V</option>
          <option value="4000">Gold IV</option>
          <option value="4000">Gold III</option>
          <option value="4000">Gold II</option>
          <option value="4000">Gold I</option>
          <option value="5000">Platinum V</option>
          <option value="5000">Platinum IV</option>
          <option value="5000">Platinum III</option>
          <option value="5000">Platinum II</option>
          <option value="5000">Platinum I</option>
          <option value="6000">Emerald V</option>
          <option value="6000">Emerald IV</option>
          <option value="6000">Emerald III</option>
          <option value="6000">Emerald II</option>
          <option value="6000">Emerald I</option>       
          <option value="6000">Diamond V</option>
          <option value="6000">Diamond IV</option>
          <option value="6000">Diamond III</option>
          <option value="6000">Diamond II</option>
          <option value="6000">Diamond I</option>
          <option value="7000">Champion</option>
        </select>
        <input
          type="number"
          className="form-control"
          id="currentMMR"
          value={currentMMR}
          onChange={(e) => setCurrentMMR(Number(e.target.value))}
          placeholder="Enter your current Rank or RP '(MMR)' "
        />

        <label htmlFor="rpPerWin" className="form-label mt-3">Enter RP gained per win</label>
        <input
          type="number"
          className="form-control"
          id="rpPerWin"
          value={rpPerWin}
          onChange={(e) => setRpPerWin(Number(e.target.value))}
          placeholder="Enter RP per win"
        />

        <label htmlFor="desiredMMR" className="form-label mt-3">Enter your desired rank MMR</label>        
        <select
          className="form-control"
          id="rankDropdown"
          value={desiredMMR}
          onChange={(e) => setDesiredMMR(Number(e.target.value))}
        >
          <option value="">Select rank</option>
          <option value="1000">Copper</option>
          <option value="2000">Bronze</option>
          <option value="3000">Silver</option>
          <option value="4000">Gold</option>
          <option value="5000">Platinum</option>
          <option value="6000">Diamond</option>
          <option value="7000">Champion</option>
        </select>
        <input
          type="number"
          className="form-control"
          id="desiredMMR"
          value={desiredMMR}
          onChange={(e) => setDesiredMMR(Number(e.target.value))}
          placeholder="Enter desired rank MMR"
        />

        <button 
          className="btn btn-primary mt-3" 
          onClick={calculateGamesNeeded}
        >
          Calculate Games Needed
        </button>

        {gamesNeeded !== null && (
          <div className="mt-3">
            <h2>Games Needed: {gamesNeeded}</h2>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

