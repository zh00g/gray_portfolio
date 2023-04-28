import React, { useState } from 'react';
import { Card, CardContent, Typography, Dialog, DialogContent, DialogTitle } from '@mui/material';
import styles from './WritingCard.module.css';


const WritingCard = ({ tags, title, author, text }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Card className={`h-40 relative shadow-lg hover:shadow-xl cursor-pointer ${styles.card}`} onClick={handleOpen}>
                <CardContent className="border-t ">
                    <Typography gutterBottom variant="h8" component="div">
                        {title}
                    </Typography>
                    {tags && (
                        <div className="absolute bottom-4 left-4 w-full flex flex-row justify-start pt-1 text-xs">
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
            <Dialog open={open} onClose={handleClose} maxWidth="md">
                <DialogTitle className='text-xl'>{title}</DialogTitle>
                <DialogContent>
                    {/* <Typography className='text-gray-500 p-4' variant="body1">{text}</Typography> */}
                    {text.split('\n').map((line, index) => (
                        <Typography className='text-gray-500 p-4' key={index} variant="body1" >
                            {line}
                        </Typography>
                    ))}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default WritingCard;
