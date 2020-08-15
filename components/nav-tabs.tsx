import { Tabs, Tab } from '@material-ui/core';
import React, { memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const PAGES = {
  HOME: 'HOME',
  ABOUT: 'ABOUT',
  FAQ: 'FAQ',
  PHOTO: 'PHOTO',
  RSVP: 'RSVP',
};

const routes = {
  [PAGES.HOME]: {
    label: 'Home',
    url: '/',
  },
  [PAGES.ABOUT]: {
    label: 'About Us',
    url: '/about',
  },
  [PAGES.FAQ]: {
    label: 'FAQs',
    url: '/faq',
  },
  [PAGES.PHOTO]: {
    label: 'Photos',
    url: '/photos',
  },
  [PAGES.RSVP]: {
    label: 'RSVP',
    url: '/rsvp',
  },
};

interface INavTabs {
  activeTab: string;
  scrollable: boolean;
}

const NavTabs: React.FC<INavTabs> = memo(
  ({ activeTab, scrollable }: INavTabs) => {
    const router = useRouter();
    const handleChange = (ev, value) => router.push(routes[value].url);
    return (
      <Tabs
        variant={scrollable ? 'scrollable' : 'fullWidth'}
        scrollButtons="auto"
        aria-label="nav tabs"
        onChange={handleChange}
        value={activeTab}
      >
        {Object.keys(routes).map(value => (
          <Tab label={routes[value].label} value={value} key={value} />
        ))}
      </Tabs>
    );
  },
  (prevProps, nextProps) =>
    prevProps.activeTab === nextProps.activeTab && prevProps.scrollable === nextProps.scrollable,
);

export default NavTabs;
