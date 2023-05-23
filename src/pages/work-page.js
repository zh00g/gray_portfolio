import React from 'react';
import { Container, CardMedia, List, ListItem, ListItemText, Grid, Modal, Box, Typography } from '@mui/material';
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
        👩🏻‍💻 work experience
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

const WorkPage = () => {
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
      id: 1,
      title: 'orchard',
      image: '/orchard.svg',
      description: 'fullstack (web) @ fruitscope cloud',
      role: 'fullstack (web)',
      duration: 'feb 2023 - present',
      note: `Deciding to work at Orchard and 
      in the startup space, especially while still enrolled full time as a student, 
      is the most intentional and impactful decision I have made in my career. I would love to chat about the journey this has been!`,
      moreInfo:
        ['8th engineer on the founding team',
          'Built and own the entire stack for the user-facing FruitScope Cloud web-application from scratch in < 2 months',
          'Implemented and optimized MongoDB data ingestion to handle farmers’ scan data of 2million+ buds per scan per block',
          'Implemented and optimized Flask endpoints and MongoDB data querying to transfer orchard and block and tree level data for farmers',
          'Designed and implemented front-end interface to display farmers’ orchard scan data, including responsive MapBox integration, data exports, and data visualizations'],
      tags: ['React', 'MongoDB', 'Flask']
    },
    {
      id: 2,
      title: 'meta',
      image: '/metalogo.png',
      description: 'fullstack (web) @ fb core ads',
      role: 'fullstack (web)',
      duration: 'jun 2022 - sep 2022',
      moreInfo: ['Created a new page e2e in the ACO Portal that automates Ad Creative Optimization feature testing.',
        'Implemented logging and user history tracking across the entire suite of ACO Portal tools for ad optimizations and created a new page e2e to display and monitor usage and metrics.',
        'ACO Portal tooling is used by all ad-related teams and initiatives across the organization for dev optimization.'
      ],
      tags: ['React', 'Hack']
    },
    {
      id: 3,
      title: 'meta',
      image: '/metalogo.png',
      role: 'fullstack (mobile)',
      duration: 'sep 2021 - dec 2021',
      description: 'fullstack (mobile) @ fb shops',
      moreInfo: ['Created new notification sent to users who join a group with Group Shops in Hack to increase exposure of shops.',
        'Added deduping functionality for an existing notification that sends when a shop is linked to a group.',
        'Coordinated with designers and engineers across teams and codebases to build the explorable Group Shop module.',
        'Created a new module e2e in the Shop Tab that highlights popular Group Shops in Hack, React Native, Relay and directs to an infinite scroll page to increase traffic and exposure of these shops.'
      ],
      tags: ['React Native', 'Hack', 'GraphQL']
    },
    {
      id: 4,
      title: 'amazon',
      image: '/awslogo.png',
      role: 'backend',
      duration: 'jun 2021 - sep 2021',
      description: 'backend @ aws personalize',
      moreInfo: ['Implemented 3 new customer-facing APIs in Java using Amazon’s proprietary RPC framework (Coral) to handle tagging resources in the AWS Personalize service.',
        'Created testing infrastructure by adding unit tests and implemented sweeper API.'
      ],
      tags: ['Java']
    },
    // Add more work objects here
  ];

  return (
    <Container>
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} toggleDarkMode={toggleDarkMode} ></DarkModeToggle>
      <div className='pl-16'>
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
                  {selectedWork?.role} | {selectedWork?.duration}
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
            {selectedWork?.tags && (
              <div className="absolute mb-2 bottom-4 flex flex-row pt-1 text-xs">
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

            <Typography style={{ fontSize: '12px' }} className=" mr-2 py-2 absolute bottom-12 px-1 italic text-purple-400" id="modal-modal-description" sx={{ mt: 0 }}>
              {selectedWork?.note}
            </Typography>
          </Box>
        </Modal>
        <FooterLinks></FooterLinks>
      </div>
    </Container>
  );
};

export default WorkPage;
