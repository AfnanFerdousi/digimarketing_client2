// import { SessionProvider } from "next-auth/react"
import "../styles/globals.css";
import Head from "next/head";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps: { ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo.png" type="image/x-icon" />
      </Head>
      {/* <SessionProvider session={session}> */}
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer />
      {/* </SessionProvider> */}
    </>
  );
}