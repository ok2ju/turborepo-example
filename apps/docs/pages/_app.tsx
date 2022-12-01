import "../styles/globals.css";
// import "@te/core/styles.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { nav, menu } from "../constants/routes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout nav={nav} menu={menu}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
