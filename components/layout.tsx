import { AppBar, Container } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import window from 'global/window';
import GlobalStyles from '../lib/global-styles';
import Header from './header';
import NavTabs from './nav-tabs';

const StyledContainer = styled(Container)`
  margin: 0 auto;
  min-height: calc(100vh - 28px);
  width: 1000px;
`;

const StyledFooter = styled.footer`
  margin: 5px 0;
  text-align: center;
`;

interface ILayout {
  children: React.ReactNode;
  activeTab?: string;
}

if (process.env.NODE_ENV === 'production' && window) {
  const httpTokens = /^http:\/\/(.*)$/.exec(window.location?.href);
  if (httpTokens) {
    window.location.replace(`https://${httpTokens[1]}`);
  }
}

const Layout: React.FC<ILayout> = ({ activeTab, children }: ILayout) => (
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
    <StyledContainer>
      <Header />
      <AppBar position="sticky">
        <NavTabs activeTab={activeTab} />
      </AppBar>
      <main>{children}</main>
    </StyledContainer>
    <StyledFooter>
      ©{new Date().getFullYear()} <a href="https://github.com/seabass-ng">Sebastian Ng</a> &mdash;
      Background Image from{' '}
      <a href="https://pixabay.com/users/mariamichelle-165491/">Michelle Maria</a>
    </StyledFooter>
  </>
);

Layout.defaultProps = {
  activeTab: null,
};

export default Layout;
