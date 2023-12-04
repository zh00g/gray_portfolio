import { Inter } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
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

const FooterLinks = () => {
    return (
        <footer style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            {/* <div> HELLO </div> */}
            <div className="flex justify-center items-center mb-4">
                <a href="https://github.com/zh00g" target="_blank" rel="noopener noreferrer">
                    {/* <i className="fab fa-github mx-4 text-2xl hover:text-gray-400"></i> */}
                    <FontAwesomeIcon className='ml-2' size='2xl' icon={faGithub} fixedWidth />
                </a>
                <a href="https://www.linkedin.com/in/grace-z" target="_blank" rel="noopener noreferrer">
                    {/* <i className="fab fa-linkedin mx-4 text-2xl hover:text-gray-400"></i> */}
                    <FontAwesomeIcon className='ml-2' size='2xl' icon={faLinkedin} fixedWidth />
                </a>
                <a href="mailto:gracexz@stanford.edu" target="_blank" rel="noopener noreferrer">
                    {/* <i className="fas fa-envelope mx-4 text-2xl hover:text-gray-400"></i> */}
                    <FontAwesomeIcon className='ml-2' size='2xl' icon={faEnvelope} fixedWidth />
                </a>
                <a  href="/GraceZhangBSResume_Dec23.pdf" target="_blank" rel="noopener noreferrer">
                    {/* <i className="fas fa-envelope mx-4 text-2xl hover:text-gray-400"></i> */}
                    <FontAwesomeIcon className='ml-2' size='2xl' icon={faFile} fixedWidth />
                </a>
            </div>
        </footer>)
}

export default FooterLinks