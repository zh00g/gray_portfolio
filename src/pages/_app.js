import "@/styles/globals.css";
import React, { useState, useEffect } from 'react';
import DarkModeContext from '../components/DarkModeContext';

export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };

  return (
    <DarkModeContext.Provider
      value={{ isDarkMode, setIsDarkMode, toggleDarkMode }}
    >
      <Component {...pageProps} />
    </DarkModeContext.Provider>
  );
}
