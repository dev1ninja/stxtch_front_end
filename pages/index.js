import React, { useEffect, useRef } from 'react';
import styles from './index.module.scss';
import MDBBtn from 'components/MDBbtn'
import ImageCollection from 'containers/HomePage/ImageCollection';
import Verizon from 'containers/HomePage/Verizon';
import Statistics from 'containers/HomePage/Statistics'
import SearchGroup from 'containers/HomePage/SearchGroup';
import FeaturedGroup from 'containers/HomePage/FeaturedGroup'
import { groupActions, customerActions } from '_redux/_actions'
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames'
import Head from 'next/dist/next-server/lib/head';
import Description from 'containers/GroupPage/Description';

// THIS IS HOMEPAGE
function HomePage({ homeStories }) {

  const dispatch = useDispatch()
  const searchGroup = useRef()
  const customer = useSelector(state => state.customer)
  console.log("this is customer", customer)
  const storyTold = customer.count;

  useEffect(() => {
    if (!customer.id) return
    dispatch(groupActions.get(customer.id))
  }, [customer.id])

  const exploreStories = () => {
    const offsetSearchGroup = searchGroup.current.offsetTop
    window.scrollTo({ top: offsetSearchGroup })
  }

  return (
    <div className="flex flex-grow flex-col">
      <Head>
        <title>{customer.name}</title>
        <meta
          key="description"
          name="description"
          content={customer.description}
        />
        <link rel="icon" href={customer.favicon} />
      </Head>
      <div className={styles.screen1}></div>
      {/* <div className="divider"></div> */}
      <div className={classnames("mt-8 lg:w-1/2  lg:px-8 xl:px-12 2xl:px-16", styles.sloganbox)}>
        <div className={classnames("px-4 m-auto lg:text-4xl xl:text-5xl 2xl:text-6xl", styles.slogan)}>
          {customer?.tagline}
        </div>
        <MDBBtn color="elegant" className="black btn-radius-10 ml-5 mt-4" onClick={exploreStories}>
          explore stories
        </MDBBtn>
      </div>
      <div className="lg:px-8 xl:px-12 2xl:px-16 w-full">
        <ImageCollection homeStories={homeStories} />
      </div>
      <div className=" lg:px-8 xl:px-12 2xl:px-16" style={{ background: "whitesmoke" }}>
        <div className="flex flex-col lg:flex-row lg:pt-12">
          <Verizon />
          <Statistics storyTold={storyTold} />
        </div>
        <SearchGroup ref={searchGroup}>
          <FeaturedGroup />
        </SearchGroup>
        {/* <FeaturedGroup /> */}
        {/* <div className="divider border-grey"></div> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

HomePage.getInitialProps = async ({ store, req }) => {

  let hostname
  if (req) {
    hostname = req.headers.host.split(':')[0]
  }
  else {
    hostname = location.hostname
  }
  store.dispatch(customerActions.get(hostname))

  const res = await fetch(`http://${hostname}:8080/homeStories`)
  const data = await res.json()
  const homeStories = data.map(each => ({ ...each, ...each.story }))
  console.log("this is homeStories", homeStories)
  console.log("store.state", store.getState())
  return { homeStories }
}

export default HomePage;