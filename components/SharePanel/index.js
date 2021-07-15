import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';
import Cross_icon from 'assets/images/cross.svg';
import MDBBtn from 'components/MDBbtn'
import { useDispatch } from 'react-redux';
import { modalActions } from '_redux/_actions'
import facebook_icon from 'assets/images/facebook.svg'
import instagram_icon from 'assets/images/instagram.svg'
import twitter_icon from 'assets/images/twitter.svg'

const SharePanel = () => {

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  const customer = useSelector(state => state.customer)

  return (
    <div className={cn(styles.SharePanel)}>
      <div onClick={handleCloseClick} className={cn("justify-end")}>
        <img className={cn("cursor-pointer pt-6 pr-6")} src={ Cross_icon } alt="Menu" style={{width: "50px"}} />
      </div>
      <div>
        Share Story
      </div>
      <div>
        
      </div>
      <div className={styles.SharePanel_social + " absolute w-full bottom-0"}>
        Share to Social
        <Link href={customer?.facebookUrl}>
          <img className={'cursor-pointer'} src={facebook_icon} />
        </Link>
        <Link href={customer?.instagramUrl}>
          <img className={'cursor-pointer'} src={instagram_icon} />
        </Link>
        <Link href={customer?.twitterUrl}>
          <img className={'cursor-pointer'} src={twitter_icon} />
        </Link>
    </div>
    </div>
  );
}

export default SharePanel;