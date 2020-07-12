import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import CenteredCards from '../components/centered-card';
import { PAGES } from '../components/nav-tabs';

const AboutUsFlex = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
  @media screen and (min-width: 768px) {
    h2 {
      margin: 1em 0;
    }
    p {
      margin: 1em 0;
    }
  }

  .text {
    flex-grow: 1;
    p {
      text-align: left;
    }
  }

  img {
    display: block;
    height: 300px;
    object-fit: contain;
    object-position: center center;
    @media screen and (min-width: 768px) {
      margin-right: 20px;
    }
  }
`;

const About: React.FC = () => (
  <Layout activeTab={PAGES.ABOUT}>
    <CenteredCards>
      <AboutUsFlex>
        <img src="/images/Seurat.jpg" alt="Seurat" />
        <div className="text">
          <h2>About Us</h2>
          <p>
            We met at a mutual friend’s dinner birthday party of Korean food and soju in a
            watermelon (Hi Heather!). We continued corresponding through Alanna&apos;s New Zealand
            trip, and to Sebastian’s surprise, Alanna actually accepted his invitation of seeing an
            advanced screening of <i>Mad Max: Fury Road</i> the day after she landed in San
            Francisco. Our first real date involved ramen and the monsters known as kaiju.
          </p>
          <p>
            Since then, we&apos;ve traveled together both domestically and internationally.
            Sebastian takes the pictures of food, while Alanna makes grouchy faces until he&apos;s
            done. One of his favorite travel memories is seeing the Sydney zoo, Taronga, lit up with
            giant glowing creatures for the annual winter event, Vivid. One of her favorite travel
            memories is eating at two Michelin star hawker stalls in Singapore. They have also
            adopted an adorably mischevious black and white speckled rabbit whose full name is
            Curious George Seurat.
          </p>
        </div>
      </AboutUsFlex>
    </CenteredCards>
  </Layout>
);

export default About;
