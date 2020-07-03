import Head from 'next/head';
import NextApp from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: 'green',
};
export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.remove();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head key="app">
          <link
            rel="stylesheet"
            href="https://unpkg.com/@brainhubeu/react-carousel@1.10.62-cdn/lib/style.css"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
