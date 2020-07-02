import React from 'react';
import Layout from '../components/layout';
import CenteredCards from '../components/centered-card';
import PAGES from '../lib/pages-enum';

const About: React.FC = () => (
  <Layout activeTab={PAGES.ABOUT}>
    <h1>About</h1>
    <CenteredCards>
      <h2>How We Met</h2>
      <p>
        We met at a mutual friend’s dinner birthday party of Korean food and soju in a watermelon
        (Hi Heather!). We continued corresponding through Alanna’s New Zealand trip, and to
        Sebastian’s surprise, Alanna actually accepted his invitation of seeing an advanced
        screening <i>Mad Max: Fury Road</i> the day after she landed in San Francisco.
      </p>
      <p>
        Since then, we’ve traveled together both domestically and internationally and adopted a
        black and white speckled rabbit whose full name is Curious George Seurat.
      </p>
    </CenteredCards>
  </Layout>
);

export default About;
