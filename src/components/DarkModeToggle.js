import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = ({isDarkMode, setIsDarkMode, toggleDarkMode}) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     localStorage.setItem('isDarkMode', !isDarkMode);
//     // Your function to toggle the dark mode theme goes here
//   };

  return (
    <div className="fixed top-4 right-4 z-10">
      <button onClick={toggleDarkMode}>
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          size="2x"
          className="text-gray-500 hover:text-yellow-500 transition-colors duration-200"
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
