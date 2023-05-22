import React from 'react';
import { Container, List, ListItem, ListItemText, Grid, Modal, Box, Typography } from '@mui/material';
import Link from 'next/link';
import WorkCard from '@/components/WorkCard';
import LinkBar from '@/components/LinkBar';
import FooterLinks from '@/components/FooterLinks';
import BackButton from '@/components/BackButton';
import DarkModeContext from '../components/DarkModeContext';
import { useState, useContext, useEffect } from 'react';
import DarkModeToggle from '@/components/DarkModeToggle';

const HelloWorldLinks = () => {
    return (
        <div className="text-center mb-2 md:mb-0 md:text-left mt-40">
            <Typography style={{ fontWeight: 'bold' }} variant="h4" className="ml-8 font-bold text-4xl">
                💻 projects
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
            <div className='mb-2 pl-28 ml-16 w-1/5'>
                <LinkBar></LinkBar>
            </div>
        </div>
    );
};

const ProjectPage = () => {
    const [selectedWork, setSelectedWork] = useState(null);
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
    const handleCloseModal = () => {
        setSelectedWork(null);
    };

    const workData = [
        {
            id: 5,
            title: 'rizzcipe',
            image: '/rizzcipe.png',
            description: 'cs194 final project | spr 23',
            moreInfo: ['Built the full stack of a mobile application that recommends recipes to a user based on a picture of their fridge that they take.', 
            `Leveraged Facebook's Segment Anything Model for segmentation, fine-tuned a ResNet model for classification, integrated with the openAI api for recipe recommendations based on identified ingredients.`],
            tags: ['React Native', 'Flask']
        },
        {
            id: 0,
            title: 'spotify',
            image: '/1942.png',
            description: 'cs448b final project | win 23',
            moreInfo: [`Built a web application to analyze similarities within a user's Spotify playlists.`, 
            'Implemented a comparator algorithm across different song attributes and visualized the similarity graph with D3.js.'],
            tags: ['React', 'D3.js']
        },
        {
            id: 1,
            title: 'stamp assembly',
            image: '/stamp.png',
            report: 'https://drive.google.com/file/d/1DVVmiBdPkuY5KWIsVTtIiWNedQvlO5BL/view?usp=sharing',
            description: 'me102 final project | fall 22',
            moreInfo: ['Built a rotary-actuated stamping machine inspired by the crank slider mechanism.',
                'Adhered to design constraints regarding mechanism size and spring working distance.',
                'Designed the entire assembly in CAD and iterated through multiple prototypes to optimize the design.',
                'Stamp machine body laser cut from 1/4" acrylic, stamp holder 3D printed, sliding stamp tray with rotating lid cut from 1/8" acrylic.'],
            tags: ['CAD', 'Laser Cutting', '3D Printing']
        },
        // {
        //     id: 2,
        //     title: 'attenshown',
        //     image: '/attenshown.png',
        //     description: 'cs347 final project | spr 22',
        //     moreInfo: ['one', 'two'],
        //     tags: ['React']
        // },
        {
            id: 4,
            title: 'barefoot',
            image: '/barefoot.jpeg',
            demo: 'https://www.youtube.com/watch?v=PB9jb-c3NtI',
            website: 'https://hci.stanford.edu/courses/cs147/2021/wi/projects/Sustainability/barefoot/',
            report: 'https://hci.stanford.edu/courses/cs147/2021/wi/projects/Sustainability/barefoot/Finalreport.pdf',
            description: 'cs147 final project | spr 21',
            moreInfo: ['Built a mobile application that promotes sustainability by immersing people in their natural environment while exploring walks and trails in the area',
                'Iterated through the entire design cycle of Needfinding, Ideating, Low, Medium, and High-fidelity Prototying, and User Testing.',
                'Employed methods such as empathy and journal mapping, experience prototyping, storyboarding, heuristic evaluation.'],
            tags: ['Figma', 'React Native']
        },
        // Add more work objects here
    ];

    return (
        <Container>
            <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} toggleDarkMode={toggleDarkMode} ></DarkModeToggle>
            <div className='pl-16'
            >
                <BackButton></BackButton>
                <HelloWorldLinks></HelloWorldLinks>
                <Typography className="text-gray-400 pb-4">
                    • view my <a className='hover:scale-105 transition-all duration-300 hover:underline text-purple-400' href="https://drive.google.com/file/d/1pSt6Sc8KuDgTO56QCgGjZKk5D8lKutP-/edit?rtpof=true&sd=true">resume</a>
                </Typography>
                <Grid container spacing={2} className='w-100'>
                    {workData.map((work) => (
                        <Grid key={work.id} item md={3} >
                            <WorkCard
                                title={work.title}
                                image={work.image}
                                description={work.description}
                                tags={work.tags}
                                onClick={() => setSelectedWork(work)}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Modal
                    open={!!selectedWork}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            maxWidth: '90%',
                            minWidth: '55%',
                            minHeight: '60%',
                            maxHeight: '75%',
                        }}
                    >
                        <div className="flex items-center">
                            <img className="pb-2 object-contain w-20 h-20 mr-4" src={selectedWork?.image} alt="Your alt text" />
                            <div>
                                <Typography className="text-slate-800" id="modal-modal-title" variant="h4" component="h2">
                                    {selectedWork?.title}
                                </Typography>
                                <Typography className="text-slate-500 text-xs" style={{ fontSize: '12px' }} id="modal-modal-description" sx={{ mt: 0 }}>
                                    {selectedWork?.description}
                                </Typography>
                            </div>
                        </div>

                        <hr className='border-gray-300 my-2' />
                        {selectedWork?.moreInfo && (
                            <div className="flex mt-2 flex-col pt-1 text-xs">
                                {selectedWork?.moreInfo.map((info, index) => (
                                    <Typography variant="body2" key={index} className="pt-1 pl-1 text-gray-500 block" id="modal-modal-description" sx={{ mt: 0 }}>
                                        - {info}
                                    </Typography>
                                ))}
                            </div>
                        )}
                        <div className='pl-1 py-1 text-sm'>
                            {selectedWork?.demo && (
                                <div>
                                    <a
                                        className='hover:scale-105 transition-all duration-300 hover:underline text-purple-400'
                                        href={selectedWork?.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View the demo
                                    </a>
                                </div>
                            )}
                            {selectedWork?.report && (
                                <div>
                                    <a
                                        className='hover:scale-105 transition-all duration-300 hover:underline text-purple-400'
                                        href={selectedWork?.report}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View the report
                                    </a>
                                </div>
                            )}
                            {selectedWork?.website && (
                                <div>
                                    <a
                                        className='hover:scale-105 transition-all duration-300 hover:underline text-purple-400'
                                        href={selectedWork?.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View the website
                                    </a>
                                </div>
                            )}
                        </div>

                        {selectedWork?.tags && (
                            <div className="absolute bottom-4 flex flex-row pt-1 text-xs">
                                {selectedWork?.tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className=" rounded-full bg-gray-200 text-gray-700 px-2 py-1 mr-1"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        )}

                        <Typography style={{ fontSize: '12px' }} className=" py-2 absolute bottom-10 px-1 italic text-purple-400" id="modal-modal-description" sx={{ mt: 0 }}>
                            {selectedWork?.note}
                        </Typography>
                    </Box>
                </Modal>
                <FooterLinks></FooterLinks>
            </div>
        </Container>
    );
};

export default ProjectPage;
