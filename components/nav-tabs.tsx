import { Tabs, Tab, useMediaQuery } from '@material-ui/core';
import React from 'react';
import Router from 'next/router';

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

const handleChange = (ev, value) => Router.push(routes[value].url);

interface INavTabs {
  activeTab: string;
}

const NavTabs: React.FC<INavTabs> = ({ activeTab }: INavTabs) => {
  const makeTabScrollable = useMediaQuery('(max-width: 640px)'); // 640px is the size of total tab width in scrollable mode.
  return (
    <Tabs
      variant={makeTabScrollable ? 'scrollable' : 'fullWidth'}
      scrollButtons="auto"
      aria-label="nav tabs"
      onChange={handleChange}
      value={activeTab}
    >
      {Object.keys(routes).map(value => (
        <Tab
          component="a"
          href={routes[value].url}
          label={routes[value].label}
          value={value}
          key={value}
        />
      ))}
    </Tabs>
  );
};

export default NavTabs;
