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



const Kintsugi = () => {
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
                <div className="text-center mb-10 md:mb-0 md:text-left mt-36 pb-2 pl-16 pr-12">
                    <Back></Back>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }} className="mb-1 font-bold text-4xl">
                        🥀 on kintsugi and reclaiming things, and what it all means
                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-left">
                        I struggled a lot with how best to tell this story — it&apos;s characteristically nonlinear, in the way many stories are, and touches on several defining themes of my life. Perhaps that&apos;s why it means so much to me too, and why I spent so long puzzling over where or how to begin.

                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-left">
                        The story ends with a finished product, a skateboard I painted by hand over this past summer in Bellevue with my boyfriend. The story begins, however, in a multitude of ways.
                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-center">
                        ...
                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-left">
                        One way the story begins is with kintsugi itself. The concept and art practice has always been meaningful to me, especially since my family does in part trace some of its history to Japan; we have kinstugi ceramic in our display cases, along with tea sets and fine china and other vestiges of places that have been my family&apos;s homes over the decades. Kintsugi, or kintsukuroi, is the practice of repairing broken pottery and ceramics with gold thread. The areas of breakage are mended with urushi lacquer that are dusted and mixed with powdered gold, similar to the maki-e technique, which is a lacquerware technique that traces its origins to Japan over 1000 years ago. To me, kintsugi has always symbolized healing, rebirth, and new beginnings. Of embracing what is broken, and remaking it into something whole once more.

                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-left">
                        Another way the story begins is with this particular board. I skated casually throughout college for transportation, and almost exclusively on my penny board I bought freshman year for convenience, that was ubiquitously at my side throughout those 4 years. I&apos;ve never owned a proper skateboard or longboard until this one. My mom works in real estate and sometimes her tenants will leave things behind when they move out and either don&apos;t have time or resources to either dispose of or take everything with them. I&apos;ve always had a fixation with things left behind (either unwillingly, or explicitly for someone else to come across later on). There is inexplicably memory tied with something that was once someone else&apos;s (and I think there&apos;s always something to be cherished there, to have a piece of something that meant something, to someone, once). This particular longboard was left behind by a former tenant, and, being away at Stanford at the time, I asked her to pick it up for my younger brother instead, who I&apos;d been trying to teach how to skate while home for the holidays. They noticed there had been some hardware missing, so my brother opted to keep my old penny instead, and this board went into storage until I realized I wanted a proper longboard. My family brought it up for me when they visited for my graduation this past June, and I brought it with me up to Seattle afterwards when I moved.

                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-left">
                        Another way the story begins is with skating itself. I have a whole separate page dedicated to skating, but the piece that&apos;s relevant here is the fall and everything that came after. I&apos;d been driving up from Stanford to Seattle in late June with my boyfriend. We&apos;d been able to allot a few days for the trip, despite both working full-time as well, and had a driving plan hashed out that had time for a few scenic stops along the way; Shasta, Ashland, Crater Lake. I&apos;ve always loved driving and have never gotten to drive up north and had been so excited to road trip after graduation.
                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-left">
                        We stopped at Crater Lake on the second day, and went hiking and skating along the mountain roads. My boyfriend is an avid downhill skater, and though I&apos;d never had too much experience with it before, I (obviously) wanted in as well. I ended up wiping out along one of the roads leading out of the park, going too fast to control. I hadn&apos;t been wearing a helmet either and had a seizure. I remember coming to consiousness, disoriented, with no recollection of what had happened beyond the moments I&apos;d felt scared before I fell. I was helped generously by the park staff and a kind group who stopped along the road to make sure I was okay. One of them, Jay, was a surgeon and knew how to handle the situation. The first complete record I had of what happened was a recording he&apos;d taken describing exactly what had happened -- the time of my fall, convulsions and full loss of motor control, recommended medical steps.  It didn&apos;t feel real. I didn&apos;t ever think I&apos;d ever find myself in a situation like that. I don&apos;t think I&apos;ve ever felt scared for my life before, but I realized in those hours in between waking up seeing my boyfriend&apos;s sweater covered in my blood and laying on the stretcher and listening to Jay&apos;s recording of the incident, that I was so fearful of what could&apos;ve happened (and that I was, and am, so grateful to be alive, and safe, and healthy, and well). I was taken to the nearest hospital in Medford, Oregon, 1.5hrs away and went through the whole ordeal of CT scans and seeing neurologists and dotors and getting MRI&apos;s and EEG&apos;s that continued months after of making sure I hadn&apos;t had any brain damage or become seizure-prone.
                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-center">
                        ...
                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-left">
                        And this, I suppose is where the stories converge, across seizures and symbolism and skating and snippets of home. There is what happens, and what comes after. I tend to posthumously package my life into vignettes of before and after, of all the aftermaths I find myself in and in trying, searching, to find what comes next.
                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-left">
                        I have thought often (but perhaps, honestly, still, not enough) about skating after my accident, and of everything it means, then and now. In a way, skating was one of the things that was ever wholly mine in the later years I spent home. Stripped to the core, ground into the shape of all the other duties I thought I had to uphold, moulded into the manifestation of a material dream — I forced myself become what I thought I was expected to be, and even today, I mourn all the parts of me that I let myself lose. Skating was the first thing I took for myself back then and one of the only things I carried with me beyond, one of the first things I wasn&apos;t afraid to fail at because it was mine and only mine, and no one could take that from me. I let myself exist in imperfection — it was okay that it wasn&apos;t something that I&apos;d honed for years to excel in. It was okay that my neighbors and friends and strangers saw me wiping out day after day, stumbling and skidding along my driveway back home the couple weeks before freshman fall began and careening down the slight slopes around campus all throughout that year. I was never afraid to be seen falling, and I was never afraid of falling. In the quiet moments at night where it was just me and the sound of wheels crunching against the asphalt and the lingering chill of the air against my skin, it was one of the only places I could carve out a way for myself to breathe. I think of how possessively I hoard the things I love and care about, and how closely to my heart I hold these precious things.
                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-left">
                        My accident changed things, inevitably. But I think what im most disturbed by is not remembering falling. I don&apos;t know if its a blessing or curse that I dont. I wonder that, if I did remember every second of falling and the aftermath, if it would&apos;ve been enough to instill enough fear to take away my desire to skate. I wonder that, because I don&apos;t, if it means I haven&apos;t learned the lesson I need to. But I ask myself what this means for me, what I was meant to learn, what I should learn. A theme of my life since entering college and beyond is reclaiming — reclaiming things that were once lost, and making them mine again. I think of kintsugi and its golden threads. I&apos;ve reclaimed a number of things over the years. My ties to classical music. My fearlessness with driving. My body and my right to it. My relationship with my family. I can reclaim myself too, and my ability to skate.
                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-center">
                        ...
                    </Typography>
                    <br></br>


                    <Typography className="mt-4 text-gray-400 text-left">
                        Working on this board and starting to skate again have been an ode to reclamation (because what else is there to do, but try and move forward and onwards?). A lot of love went into this project, and it&apos;s brought together many themes of my life throughout time that have meant a lot to me or were lost throughout the years.

                    </Typography>
                    <br></br>



                    <Typography className="mt-4 text-gray-400 text-left">
                        I chose to make the main motif spider lilies because of how poignant their symbolism is. Red spider lilies are often found at gravesites and are associated with themes of death, although they parallely represent reincarnation and the transition from this life to the next. Their name in Japanese is higanbana, 彼岸花, meaning &apos;flower of the autumn equinox&apos; because they bloom around the autumn equinox.

                        Tying into this theme of rebirth is the kintsugi motif itself along the borders. I thought it was fitting to frame the board itself (and everything it symbolizes) as something to be mended. Further, the quote split across the horizontal and vertical edges of the board is a Japanese proverb (明日は明日の風が吹く) that translates literally to &apos;the winds of tomorrow will blow tomorrow&apos;, or loosely that tomorrow is a new day and that tomorrow will always come.
                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-left">
                        As much as I enjoy art as a hobby, it&apos;s been years since I&apos;ve done anything non-digitally, and I haven&apos;t touched paints since before college. I did art loosely in high school but stopped because I was too much of a perfectionist, especially with paintings, and took too long to finish my competition pieces. I transitioned to spending more time on other extracurriculars instead, like research and viola, and I stopped making art at all, even for fun for for myself. Even when I draw now, I still get caught up in the drafting stages and trying to make things perfect and getting frustrated with myself when I go on hiatus and find it harder to get back in. Painting this board is the first full-paint piece I&apos;ve completed since high school, and the first entirely free-handed art I&apos;ve done. I used acrylic paint markers, which are quite nice to work with but only really good for lineart and finer details. They aren&apos;t very bendable, so I wasn&apos;t able to use them in conjunction with regular acrylic paint, and any shading I did was more defined and less blended. I decided to go all-in as well and painted on the board directly, instead of doing any sort of primer layer upfront.

                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-left">
                        The whole process, though spread over the course of a few months, took only a few days to complete. I started with pencil sketching and laying down the main flower motifs. I realized then that the red paint didn&apos;t contrast as well against the dark wood of my board, so I started adding highlights to outline the flowers more. After that came adding the kinstugi and finalizing how I wanted the characters oriented, before applying lacquer to protect the paint and give it a polished look. The existing hardware on the board is a set of my boyfriend&apos;s old slide wheels (Orangatang Stimulus 70mm 80a). I&apos;ve never put together a board from scratch myself before either, so it was fun learning how to do so as well.
                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-center">
                        ...
                    </Typography>
                    <br></br>

                    <Typography className="mt-4 text-gray-400 text-left">
                        I&apos;ve been trying to skate more again. I still get scared on slopes and I&apos;m trying to learn to get better at carving and braking (and I always wear a helmet now!!). Maybe the fear will go away someday, but for now, getting to ride at all is something I&apos;m grateful I still have.

                        In closing, here is a snippet from a longer essay I wrote earlier this year (linked elsewhere on my site as well). I think it encapsulates well the sentiment I wanted to capture throughout the process of rebuilding and painting this board, and everything that came before and after and that went into the making of this project.

                    </Typography>

                    <br></br>
                    <br></br>
                    <hr className='border-gray-400'></hr>


                    <Typography className="italic mt-4 text-gray-400 text-left">
                    &quot;if something shatters, what is there to do with the broken pieces but to cut your calloused fingertips on those jagged edges and close your eyes and exhale, bone-deep and weary, and feel the coolness of the ceramic like a ghost of a kiss, a salve, against the warmth of your own blood, dark, slick, rivulets pooling between the cracks in your fingers and the cracks in the shards (and the cracks in your facade, the cracks in your very foundations as life as you know it is trembling, now, can you feel it? you reach out with one crimson-stained palm and feel the lines blurring, boundaries vibrating, almost tangible, just nearly but not quite).

                    </Typography>
                    <br></br>

                    <Typography className="italic mt-4 text-gray-400 text-left">
                        kintsugi is the word, my mother says in lilting japanese. kintsugi, or kintsukuroi, the traditional art of repairing broken pottery and ceramics with gold thread. and what is there to do but open your eyes and look at the wreckage in your own two hands and feel the staccato of your aching heart and somewhere between the blurriness of your tears and the trembling of your fingertips, the red is gold and the gold is red (the colors of your motherland, your home, and it’s auspicious, ironic, fitting, really, that it’s come to this). there is blood and gold and there is gold and glory and there is glory and grace and you have remade yourself, you are grace.&quot;
                    </Typography>


                </div>

                <div className="absolute right-20 w-1/4" style={{ top: '200px' }}>
                    <div className="mb-6">
                        <img src="/board_grass_background.JPG" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-400 text-sm text-left italic mt-1">
                            finished board out for its first skate
                        </Typography>
                    </div>
                    <div className="mb-6">
                        <img src="/board_wip1.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-400 text-sm text-left italic mt-1">
                            wip 1: starting from scratch
                        </Typography>
                    </div>
                    <div className="mb-6">
                        <img src="/board_wip2.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-400 text-sm text-left italic mt-1">
                            wip 2: first layer of paint down for the spider lilies
                        </Typography>
                    </div>
                    <div className="mb-6">
                        <img src="/board_wip3.JPG" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-400 text-sm text-left italic mt-1">
                            wip 3: adding lighter accents
                        </Typography>
                    </div>
                    <div className="mb-4">
                        <img src="/board_wip4.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-400 text-sm text-left italic mt-1">
                            wip 4: kintsugi lines down, ft. shihao + his spray paint
                        </Typography>
                    </div>
                    <div className="mb-4">
                        <img src="/board_wip5.png" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-400 text-sm text-left italic mt-1">
                            wip 5: 5 coats of lacquer
                        </Typography>
                    </div>
                    <div className="mb-4">
                        <img src="/board_street.JPG" alt="self pic" className="w-full h-full object-cover" />
                        <Typography variant="subtitle1" className="pl-1 text-gray-400 text-sm text-left italic mt-1">
                            out on the streets - so shiny!
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

export default Kintsugi;