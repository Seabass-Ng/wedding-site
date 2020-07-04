import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Gallery from '../components/gallery';
import { PAGES } from '../components/nav-tabs';
import CenteredCard from '../components/centered-card';
import Images from './images';

const Masonry = styled.div`
  column-count: 1;
  column-gap: 1.25em;
  display: block;
  grid-gap: 0.67em;
  grid-auto-rows: 0;
  margin: 1.25em 0;
  padding: 0;
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    column-count: 2;
  }
  @media only screen and (min-width: 1000px) {
    column-count: 3;
  }
`;

const MasonryItem = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.18);
  display: inline-block;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
  margin-bottom: 1.25em;
  padding: 5px;
  position: relative;
  transition: filter 0.25s ease-in-out;
  vertical-align: top;
  width: 100%;

  &:hover {
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    padding: 0;
    img {
      border-radius: 4px;
    }
  }

  > img {
    display: block;
    height: auto;
    margin: 0;
    width: 100%;
    min-height: 160px;
    vertical-align: middle;
  }
`;

const Photos: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    const lazyImages = document.querySelectorAll('[data-src]');
    const config = {
      rootMargin: '0px 0px 50px 0px',
      threshold: 0,
    };
    const preloadImage = img => {
      const newImg = img;
      const source = img.getAttribute('data-src');
      if (!source) {
        return;
      }
      newImg.src = source;
    };
    const observer = new IntersectionObserver((entries, self) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log(`Image ${entry.target.src} is in the viewport!`);
          preloadImage(entry.target);
          // Stop watching and load the image
          self.unobserve(entry.target);
        }
      });
    }, config);
    lazyImages.forEach(image => {
      observer.observe(image);
    });
  }, []);

  const onCloseDialog = () => {
    setShowDialog(false);
    setIndex(-1);
  };

  const onOpenDialog = clickedIndex => () => {
    setShowDialog(true);
    setIndex(clickedIndex);
  };
  return (
    <>
      <Layout activeTab={PAGES.PHOTO}>
        <CenteredCard>More Photos to come!</CenteredCard>
        <Masonry>
          {Images.map((image, i) => (
            <MasonryItem key={image} onClick={onOpenDialog(i)}>
              <img data-src={`/images/thumbnails/${image}.jpg`} alt={image} />
            </MasonryItem>
          ))}
        </Masonry>
      </Layout>
      {showDialog && <Gallery initialIndex={index} onClose={onCloseDialog} />}
    </>
  );
};

export default Photos;
