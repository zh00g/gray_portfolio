import { Inter } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// library.add(faEnvelope, faGithub, faLinkedin);
import LinkBar from '@/components/LinkBar'; 
import FooterLinks from '@/components/FooterLinks'; 
import Typing from 'react-typing-effect';


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


const HomePage = () => {
  return (
    <Container>
      <div
        className="flex flex-col md:flex-row items-center justify-center md:space-x-36 w-full bg-white p-4"
        style={{ minHeight: 'calc(100vh - 64px)' }} // Adjust the value '64px' based on the height of your header/navbar
      >
        <div className="text-center mb-8 md:mb-0 md:text-left mt-48">
          <Typography variant="h4" className="mb-1 font-bold text-4xl">
          ☀️ hello world! i&apos;m <span className="text-gray-500"> gray </span>
          </Typography>
          <Typography className="text-gray-500">
            • part-time coder, part-time artist — <><i className="text-gray-500">full-time dreamer</i></>
            <br />
            <React.Fragment>
              • computer science + design @ stanford
              <br />
              • making serendipity
            </React.Fragment>
          </Typography>

          <LinkBar></LinkBar>


          <Box mt={6} className="text-center md:text-left">
            <Typography className="mb-2 text-m text-gray-500 text-left">
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
        <img
          src="/gray-plane.png"
          alt="self pic"
          className="w-full h-full object-cover"
          style={{ width: '35%', maxWidth: '100%' }}
        />
      </div>

     <FooterLinks></FooterLinks>

    </Container>

  );
};

export default HomePage;