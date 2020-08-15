import { AppBar, Container, Tabs } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../lib/global-styles';
import Header, { StyledHeader } from './header';
import NavTabs from './nav-tabs';

const StyledFooter = styled.footer`
  margin: 5px 0;
  text-align: center;
`;

const StyledContainer = styled(Container)`
  margin: 0 auto;
  min-height: 100vh;
  width: 1000px;
  ${({ $withinPage }) =>
    $withinPage &&
    `
    display: flex !important;
    flex-flow: column;
    height: 100vh;
    ${StyledHeader}, ${Tabs}, ${StyledFooter} {
      flex: 0 1 auto;
    }
    main {
      flex: 1 1 auto;
    }
  `}
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

interface ILayout {
  children: React.ReactNode;
  activeTab?: string;
  withinPage?: boolean;
}

const MobileAppBar = styled.div`
  width: 100%;
  @media (min-width: 641px) {
    display: none;
  }
`;

const DesktopAppBar = styled.div`
  width: 100%;
  @media (max-width: 640px) {
    display: none;
  }
`;

const Layout: React.FC<ILayout> = ({ activeTab, children, withinPage }: ILayout) => (
  <>
    <Head key="layout">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Norican:400&display=swap"
      />
      <meta name="robots" content="noindex" />
    </Head>
    <GlobalStyles />
    <StyledContainer $withinPage={withinPage}>
      <Header />
      <MobileAppBar>
        <AppBar position="sticky">
          <NavTabs activeTab={activeTab} scrollable />
        </AppBar>
      </MobileAppBar>
      <DesktopAppBar>
        <AppBar position="sticky">
          <NavTabs activeTab={activeTab} scrollable={false} />
        </AppBar>
      </DesktopAppBar>
      <main>{children}</main>
      <StyledFooter>
        ©{new Date().getFullYear()} <a href="https://github.com/seabass-ng">Sebastian Ng</a> &mdash;
        Background Image from{' '}
        <a href="https://pixabay.com/users/mariamichelle-165491/">Michelle Maria</a>
      </StyledFooter>
    </StyledContainer>
  </>
);

Layout.defaultProps = {
  activeTab: null,
  withinPage: false,
};

export default Layout;
