import React from 'react';
import Head from 'next/head';
import { Container, List, ListItem, ListItemText, Grid, Modal, Box, Typography } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArtCard from '../components/ArtCard';
import LinkBar from '@/components/LinkBar';
import BackButton from '@/components/BackButton';
import FooterLinks from '@/components/FooterLinks';
import DarkModeContext from '../components/DarkModeContext';
import DarkModeToggle from '@/components/DarkModeToggle';

const HelloWorldLinks = () => {
    return (
        <div className="text-center mb-2 md:mb-0 md:text-left mt-40">
            <Typography style={{ fontWeight: 'bold' }} variant="h4" className="ml-8 font-bold text-4xl">
                🎨 artwork
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

const ArtPage = () => {
    const router = useRouter();
    const [sliderRef, setSliderRef] = useState(null);
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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <FontAwesomeIcon icon={faArrowLeft} size="2x" />,
        nextArrow: <FontAwesomeIcon icon={faArrowRight} size="2x" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const artworks = [
        {
            title: 'gray',
            image: '/ProcreateSelfPortrait.png',
            description: 'optimistic self portrait',
            tags: ['original'],
        },
        {
            title: 'hanahaki',
            image: '/hanahaki.jpeg',
            description: 'unrequited love',
            tags: ['original'],
        },
        {
            title: 'killua',
            image: '/killua.jpeg',
            description: 'hxh killua, the skater boy',
            tags: ['fanart', 'anime'],
        },
        {
            title: 'hyoguera',
            image: '/hyoguera.jpeg',
            description: 'dtiys for hyoguera 7k',
            tags: ['dtiys'],
        },
        {
            title: 'inumaki x rx8',
            image: '/inumakirx8.jpeg',
            description: 'jjk inumaki + stancypants rx8',
            tags: ['fanart', 'cars', 'anime'],
        },
        {
            title: 'juuzou',
            image: '/juuzou.jpeg',
            description: 'tokyo ghoul juuzou x nike',
            tags: ['fanart', 'anime'],
        },
        {
            title: 'megumi x shika',
            image: '/megushika.jpeg',
            description: 'shadow babes crossover',
            tags: ['fanart', 'anime'],
        },
        {
            title: 'shadow977',
            image: '/shadow977.jpeg',
            description: 'my twom char, v5',
            tags: ['original', 'gaming'],
        },
        {
            title: 'sasuke',
            image: '/sasukesharinganrising.jpeg',
            description: 'fanart for my fave fanfiction',
            tags: ['anime', 'fanart', 'fanfic'],
        }
        // add more artworks here
    ];

    return (
        <Container>
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} toggleDarkMode={toggleDarkMode} ></DarkModeToggle>
            <div className='pl-16'>
                <BackButton></BackButton>
                <HelloWorldLinks></HelloWorldLinks>
                <Typography className="text-gray-400">
                    • all mixed media drawn in procreate
                    <br />
                    <React.Fragment>
                        • find more <a className='text-purple-400' href="https://www.instagram.com/artbygrayy/">@artbygrayy</a>
                    </React.Fragment>
                </Typography>
                <div className="flex flex-col items-center justify-center min-h-screen pb-96">
                    <div className="relative w-full">
                        <Slider {...settings} ref={(slider) => setSliderRef(slider)}>
                            {artworks.map((artwork, index) => (
                                <div key={index} className="px-2">
                                    <ArtCard
                                        title={artwork.title}
                                        image={artwork.image}
                                        description={artwork.description}
                                        tags={artwork.tags}
                                    />
                                </div>
                            ))}
                        </Slider>
                        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
                            <button className="bg-gray-200 rounded-full p-2" onClick={() => sliderRef.slickPrev()}>
                                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                            </button>
                            <button className="bg-gray-200 rounded-full p-2" onClick={() => sliderRef.slickNext()}>
                                <FontAwesomeIcon icon={faArrowRight} size="lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterLinks></FooterLinks>
        </Container>
    );
};

export default ArtPage;
