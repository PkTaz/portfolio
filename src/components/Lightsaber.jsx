import React, { useState, useEffect } from 'react';
import '../styles/Lightsaber.css';

const Lightsaber = () => {
  const [hue, setHue] = useState(218); // Initialize the hue state
  const [scrollPosition, setScrollPosition] = useState(0); // Store scroll position

  // Update the CSS variable when the hue value changes
  useEffect(() => {
    document.documentElement.style.setProperty('--lightsaber-hue', hue);
  }, [hue]);

  // Track the scroll position and update the lightsaber position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Update scroll position
    };

    window.addEventListener('scroll', handleScroll); // Attach scroll event listener

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (event) => {
    setHue(event.target.value); // Update state when slider changes
  };

  // Calculate the lightsaber top position based on scroll position
  const lightsaberTop = 40 + scrollPosition * 0.019 + '%'; // Adjust the multiplier for speed

  const getCharacterInfo = () => {
    if (hue >= 0 && hue < 30) return { name: 'Darth Vader', color: '#FF0000' }; // Bright Red
    if (hue >= 30 && hue < 50) return { name: 'Kylo Ren', color: '#B22222' }; // Crimson
    if (hue >= 50 && hue < 90) return { name: 'Rey', color: '#FFD700' }; // Gold (Yellow)
    if (hue >= 90 && hue < 130) return { name: 'Yoda', color: '#32CD32' }; // Lime Green
    if (hue >= 130 && hue < 160) return { name: 'Luke Skywalker', color: '#00FF00' }; // Bright Green
    if (hue >= 160 && hue < 200) return { name: 'Anakin Skywalker', color: '#1E90FF' }; // Dodger Blue
    if (hue >= 200 && hue < 240) return { name: 'Obi-Wan Kenobi', color: '#4682B4' }; // Steel Blue
    if (hue >= 240 && hue < 270) return { name: 'Mace Windu', color: '#800080' }; // Purple
    if (hue >= 270 && hue < 300) return { name: 'Ahsoka Tano', color: '#F5F5F5' }; // White
    if (hue >= 300 && hue <= 360) return { name: 'Darth Sidious', color: '#8B0000' }; // Dark Red
    return { name: 'Unknown', color: '#000000' }; // Default: Black
};
  
  const { name, color } = getCharacterInfo();

  return (
    <div className="cardcontainer-L">
      <div className="card-L">
        <div className="range-slider-wrapper">
          <div className="range-slider">
            <input
              className="js-range-input"
              id="lightsaberHue"
              type="range"
              value={hue} // Controlled input value
              max="360"
              onChange={handleInputChange} // Handle range input change
            />
          </div>
        </div>
        <div className="lightsaber" style={{ top: lightsaberTop }}>
          <input type="checkbox" id="lightsaber__switch" />
          <label htmlFor="lightsaber__switch" className="lightsaber__hilt">
            <span className="lightsaber__button"></span>
            <span className="lightsaber__grip"></span>
          </label>
          <div className="lightsaber__blade"></div>
          <h1 style={{ color }}>{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Lightsaber;
