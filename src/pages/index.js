import { Inter } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// library.add(faEnvelope, faGithub, faLinkedin);
import LinkBar from '@/components/LinkBar';
import FooterLinks from '@/components/FooterLinks';
import Typing from 'react-typing-effect';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import DarkModeToggle from '@/components/DarkModeToggle';

import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import Link from 'next/link';
import { useState, useEffect } from 'react';



const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const isDark = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };
  const darkstyles = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#333',
  };

  return (
    <div style={darkstyles}>
      <Container >
        <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} toggleDarkMode={toggleDarkMode} ></DarkModeToggle>
        <div
          className="pl-16 flex flex-col md:flex-row items-center justify-center md:space-x-36 w-full  p-4"
          style={{ minHeight: 'calc(100vh - 64px)' }} // Adjust the value '64px' based on the height of your header/navbar
        >
          <div className="text-center mb-8 md:mb-0 md:text-left mt-48">
            <Typography variant="h4" style={{ fontWeight: 'bold' }} className="mb-1 font-bold text-4xl">
              ☀️ hello world! i&apos;m <span className="text-gray-400"> gray </span>
            </Typography>
            <Typography className="text-gray-400 text-center mr-12">
              building @ <a className='text-purple-400' href="https://www.orchard-robotics.com/">orchard robotics</a> <span className='m-2 text-l'>&&</span> cs @ stanford
              {/* • part-time coder, part-time artist — <><i className="text-gray-500">full-time dreamer</i></> */}
              {/* <br />
            <React.Fragment>
              • making serendipity
              <br />
              • making serendipity
            </React.Fragment> */}
            </Typography>

            <LinkBar></LinkBar>


            <Box mt={6} className="text-center md:text-left">
              <Typography className="mb-2 text-m text-gray-400 text-left">
                what i&apos;m listening to:
              </Typography>
              <iframe
                className="border-radius:8px"
                src="https://open.spotify.com/embed/track/0cEtgqzDgD8LsH1uZICQ30?utm_source=generator"
                width="100%"
                height="120"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </Box>
          </div>
          <Box> 
          <img
            src="/gray-plane.png"
            alt="self pic"
            className="w-full h-full object-cover mt-4"
            style={{ width: '80%', maxWidth: '100%' }}
          />
          <Typography variant="subtitle1" className="text-gray-400 text-xs text-left  mt-1">
          📸: matt | 📍: abandoned hangar in chandler 
          </Typography>
          </Box>
        </div>

        <FooterLinks></FooterLinks>

      </Container>
    </div>

  );
};

export default HomePage;