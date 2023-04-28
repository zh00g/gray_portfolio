import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './WorkCard.module.css';

const WorkCard = ({ title, image, description, tags, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <Card
      className={`${styles.card} ${isHovering ? styles.hovered : ''}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        component="img"
        alt={title}
        height="75%"
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

export default WorkCard;
