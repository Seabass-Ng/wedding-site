import { AppBar, Container } from '@material-ui/core';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './header';
import GlobalStyles from '../lib/global-styles';
import NavTabs from './nav-tabs';
import PAGES from '../lib/pages-enum';

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
  activeTab?: PAGES;
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
    </Head>
    <GlobalStyles />
    <StyledContainer>
      <Header />
      <AppBar position="sticky">
        <NavTabs activeTab={activeTab} />
      </AppBar>
      <main>{children}</main>
    </StyledContainer>
    <StyledFooter>©{new Date().getFullYear()} Sebastian Ng</StyledFooter>
  </>
);

export default Layout;
