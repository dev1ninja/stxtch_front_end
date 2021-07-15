import React, { useEffect, useState } from 'react';
import Image from 'components/ImageDescriptedIn'
import styles from './index.module.scss'
import classnames from 'classnames'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';

const ImageCollectionForDesktop = ({images}) => {
  

  if(images.length < 8) {
    return <div>...</div>
  }
  return (
    <div className={classnames("flex w-full pb-4", styles.padding)}>
      <div className="flex w-1/2">
        <div className="w-1/2 flex flex-col justify-center px-1">
          <Image {...images[0]} className="" ratio={0.85}/>
          <Image {...images[1]} className="pt-2" ratio={0.98}/>
        </div>
        <div className="w-1/2 flex flex-col justify-center px-1">
          <Image {...images[2]} ratio={0.85}/>
          <Image {...images[3]} className="pt-2" ratio={0.7}/>
        </div>
      </div>
      <div className="flex w-1/2 flex-col">
        <div className={styles.main_image}>
          <Image {...images[4]} ratio={1.8}/>
        </div>
        <div className="flex">
          <div className="w-1/2 px-1">
            <Image {...images[5]} ratio={1}/>
          </div>
          <div className="w-1/2 px-1">
            <Image {...images[6]} ratio={1}/>
          </div>
        </div>
        <div className="pt-2">
          <Image {...images[7]} ratio={1.6}/>
        </div>
      </div>
    </div>
  )
}

const ImageCollectionForMobile = ({images}) => {
  

  if(images.length < 6) {
    return <div>...</div>
  }
  return (
    <div className={classnames("flex flex-col w-full mt-12", styles.padding)}>
      <div className="flex flex-row">
        <div className="w-1/2">
          <Image className="w-4/5 ml-auto" {...images[0]} ratio={0.93}/>
        </div>
        <div className="w-1/2 -mt-12">
          <Image className="w-5/6 mx-auto" {...images[1]} ratio={0.99}/>
        </div>
      </div>
      <div className="w-full -mt-8 z-1">
        <Image {...images[2]} ratio={1.6}/>
      </div>
      <div className={classnames("flex flex-row -mt-8", styles.zindex)}>
        <div className="w-1/2">
          <Image className="w-11/12 ml-auto" {...images[3]} ratio={0.7}/>
        </div>
        <div className="w-1/2 mt-12">
          <Image className="w-5/6 mx-auto" {...images[4]} ratio={1}/>
        </div>
      </div>
    </div>
  )
}

const ImageCollection = ({ homeStories }) => {
  
  console.log("This is homestories", homeStories)
  return (
    <div>
      <div className="flex flex-wrap 2xl:p-0 pb-20 pt-4 justify-around lg:hidden">
        {
          <ImageCollectionForMobile images={homeStories}/>
        }
      </div>
      <div className="hidden lg:flex">
        {
          <ImageCollectionForDesktop images={homeStories}/>
        }
      </div>
    </div>
  );
}

export default ImageCollection;