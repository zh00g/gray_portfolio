import Link from 'next/link';
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

const ExtraCard = ({ title, image, description, route }) => {
    return (
        <div className="relative">
            <Link href={route}>
                <Card className="h-full transition duration-200 ease-in-out transform hover:shadow-lg cursor-pointer">
                    <CardMedia
                        component="img"
                        alt={title}
                        height="800"
                        width="600"
                        image={image}
                        title={title}
                        className="h-72 object-cover"
                    />
                    <CardContent className="border-t bg-gray-50">
                        <Typography gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" className="text-gray-400 text-xs text-left">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
};

export default ExtraCard;
