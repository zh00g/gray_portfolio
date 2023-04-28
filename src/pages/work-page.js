import React, { useState } from 'react';
import { Container, List, ListItem, ListItemText, Grid, Modal, Box, Typography } from '@mui/material';
import Link from 'next/link';
import WorkCard from '@/components/WorkCard';
import LinkBar from '@/components/LinkBar'; 
import FooterLinks from '@/components/FooterLinks'; 
import BackButton from '@/components/BackButton'; 

const HelloWorldLinks = () => {
  return (
    <div className="text-center mb-2 md:mb-0 md:text-left mt-48">
      <Typography variant="h4" className="ml-8 font-bold text-4xl">
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

  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  const workData = [
    {
      id: 1,
      title: 'orchard',
      image: '/orchard.svg',
      description: 'fullstack (web) @ fruitscope cloud',
      moreInfo: 'More information about Work 1',
      tags: ['React', 'MongoDB', 'Flask']
    },
    {
      id: 2,
      title: 'meta',
      image: '/metalogo.png',
      description: 'fullstack (web) @ fb core ads',
      moreInfo: 'More information about Work 1',
      tags: ['React', 'Hack']
    },
    {
      id: 3,
      title: 'meta',
      image: '/metalogo.png',
      description: 'fullstack (mobile) @ fb shops',
      moreInfo: 'More information about Work 1',
      tags: ['React Native', 'Hack', 'GraphQL']
    },
    {
      id: 4,
      title: 'amazon',
      image: '/awslogo.png',
      description: 'backend @ aws personalize',
      moreInfo: 'More information about Work 1',
      tags: ['Java']
    },
    // Add more work objects here
  ];

  return (
    <Container>
      <div className='pl-16'
        style={{ minHeight: 'calc(100vh - 64px)' }} // Adjust the value '64px' based on the height of your header/navbar
      >
      <BackButton></BackButton>
      <HelloWorldLinks></HelloWorldLinks>
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

export default WorkPage;
