import { Inter } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// library.add(faEnvelope, faGithub, faLinkedin);

import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import Link from 'next/link';

const LinkBar = () => {
    return (
      <List className="flex flex-row justify-center text-lg items-center text-center md:text-left pl-0">
        <ListItem className="flex-auto list-divider">
          <Link href="/work-page" >
            <ListItemText
              primary="work"
              className="text-purple-400 cursor-pointer hover:scale-105 transition-all duration-300"
            />
          </Link>
        </ListItem>
        <ListItem className="flex-auto  list-divider">
          <Link href="/project-page">
            <ListItemText
              primary="projects"
              className="text-purple-400 cursor-pointer hover:scale-105 transition-all duration-300"
            />
          </Link>
        </ListItem>
        <ListItem className="flex-auto  list-divider">
          <Link href="/writing-page">
            <ListItemText
              primary="writing"
              className="text-purple-400 cursor-pointer hover:scale-105 transition-all duration-300"
            />
          </Link>
        </ListItem>
        <ListItem className="flex-auto list-divider">
          <Link href="/art-page">
            <ListItemText
              primary="art"
              className="text-purple-400 cursor-pointer hover:scale-105 transition-all duration-300"
            />
          </Link>
        </ListItem>
        <ListItem className="flex-auto">
          <Link href="/extras-page">
            <ListItemText
              primary="extras"
              className="text-purple-400 cursor-pointer hover:scale-105 transition-all duration-300"
            />
          </Link>
        </ListItem>
      </List>
    )
  }

  export default LinkBar;