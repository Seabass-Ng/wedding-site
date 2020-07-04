import { createStyles, Dialog, IconButton, Theme, withStyles, WithStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Carousel from '@brainhubeu/react-carousel';
import React, { useState } from 'react';
import styled from 'styled-components';
import Images from './images';

const GalleryContainer = styled.div`
  margin-top: 4vh;
  img {
    max-height: 92vh;
    max-width: 92vw;
    object-fit: contain;
    object-position: center center;
  }
`;

interface IGallery {
  initialIndex: number;
  onClose: () => void;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
      'z-index': 1,
    },
  });

interface CloseButtonProps extends WithStyles<typeof styles> {
  onClose: () => void;
}

const CloseButton = withStyles(styles)(({ classes, onClose }: CloseButtonProps) => (
  <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
    <CloseIcon />
  </IconButton>
));

const Gallery: React.FC<IGallery> = ({ initialIndex, onClose }: IGallery) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const onChange = value => setCurrentIndex(value);

  return (
    <Dialog onClose={onClose} open maxWidth="lg" fullScreen>
      <CloseButton onClose={onClose} />
      <GalleryContainer>
        <Carousel arrows onChange={onChange} value={currentIndex}>
          {Images.map(image => (
            <img src={`/images/full/${image}.jpg`} alt={image} />
          ))}
        </Carousel>
      </GalleryContainer>
    </Dialog>
  );
};

export default Gallery;
