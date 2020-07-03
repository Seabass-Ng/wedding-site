import React from 'react';
import Layout from '../components/layout';
import CenteredCards from '../components/centered-card';
import { PAGES } from '../components/nav-tabs';

const RSVP: React.FC = () => (
  <Layout activeTab={PAGES.RSVP}>
    <CenteredCards>Please come back later. We will complete this soon.</CenteredCards>
  </Layout>
);

export default RSVP;
