import { Inter } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// library.add(faEnvelope, faGithub, faLinkedin);
import LinkBar from '@/components/LinkBar';
import FooterLinks from '@/components/FooterLinks';
import BackButton from '@/components/BackButton';
import DarkModeContext from '../components/DarkModeContext';
import LoremIpsum from 'react-lorem-ipsum';
import React from 'react';
import { useRouter } from 'next/router';
import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    Box,
} from '@mui/material';
import Link from 'next/link';
import { useState, useContext, useEffect } from 'react';
import DarkModeToggle from '@/components/DarkModeToggle';

const HelloWorldLinks = () => {
    return (
        <div className="text-center mb-2 md:mb-0 md:text-left mt-40">
            <Typography style={{ fontWeight: 'bold' }} variant="h4" className="ml-8 font-bold text-4xl">
                🎶 music
            </Typography>
            {/* <Typography className="text-gray-500">
          • part-time coder, part-time artist — <><i className="text-gray-500">full-time dreamer</i></>
          <br />
          <React.Fragment>
            • computer science + design @ stanford
            <br />
            • making serendipity
          </React.Fragment>
        </Typography> */}
            <div className='pl-28 ml-16 w-1/5'>
                <LinkBar></LinkBar>
            </div>
        </div>
    );
};

const Back = () => {
    const router = useRouter();

    return (
        <div className="relative">
            <div className="absolute bottom-2 mr-4">
                <button onClick={() => router.push('/extras-page')}>
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                </button>
            </div>
        </div>
    );
}



const Skating = () => {
    const { isDarkMode, setIsDarkMode, toggleDarkMode } = useContext(
        DarkModeContext
    );
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
    return (
        <Container>
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} toggleDarkMode={toggleDarkMode} ></DarkModeToggle>
            <div
                className="flex flex-col md:flex-row items-center justify-center md:space-x-48 w-full p-4"
               // Adjust the value '64px' based on the height of your header/navbar
            >
                <div className="text-center mb-10 md:mb-0 md:text-left mt-36 pb-2 pl-16">
                    <Back></Back>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }} className="mb-1 font-bold text-4xl">
                    🛹 skating
                    </Typography>

                    <Typography className="mt-4 text-gray-400 text-left">
                        music is the single most defining part of my life. i take a truly abhorrent amount of pride in how many spotify minutes i rack up every year, and my playlists are a journal in and of themselves. there&apos;s a story in every playlist i make, and i&apos;d say i have pretty wide ranging and esoteric tastes. here&apos;s my attempt to chart some of the most notable memories or stories throughout the years.

                    </Typography>


                </div>

                <div className="absolute right-20 w-1/5" style={{ top: '200px' }}>
                    <div className="mb-6">
                        <img src="/yellowpenny.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-400 text-sm text-left italic mt-1">
                            my first board, a knockoff penny hand me down from jonathan
                        </Typography>
                    </div>
                    <div className="mb-6">
                        <img src="/whitepenny.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-400 text-sm text-left italic mt-1">
                            one of my first purchases! my current penny, named casper. it glows in the dark!
                        </Typography>
                    </div>
                    <div className="mb-6">
                        <img src="/sorakapenny.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-400 text-sm text-left italic mt-1">
                            an old drawing from 2020; i played soraka alot and wanted to pay homage to my penny
                        </Typography>
                    </div>
                    <div className="mb-6">
                        <img src="/meepo.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-400 text-sm text-left italic mt-1">
                            the current daily ride bc pennying around campus is hard and i like being speedy
                        </Typography>
                    </div>
                    <div className="mb-4">
                        <img src="/skating_cornell.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-400 text-sm text-left italic mt-1">
                            skating with shihao and attempting to carve better
                        </Typography>
                    </div>
                    <div className="mb-4">
                        <img src="/ProcreateSelfPortrait.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-400 text-sm text-left italic mt-1">
                        one of my favorite drawings. soraka drawing v2, updated! 
                        </Typography>
                    </div>

                </div>

                <div className="w-full pt-4">
                    <FooterLinks className="footer-links"></FooterLinks>
                </div>
            </div>
        </Container>
    );
};

export default Skating;