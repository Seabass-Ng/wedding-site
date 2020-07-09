import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import CenteredCards from '../components/centered-card';
import { PAGES } from '../components/nav-tabs';

const FrontPagePhoto = styled.div`
  width: 100%;
  img {
    border-radius: 4;
    display: block;
    width: 100%;
  }
`;

const Home: React.FC = () => (
  <Layout activeTab={PAGES.HOME}>
    <CenteredCards>
      <p>
        We plan on adhering to federal, state and local guidelines for holding gatherings at the
        time of the wedding. We ask in advance for your flexibility, understanding and grace as we
        navigate these turbulent times together.
      </p>
    </CenteredCards>
    <CenteredCards>
      <h2>The Wedding</h2>
      <p>
        Saturday, June 12th, 2021
        <br />
        5:00 PM - 11:00 PM
        <br />
        Unplugged, self-uniting ceremony, followed by drinks, feasting and dancing
      </p>
      <p>
        <a href="https://curiodyssey.org/">CuriOdessey Science Playground &amp; Zoo</a>
        <br />
        1651 Coyote Point Drive
        <br />
        San Mateo, CA 94401
      </p>
    </CenteredCards>
    <FrontPagePhoto>
      <img src="/images/full/Uluru.jpg" alt="Uluru" />
    </FrontPagePhoto>
    <CenteredCards>
      <blockquote>
        Allons! the road is before us! [...] <br />
        <br />
        Camerado, I give you my hand! <br />
        I give you my love more precious than money, <br />
        I give you myself before preaching or law; <br />
        Will you give me yourself? will you come travel with me? <br />
        Shall we stick by each other as long as we live? <br />
      </blockquote>
      - Excerpted from Walt Whitman&apos;s <i>Song of the Open Road </i>
    </CenteredCards>
  </Layout>
);

export default Home;
