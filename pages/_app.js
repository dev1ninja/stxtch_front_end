import React, { useEffect } from 'react';
import "../scss/style.scss";
import MainLayout from "../layout/MainLayout";
import '../styles/index.css'
import '../styles/global.css'
import '../assets/fonts/fonts.css'
import { store, wrapper } from "_redux/store";
import axios from 'axios'
import { customerActions } from '_redux/_actions'
import { useDispatch } from 'react-redux';


axios.interceptors.request.use((settings) => {
  // /api => localhost:8080/api
  if (settings.url.startsWith("/api"))
    // settings.url = "http://ec2-18-218-4-84.us-east-2.compute.amazonaws.com:8080" + settings.url.substr(4)
    settings.url = `http://${global.location?.hostname ?? "localhost"}:8080` + settings.url.substr(4)
  return settings
})

function MyApp({ Component, pageProps, customer }) {
  const dispatch = useDispatch()
  useEffect( () => {
    if(!customer) return
    dispatch({
      type: customerActions.types.get,
      payload: customer
    })
  }, [])

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>);
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let customer
  if( ctx.req ){
    const hostname = ctx.req.headers.host.split(":")[0];
    const resp = await axios.get("/api/customer",{ params: { hostname } })
    customer = resp.data
  }
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //Anything returned here can be accessed by the client
  return { Component, pageProps: pageProps, customer}
}

// export default MyApp;
export default wrapper.withRedux(MyApp);