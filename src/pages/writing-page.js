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
import WritingCard from '../components/WritingCard';
import LinkBar from '@/components/LinkBar';
import BackButton from '@/components/BackButton';
import FooterLinks from '@/components/FooterLinks';
import DarkModeContext from '../components/DarkModeContext';
import DarkModeToggle from '@/components/DarkModeToggle';

const HelloWorldLinks = () => {
    return (
        <div className="text-center mb-2 md:mb-0 md:text-left mt-40">
            <Typography style={{ fontWeight: 'bold' }} variant="h4" className="ml-8 font-bold text-4xl">
                ✏️ writings
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

const WritingPage = () => {
    const router = useRouter();
    const [sliderRef1, setSliderRef1] = useState(null);
    const [sliderRef2, setSliderRef2] = useState(null);

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

    const writings1 = [
        {
            title: 'icarus',
            tags: ['poem'],
            text: `ICARUS
            or, a requiem for the chained
            and Death herself mourns
            fingertips that brushed the sky
            as hope blazed in vain`
        },
        {
            title: 'hanahaki',
            tags: ['excerpt'],
            text: `he is loved, and i am not. how is it fair, that he gets to live freely? tears clatter from my eyes like the melody of capsules rattling in orange bottles. baby blue and pink and white boxes topple like dominoes in my mind. i dream that in my useless lungs blooms a precious garden of flowers and that i cough up my unrequited love in bloody petals. no man who has come and claimed a right to my body had ever brought me flowers, but now i hold these petals as a gift for myself. (for the only way i have ever known how to love myself is written in the crimson-smeared palmar lines on my two unsteady hands, in scraps leftover after loving others).
            why is it that he gets to be loved but i do not? i think of every man who has come after him, those who i have loved. i count my petals. he loves me; he loves me not. he loves me not. i love him, and he loves me not. rage bubbles, at the unfairness of it all.
            the lines remain indecipherable, but the dream always ends the same. i set the petals and myself ablaze, ashes to ashes, dust to dust.`
        },
        {
            title: 'requiem for the chained',
            tags: ['excerpt'],
            text: `this is written for all the ages and places in between, people and places that have taught me (imperfectly) how to live and love, and love to live. i’ve lived my life too long as an apology for my own existence. will i ever be enough? perhaps, if i stay, i will find out.\n
          intro: confessions of an unreliable narrator\n
          the tragedy i write is of my own composition \u2013 at every step, i deferred, demure. i conceded, and all that remains is the evidence of my own failures (it\u2019s always been instinct for me to blame myself unconditionally). disasterisms and self-pity are etched in the fiber of my being. i forgive all but myself, and find it impossible to forget. the body remembers.\n
          in my quieter moments, i close my eyes and wonder where it all went wrong. where did i lose myself? there\u2019s a mirror in my mind but i no longer recognize my own visage in the body that is reflected back.  i wonder, sometimes, who she sees in return. somewhere along the way, i stopped living as myself and remade myself in the image i thought others would want from me, gouged out my eyes and tore the flesh from my body and carved out everything i once was until i\u2019m hollow and there\u2019s nothing but an empty shell of who i used to be, over and over and over again through the years, taking angry streaks and violent brushstrokes and a bucket of paint to remake the canvas as blank, smashing empty beer bottles against a sun-faded brick wall and slicing my fingers with a hundred lacerations when i pick up the broken glass afterwards (because who else is there to clean up the mess but myself in every aftermath?)\n
          i stare at the blue-green walls of my childhood bedroom in the hazy vestiges of my memory and try to remember who i used to be before i taught myself that the only way to ever be enough was to give and to change. (why can\u2019t i remember?) there\u2019s a collection of childhood photos on my nightstand and i see myself smiling (when, when, when did i ever look so carefree?) and my nails carve little pink crescent moons into the heels of my palms when i trace the trajectory of my life to seek any cause, anyone to blame that isn\u2019t myself (who took her from me? who let her become the person i am today? who taught her to give and give and give until there\u2019s nothing left to hold all the jagged remnants together, when there\u2019s barely enough to endure the phantom pains of all the missing pieces of my heart?) i count backwards from today, crossing through time and my life to my parents\u2019, and i wonder, i wonder, i wonder.\n
          the only culprit is myself. the realization tastes like decades-old despair.`
        },
        {
            title: 'kintsugi - coda',
            tags: ['excerpt'],
            text: ''
        },
        {
            title: 'haiku anthology',
            tags: ['poem'],
            text: ''
        }
        // add more artworks here
    ];

    const writings2 = [
        {
            title: 'love letter to grace zhang, arizona',
            tags: ['essay'],
            text: ''
        },
        {
            title: 'an ode to home',
            tags: ['essay'],
            text: ''
        },
        {
            title: 'the ship of theseus sails on',
            tags: ['essay'],
            text: ''
        },
        {
            title: '心中的南京',
            tags: ['essay'],
            text: ''
        },
    ]

    return (
        <Container>
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} toggleDarkMode={toggleDarkMode} ></DarkModeToggle>
            <div className='pl-16'>
                <BackButton></BackButton>
                <HelloWorldLinks></HelloWorldLinks>
                <Typography className="text-gray-400 mb-6">
                    • a collection of thoughts throughout the process of finding who i was and who i am
                    <br />
                    <React.Fragment>
                        • if nothing else, i want to always live <i><b className='text-purple-400'> with love </b></i> and <i><b className='text-purple-400'> to learn </b></i>
                    </React.Fragment>
                </Typography>
                <div className="flex flex-col items-center justify-center min-h-screen pb-96">
                    <div className="relative w-full pb-32">
                        <Typography className="text-gray-400 ml-2">
                            shorter drabbles
                        </Typography>
                        <Slider {...settings} ref={(slider1) => setSliderRef1(slider1)}>
                            {writings1.map((writing, index) => (
                                <div key={index} className="px-2">
                                    <WritingCard
                                        title={writing.title}
                                        author={writing.author}
                                        text={writing.text}
                                        tags={writing.tags}
                                    />
                                </div>
                            ))}
                        </Slider>
                        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 pb-80">
                            <button className="bg-gray-200 rounded-full p-2" onClick={() => sliderRef1.slickPrev()}>
                                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                            </button>
                            <button className="bg-gray-200 rounded-full p-2" onClick={() => sliderRef1.slickNext()}>
                                <FontAwesomeIcon icon={faArrowRight} size="lg" />
                            </button>
                        </div>

                        <Typography className="text-gray-400 ml-2 mt-6">
                            longer essays
                        </Typography>

                        <Slider {...settings} ref={(slider2) => setSliderRef2(slider2)}>
                            {writings1.map((writing, index) => (
                                <div key={index} className="px-2">
                                    <WritingCard
                                        title={writing.title}
                                        author={writing.author}
                                        text={writing.text}
                                        tags={writing.tags}
                                    />
                                </div>
                            ))}
                        </Slider>
                        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 pt-24">
                            <button className="bg-gray-200 rounded-full p-2" onClick={() => sliderRef2.slickPrev()}>
                                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                            </button>
                            <button className="bg-gray-200 rounded-full p-2" onClick={() => sliderRef2.slickNext()}>
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

export default WritingPage;
