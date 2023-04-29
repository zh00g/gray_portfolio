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
            id: 0,
            title: 'spotify',
            image: '/spotify2.png',
            description: 'cs448b final project | win 23',
            moreInfo: 'More information about Work 1',
            tags: ['React']
        },
        {
            id: 1,
            title: 'stamp assembly',
            image: '/stamplogo.png',
            description: 'me102 final project | fall 22',
            moreInfo: 'More information about Work 1',
            tags: ['CAD', 'Laser Cutting', '3D Printing']
        },
        {
            id: 2,
            title: 'attenshown',
            image: '/attenshown.png',
            description: 'cs347 final project | spr 22',
            moreInfo: 'More information about Work 1',
            tags: ['React']
        },
        {
            id: 4,
            title: 'barefoot',
            image: '/barefoot.jpeg',
            description: 'cs147 final project | spr 21',
            moreInfo: 'More information about Work 1',
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
                        }}
                    >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {selectedWork?.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {selectedWork?.moreInfo}
                        </Typography>
                    </Box>
                </Modal>
                <FooterLinks></FooterLinks>
            </div>
        </Container>
    );
};

export default ProjectPage;
