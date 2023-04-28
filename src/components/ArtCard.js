import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ArtCard = ({ title, tags, image, description }) => {
  return (
    <Card className="h-full">
      <CardMedia
        component="img"
        alt={title}
        height="800"
        width="600"
        image={image}
        title={title}
        className="h-60 object-cover"
      />
      <CardContent className="border-t bg-gray-50">
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {tags && (
          <div className="flex flex-row pt-1 text-xs">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="rounded-full bg-gray-200 text-gray-700 px-2 py-1 mr-1"
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ArtCard;
