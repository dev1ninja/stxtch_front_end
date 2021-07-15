import Head from "next/head";

import { Footer, Header } from "../blockPages";

import Modal from 'components/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { modalActions } from "_redux/_actions";

const MainLayout = ({ children }) => {
  const show_modal = useSelector(state => state.modal.modal_ID)
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>STXTCH</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="stxtch test" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <Modal show={show_modal} onClose={() => dispatch(modalActions.hide_modal())} />
    </>
  );
};

export default MainLayout;
