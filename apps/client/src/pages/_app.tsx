import { AppProps } from "next/app";
import Head from "next/head";

import {config} from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false;

import RootProvider from "../context/RootProvider";
import MainPageContainer from "../layout/MainPageContainer";
import Navbar from "../layout/Navbar";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RootProvider>
      <Head>
        <title>Hubsite</title>
      </Head>
      <Navbar />
      <MainPageContainer>
        <Component {...pageProps} />
      </MainPageContainer>
    </RootProvider>
  );
};

export default App;
