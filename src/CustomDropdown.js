import React from 'react';
import './CustomDropdown.css';
import { useState } from 'react';

const ranks = [
  { value: 1000, label: 'Copper V', img: 'IMG/ranked-icons/Copper/C5.webp' },
  { value: 1100, label: 'Copper IV', img: 'IMG/ranked-icons/Copper/C4.webp' },
  { value: 1200, label: 'Copper III', img: 'IMG/ranked-icons/Copper/C3.webp' },
  { value: 1300, label: 'Copper II', img: 'IMG/ranked-icons/Copper/C2.webp' },
  { value: 1400, label: 'Copper I', img: 'IMG/ranked-icons/Copper/C1.webp' },
  { value: 1500, label: 'Bronze V', img: 'IMG/ranked-icons/Bronze/B5.webp' },
  { value: 1600, label: 'Bronze IV', img: 'IMG/ranked-icons/Bronze/B4.webp' },
  { value: 1700, label: 'Bronze III', img: 'IMG/ranked-icons/Bronze/B3.webp' },
  { value: 1800, label: 'Bronze II', img: 'IMG/ranked-icons/Bronze/B2.webp' },
  { value: 1900, label: 'Bronze I', img: 'IMG/ranked-icons/Bronze/B1.webp' },
  { value: 2000, label: 'Silver V', img: 'IMG/ranked-icons/Silver/S5.webp' },
  { value: 2100, label: 'Silver IV', img: 'IMG/ranked-icons/Silver/S4.webp' },
  { value: 2200, label: 'Silver III', img: 'IMG/ranked-icons/Silver/S3.webp' },
  { value: 2300, label: 'Silver II', img: 'IMG/ranked-icons/Silver/S2.webp' },
  { value: 2400, label: 'Silver I', img: 'IMG/ranked-icons/Silver/S1.webp' },
  { value: 2500, label: 'Gold V', img: 'IMG/ranked-icons/Gold/G5.webp' },
  { value: 2600, label: 'Gold IV', img: 'IMG/ranked-icons/Gold/G4.webp' },
  { value: 2700, label: 'Gold III', img: 'IMG/ranked-icons/Gold/G3.webp' },
  { value: 2800, label: 'Gold II', img: 'IMG/ranked-icons/Gold/G2.webp' },
  { value: 2900, label: 'Gold I', img: 'IMG/ranked-icons/Gold/G1.webp' },
  { value: 3000, label: 'Platinum V', img: 'IMG/ranked-icons/Platinum/P5.webp' },
  { value: 3100, label: 'Platinum IV', img: 'IMG/ranked-icons/Platinum/P4.webp' },
  { value: 3200, label: 'Platinum III', img: 'IMG/ranked-icons/Platinum/P3.webp' },
  { value: 3300, label: 'Platinum II', img: 'IMG/ranked-icons/Platinum/P2.webp' },
  { value: 3400, label: 'Platinum I', img: 'IMG/ranked-icons/Platinum/P1.webp' },
  { value: 3500, label: 'Emerald V', img: 'IMG/ranked-icons/Emerald/E5.webp' },
  { value: 3600, label: 'Emerald IV', img: 'IMG/ranked-icons/Emerald/E4.webp' },
  { value: 3700, label: 'Emerald III', img: 'IMG/ranked-icons/Emerald/E3.webp' },
  { value: 3800, label: 'Emerald II', img: 'IMG/ranked-icons/Emerald/E2.webp' },
  { value: 3900, label: 'Emerald I', img: 'IMG/ranked-icons/Emerald/E1.webp' },
  { value: 4000, label: 'Diamond V', img: 'IMG/ranked-icons/Diamond/D5.webp' },
  { value: 4100, label: 'Diamond IV', img: 'IMG/ranked-icons/Diamond/D4.webp' },
  { value: 4200, label: 'Diamond III', img: 'IMG/ranked-icons/Diamond/D3.webp' },
  { value: 4300, label: 'Diamond II', img: 'IMG/ranked-icons/Diamond/D2.webp' },
  { value: 4400, label: 'Diamond I', img: 'IMG/ranked-icons/Diamond/D1.webp' },
  { value: 4500, label: 'Champion', img: 'IMG/ranked-icons/Champion/C.webp' },
];

const CustomDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (rank) => {
    onChange(rank.value);
    setIsOpen(false);
  };

  const selectedRank = ranks.find(rank => rank.value === value);

  return (
    <div className={`custom-dropdown ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleDropdown} className="dropdown-button">
        {selectedRank ? <img src={selectedRank.img} alt={selectedRank.label} /> : 'Select a Rank'}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {ranks.map(rank => (
            <div
              key={rank.value}
              className="dropdown-item"
              onClick={() => handleSelect(rank)}
            >
              <img src={rank.img} alt={rank.label} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
