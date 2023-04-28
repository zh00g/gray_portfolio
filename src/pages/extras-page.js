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
import ExtraCard from '../components/ExtraCard';
import LinkBar from '@/components/LinkBar';
import BackButton from '@/components/BackButton';
import FooterLinks from '@/components/FooterLinks';
import DarkModeToggle from '@/components/DarkModeToggle';
import DarkModeContext from '../components/DarkModeContext';

const HelloWorldLinks = () => {
    return (
        // <div style={darkstyles}> 
        <div className="text-center mb-2 md:mb-0 md:text-left mt-40">
            <Typography style={{ fontWeight: 'bold' }} variant="h4" className="ml-8 font-bold text-4xl">
                🐥 extras
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
        // </div>
    );
};

const ExtrasPage = () => {
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
            title: 'music',
            image: '/dj.png',
            description: '📸: eric | 📍: vietnamtown, san jose ',
            route: '/music', // specify the route for this card
        },
        {
            title: 'jewelry',
            image: '/jewelry.png',
            description: '📸: me | 📍: my dorm @ 1018 ',
            route: '/jewelry', // specify the route for this card
        },
        {
            title: 'skating',
            image: '/skate.png',
            description: '📸: shihao | 📍: north campus, cornell ',
            route: '/skating', // specify the route for this card
        },
        {
            title: 'lifts',
            image: '/bench.png',
            description: '📸: chris | 📍: nearillaga, stanford ',
            route: '/lifts', // specify the route for this card
        },
        {
            title: 'home',
            image: '/succulents.png',
            description: '📸: me | 📍: backyard, irvine ',
            route: '/home', // specify the route for this card
        },
        {
            title: 'cars',
            image: '/grayjeep.png',
            description: '📸: mom | 📍: lake havasu, az ',
            route: '/cars', // specify the route for this card
        },
        {
            title: 'cartwheel',
            image: '/cartwheel.png',
            description: '📸: mom | 📍: cabo da roca, portugal ',
            route: '/cartwheel', // specify the route for this card
        },
        {
            title: 'boots',
            image: '/boots.png',
            description: '📸: me | 📍: around the world la la la ',
            route: '/boots', // specify the route for this card
        },
        // {
        //     title: 'music',
        //     image: '/dj.png',
        //     // text: 'optimistic self portrait',
        // }
        // add more artworks here
    ];

    return (
        // <div style={darkstyles}>
        <Container>
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} toggleDarkMode={toggleDarkMode} ></DarkModeToggle>
            <div className='pl-16'>
                <BackButton></BackButton>
                <HelloWorldLinks></HelloWorldLinks>
                <Typography className="text-gray-400">
                    • my joie de vivre!
                    <br />
                    <React.Fragment>
                        • things i love and will scream to you about!!!!!
                    </React.Fragment>
                </Typography>
                <div className="flex flex-col items-center justify-center min-h-screen pb-96">
                    <div className="relative w-full">
                        <Slider {...settings} ref={(slider) => setSliderRef(slider)}>
                            {artworks.map((artwork, index) => (
                                <div key={index} className="px-2">
                                    <ExtraCard
                                        title={artwork.title}
                                        image={artwork.image}
                                        description={artwork.description}
                                        route={artwork.route}
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
        // </div>
    );
};

export default ExtrasPage;
