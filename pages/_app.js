import React from 'react';
import Head from 'next/head';
import '../styles/Global.css';
import appReducer from  "../src/store/Reducers/index";
import { Provider } from "react-redux";
import { createStore } from "redux";

function MyApp({ Component, pageProps }) {
  const store = createStore(appReducer)
  return (
    <div>
      <Head>
        <title>Tipestry | Home</title>
        <link rel="icon" href="/static/img/tipcoin.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={ store }>
      <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;