import { Inter } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// library.add(faEnvelope, faGithub, faLinkedin);
import LinkBar from '@/components/LinkBar';
import FooterLinks from '@/components/FooterLinks';
import BackButton from '@/components/BackButton';

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



const Music = () => {
    return (
        <Container>
            <div
                className="flex flex-col md:flex-row items-center justify-center md:space-x-48 w-full bg-white p-4"
               // Adjust the value '64px' based on the height of your header/navbar
            >
                <div className="text-center mb-10 md:mb-0 md:text-left mt-36 pb-2 pl-16">
                    <Back></Back>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }} className="mb-1 font-bold text-4xl">
                        🎶 music
                    </Typography>

                    <Typography className="mt-4 text-gray-500 text-left">
                        music is the single most defining part of my life. i take a truly abhorrent amount of pride in how many spotify minutes i rack up every year, and my playlists are a journal in and of themselves. there&apos;s a story in every playlist i make, and i&apos;d say i have pretty wide ranging and esoteric tastes. here&apos;s my attempt to chart some of the most notable memories or stories throughout the years.

                    </Typography>


                    <Typography className="mt-4 text-gray-500 text-left">
                        • i first started listening to edm when i heard scary monsters and nice sprites back in 2012. i&apos;d been doing golf camp with my friends howard and toya, and the song came on while we were all gaming at howard&apos;s place afterwards. from there, i found my way to monstercat, which was my edm haven for years and still is the source of so much nostalgia. songs like flight tristam + braken, and surface aero chord, and snake eyes feint were the soundtrack of my summer library studying. from there i made my way to mr.suicidesheep and ncs and proximity and eventually stumbled upon old dubstep from people like illenium, which was the melodic dubstep rabbithole. i love all edm and have gotten to see so many artists, but there&apos;s so many more that i want to see! definitely a headbanging-on-the-rails person. my one claim to fame is a 2 second clip of me on the rails at kaivon&apos;s set at audio summer 2022 that made it into one of his promo vids. some artists i&apos;d love to see are excision, kai wachi, and hex cougar.
                    </Typography>


                    <Box className="mt-2 text-center md:text-left">
                        {/* <Typography className="mb-2 text-m text-gray-500 text-left">
                            some playlists
                        </Typography> */}
                        {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4WxCuK3Jle0OSqWvwbET3g?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                        {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6kj2cuVmiU5R3TAm7gzjEG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                        <iframe
                            className="border-radius:8px"
                            src="https://open.spotify.com/embed/playlist/6kj2cuVmiU5R3TAm7gzjEG?utm_source=generator"
                            width="100%"
                            height="160"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </Box>
                    <Typography className="text-gray-500 text-left">
                        • i grew up listening to classic rock on the radio, interspersed with npr and the local sports station. some of the most nostalgic songs i have are 70s and 80s rock, and they always reminds me of being a kid again in the backseat of our &apos;01 civic. my parents both have a lot of old favorites too, surprisingly, and a good amount of old chinese rock features pretty heavily as well. from red hot chilli peppers to fleet macwood and everything in between, i always go back to the oldies when i&apos;m feeling a little nostalgic and thinking about home.
                    </Typography>
                    <Box className="mt-2 text-center md:text-left">
                        {/* <Typography className="mb-2 text-m text-gray-500 text-left">
                                    some playlists
                                </Typography> */}
                        {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2fBogb1klNGFHFd5fXG8bl?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                        <iframe
                            className="border-radius:12px"
                            src="https://open.spotify.com/embed/playlist/2fBogb1klNGFHFd5fXG8bl?utm_source=generator"
                            width="100%"
                            height="160"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </Box>


                    <Typography className="text-gray-500 text-left">
                        • rock devolved into punk rock and emo rock and metallica and screamo and that entire genre. starting with lighter fare like 3 doors down and the whole phase where everyone was into fallout boy, bands like bring me the horizon and breaking benjamin quickly became staples for edgy junior high grace.
                    </Typography>


                    <Box className="mt-2 text-center md:text-left">
                        {/* <Typography className="mb-2 text-m text-gray-500 text-left">
                            some playlists
                        </Typography> */}
                        {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0XPr5hIfjj5KnYxv51yJvk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                        <iframe
                            className="border-radius:8px"
                            src="https://open.spotify.com/embed/playlist/0XPr5hIfjj5KnYxv51yJvk?utm_source=generator"
                            width="100%"
                            height="160"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </Box>

                    <Box className="text-left">
                        <Typography className="text-gray-500 text-left">
                            • breathe carolina has a special place in my heart. i remember when their album hell is what you make it came out back in 2010 or 2011. one of the songs, wooly, is an odd mishmash of whatever the ancestor to hyperpop was called, and screamo. wooly alone definitely catapulted me, at that age, down the punk rock route and funneled me into a future of esoteric tastes. hyperpop is an endearing genre to me because of how deranged it is, and to date, i&apos;ve only met one other person who listens and enjoys the fringes as consistently as i do. shoutout to you, nate.
                        </Typography>
                    </Box>

                    <Box className="mt-2 text-center md:text-left">
                        {/* <Typography className="mb-2 text-m text-gray-500 text-left">
                            some playlists
                        </Typography> */}
                        {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6eIddmdzdm5HpleiaFZ0jX?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                        <iframe
                            className="border-radius:8px"
                            src="https://open.spotify.com/embed/playlist/6eIddmdzdm5HpleiaFZ0jX?utm_source=generator"
                            width="100%"
                            height="160"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </Box>

                    <Box className="text-left">
                        <Typography className="text-gray-500 text-left">
                            • angry rap! i feel like x made it basic, but x is what started it all for me too. i was a sophomore at the time, studying for ap physics 1 with my friends at daniel or ryan&apos;s house with all the guys, and howard started playing look at me on his speaker. things devolved from there. angry rap is my guilty pleasure and the soundtrack of my life and in another life, i swear i could be a screamo rapper. this is also the kind of music my friends meme me for listening to so often and don&apos;t let me aux for this very reason. but i&apos;m v passionate about it. some of my faves are city morgue and sosmula and zillakami and the likes. also poorstacy, who straddles the punk rock/angry rap line. so good so good so good.
                        </Typography>
                    </Box>
                    <Box className="mt-2 text-center md:text-left">
                        {/* <Typography className="mb-2 text-m text-gray-500 text-left">
                            some playlists
                        </Typography> */}
                        {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6uVorp0T4QMHSUeF3zFUEe?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                        <iframe
                            className="border-radius:8px"
                            src="https://open.spotify.com/embed/playlist/6uVorp0T4QMHSUeF3zFUEe?utm_source=generator"
                            width="100%"
                            height="160"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </Box>
                    <Box className="text-left">
                        <Typography className="text-gray-500 text-left">
                            • the adjacent to angry rap would be all the emo rap i listen to. jake gets credit for this one. he was my first ex and he put me on lil peep back in 2015 when crybaby came out. the first song he sent me was absolute in doubt and i think it changed my life. peep will always have a special place in my heart and all the emo rap that came from then. emo rap, underground rap, dark trap, all the likes. my top artists last year were suicideboys and pouya which probably fall somewhere in the category between angry and emo rap. i got to see $b last summer and ski which was so so so fun. i was going to see pouya this spring but didn&apos;t get the chance to. still tryna see him sometime soon. so good so good so good.
                        </Typography>
                    </Box>

                    <Box className="mt-2 text-center md:text-left">
                        {/* <Typography className="mb-2 text-m text-gray-500 text-left">
                            some playlists
                        </Typography> */}
                        {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4X7sBmwFT1NZELxmmqoPni?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                        <iframe
                            className="border-radius:8px"
                            src="https://open.spotify.com/embed/playlist/4X7sBmwFT1NZELxmmqoPni?utm_source=generator"
                            width="100%"
                            height="160"
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </Box>

                    <Box className="text-left mb-4">
                        <Typography className="pb-6 text-gray-500 text-left">
                            •  wiz khalifa is the first rapper i remember listening to. i remember being 9 and bumping black and yellow and all of rolling papers. pretty basic here, i like mainstream rap. the more aggressive or wavy, the better.
                            • i had a french era and a norwegian era and a german era too.
                            •  cars got me into phonk and drift phonk. way before tiktok made it basic. that&apos;s all i have to say here.
                            • i&apos;m also a classically trained musician lol. i grew up playing piano and violin and viola competitively and look at me now.
                        </Typography>
                    </Box>


                </div>

                <div className="absolute right-20 w-1/5" style={{ top: '200px' }}>
                    <div className="mb-6">
                        <img src="/dj.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-500 text-sm text-left italic mt-1">
                            mixing for the first time at a car meet on eric&apos;s board, summer 2021
                        </Typography>
                    </div>
                    <div className="mb-6">
                        <img src="/breakaway.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-500 text-sm text-left italic mt-1">
                            breakaway main stage, october 2022
                        </Typography>
                    </div>
                    <div className="mb-6">
                        <img src="/audio.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-500 text-sm text-left italic mt-1">
                            happy at audio, july 2022
                        </Typography>
                    </div>
                    <div className="mb-6">
                        <img src="/crystallize.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-500 text-sm text-left italic mt-1">
                            performing crystallize at my dywaz farewell, september 2019
                        </Typography>
                    </div>
                    <div className="mb-4">
                        <img src="/wrapped.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-500 text-sm text-left italic mt-1">
                            my spotify wrapped from 2022
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

export default Music;