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
import DarkModeContext from '../components/DarkModeContext';
import DarkModeToggle from '@/components/DarkModeToggle';
import styles from './index.module.css';

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
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';



const HomePage = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const { isDarkMode, setIsDarkMode, toggleDarkMode } = useContext(
    DarkModeContext
  );
  const [recSong, setRecSong] = useState('');
  useEffect(() => {
    const isDark = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(isDark);
  }, []);
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#333';
    }
  }, [isDarkMode]);

  const songs = [
    "https://open.spotify.com/embed/track/53F62yfHICseGNOBAH0QUR?utm_source=generator",
    "https://open.spotify.com/embed/track/0p6I0l59E0V68Wv8Wele4F?utm_source=generator",
    "https://open.spotify.com/embed/track/1xc8mw8GAyYWBmLnXeYMMA?utm_source=generator",
    "https://open.spotify.com/embed/track/2yj8xbWxfrW8azD7VDQBER?utm_source=generator",
    "https://open.spotify.com/embed/track/1e1bUo8cxd9JHABlXnmBMl?utm_source=generator",
    "https://open.spotify.com/embed/track/13qxlA5L5JQjvEtbfestMC?utm_source=generator",
    "https://open.spotify.com/embed/track/2tEShX0DXzXmC5pf54K35l?utm_source=generator",
    "https://open.spotify.com/embed/track/5a8QUc4ubHJqQm7vzs2YhA?utm_source=generator",
    "https://open.spotify.com/embed/track/2f9oLnAlMOTWCdEUy0wuy0?utm_source=generator",
    "https://open.spotify.com/embed/track/3sIoWQZbJqUKj5iELz8eTA?utm_source=generator",
    "https://open.spotify.com/embed/track/19dObDGedr40x1UcAm15qz?utm_source=generator",
    "https://open.spotify.com/embed/track/0nNVR2iDM3eVzEgMi78vQm?utm_source=generator",
    "https://open.spotify.com/embed/track/7GFJRfKyjMcvla78GrNZ6s?utm_source=generator",
    "https://open.spotify.com/embed/track/2fB0qwP98V9Yrv3mgR6IJJ?utm_source=generator",
    "https://open.spotify.com/embed/track/4n4yz5y49RHrH6zUY5aFry?utm_source=generator",
    "https://open.spotify.com/embed/track/0HJMPuh2I9QZvlWKEe5tY1?utm_source=generator",
    "https://open.spotify.com/embed/track/7pSXniv8WshbQomgMgaFPB?utm_source=generator",
    "https://open.spotify.com/embed/track/3dE1iiTdFEKeR9FUsMtfwC?utm_source=generator",
    "https://open.spotify.com/embed/track/2khrbeiEg5R6jZwbJzR5OL?utm_source=generator",
    "https://open.spotify.com/embed/track/3HUB8GPbaGpIpjRoONLJP4?utm_source=generator",
    "https://open.spotify.com/embed/track/4OtqragtOuKh41rBNnFXuK?utm_source=generator",
    "https://open.spotify.com/embed/track/4Rgb4JMqW2WyTkseioLXi7?utm_source=generator",
    'https://open.spotify.com/embed/track/53F62yfHICseGNOBAH0QUR?utm_source=generator',
    "https://open.spotify.com/embed/track/2FAjoe1O1NsB9bzijG4ZGM?utm_source=generator",
    'https://open.spotify.com/embed/track/47x1Gh7yk5mblUWxWRdtjH?utm_source=generator',
    'https://open.spotify.com/embed/track/4byredZl9rRhBGWYMsdk6s?utm_source=generator',
    'https://open.spotify.com/embed/track/6AYpSd5HEJ9GJHvYXWkRU0?utm_source=generator',
    'https://open.spotify.com/embed/track/60ERpJRWMWexY91Jw67wqP?utm_source=generator',
    'https://open.spotify.com/embed/track/77uH4X22CoKkxQM5s8vwfH?utm_source=generator',
    'https://open.spotify.com/embed/track/2UaJHs6wlASNl7q34j7hK1?utm_source=generator',
    'https://open.spotify.com/embed/track/57Xjny5yNzAcsxnusKmAfA?utm_source=generator',
    'https://open.spotify.com/embed/track/08lGalwWh1k8ikeFeaEn94?utm_source=generator',
    'https://open.spotify.com/embed/track/7uAgqmyJ8PTRXL9WtZfPNe?utm_source=generator',
    'https://open.spotify.com/embed/track/0zckHMfaB6vT5o23ZVBLHJ?utm_source=generator',
    'https://open.spotify.com/embed/track/2INUkDPCO1eQlOFmIN5VAC?utm_source=generator',
    'https://open.spotify.com/embed/track/4gQ7DFwSbKwBCZUeYpt6Jq?utm_source=generator'
  ]

  const handleClick = () => {
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    setRecSong(randomSong);
  }


  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  //   localStorage.setItem('isDarkMode', !isDarkMode);
  // };
  const darkstyles = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#333',
  };

  return (
    <div >
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
            <Typography className="pl-12 text-gray-400 text-left mr-12">
              building @ <a className='hover:scale-105 transition-all duration-300 hover:underline text-purple-400' href="https://www.orchard-robotics.com/">orchard robotics</a> <span className='m-2 text-l'>&&</span> cs @ stanford
              {/* • part-time coder, part-time artist — <><i className="text-gray-500">full-time dreamer</i></> */}
              {/* <br />
            <React.Fragment>
              • making serendipity
              <br />
              • making serendipity
            </React.Fragment> */}
            </Typography>

            <LinkBar></LinkBar>

            {recSong ? (
              <Box mt={6} className="text-center md:text-left">
                <Typography className="mb-2 text-gray-400 text-m text-left">
                  things i&apos;m listening to; {'  '}
                  <button onClick={handleClick} className="ml-1 hover:underline text-purple-400">
                    want a rec?
                  </button>
                </Typography>
                <iframe
                  src={recSong}
                  width="100%"
                  height="120"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </Box>
            ) : (
              <Box mt={6} className="text-center md:text-left">
                <Typography className="text-gray-400 mb-2 text-m text-left">
                  things i&apos;m listening to; {'  '}
                  <button onClick={handleClick} className="ml-1  hover:underline text-purple-400">
                    want a rec?
                  </button>
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
            )}

            {/* <Box mt={6} className="text-center md:text-left">
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
            </Box> */}
          </div>
          <Box>
            {/* <img
              src="/memchu_profpic_cropped.png"
              alt="self pic"
              className="w-full h-full object-cover mt-4"
              style={{ width: '80%', maxWidth: '100%' }}
          /> */}
            <Box>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img
                      src="/memchu_profpic_cropped.png"
                      alt="self pic"
                      className="w-full h-full object-cover mt-4 pr-1"
                    />
                    <p className="text-gray-400 text-xs text-left mt-1">
                      📸: josie | 📍: stanford, ca
                    </p>
                  </div>
                  <div className={styles.flipCardBack}>
                    <div className='flex flex-col mt-4 items-center'>
                      <img
                        src="/square_face.png"
                        alt="self pic"
                        className="w-24 h-24 object-cover rounded-full"
                      />
                    </div>
                    {/* <p className='text-gray-700 mt-2 font-bold text-lg'>about me: </p> */}
                    <div className='text-gray-500 my-2 mx-4 text-sm text-left'>

                      <span> I&apos;m a Master&apos;s student at Stanford studying Human-Computer Interaction, exploring how to create tech for good for all. We are the sum of our experiences, and as technologists and designers, we should create <span className='font-bold text-purple-400'>beautiful</span>, <span className='font-bold text-purple-400'>accessible</span>, and <span className='font-bold text-purple-400'>inclusive</span> products that share the best of ourselves and our values with the world. </span>
                      <br></br>
                      <br></br>
                      <span> Currently, I&apos;m the 2nd founding engineer at Orchard Robotics, building the future of precision crop management for a more sustainable and food-secure world. Previously, I&apos;ve had engineering experience at Meta and Amazon. Outside work, I can be found drinking coffee (black), attempting bench PR&apos;s, and spotify trawling.</span>

                    </div>

                    {/* <p className='text-gray-700 mt-2 font-bold text-lg'>Asides: </p> */}
                    <div className='text-gray-500 mx-4 my-6 text-sm text-left'>
                      <hr className='border-gray-300 my-2' />
                      <p>  📍 Bellevue, WA </p>
                      <p>  🔩 this site was built in Next.js and Vercel </p>
                      <p>  👋🏼 come say hi! gracexz[at]stanford.edu </p>
                    </div>
                  </div>
                </div>
              </div>
            </Box>

            {/* <Typography style={{ fontSize: '12px' }} className="text-gray-400 text-xs text-left  mt-1">
              📸: josie | 📍: stanford, ca
            </Typography> */}
          </Box>
        </div>

        <FooterLinks></FooterLinks>

      </Container >
    </div >

  );
};

export default HomePage;