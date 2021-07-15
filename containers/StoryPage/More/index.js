import React, { useEffect, useRef, useState, useMemo } from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import svg_msg from 'assets/images/storyPage/msg.svg'
import svg_share from 'assets/images/storyPage/share.svg'
import svg_shop from 'assets/images/storyPage/shop.svg'
import svg_flag from 'assets/images/storyPage/flag.svg'
import svg_copy from 'assets/images/storyPage/copy.svg'
import RoundImage from 'components/RoundImage'
import MDBBtn from 'components/MDBbtn'
import Modal from 'components/Modal'
import { modalActions } from '_redux/_actions'
import { sharePanelActions } from '_redux/_actions'
import { useDispatch, useSelector } from 'react-redux'
import SquareImage from 'components/SquareImage'
import Link from 'next/dist/client/link'

import facebook_icon from 'assets/images/facebook_share.svg'
import instagram_icon from 'assets/images/instagram_share.svg'
import twitter_icon from 'assets/images/twitter_share.svg'
import Cross_icon from 'assets/images/cross.svg';

function More({ story, className }) {
  const dispatch = useDispatch()
  const customer = useSelector(state => state.customer)
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  const [share, setShare] = useState(false);

  const facebookUrl = () => {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`;
  };
  const twitterUrl = () => {
    return `https://twitter.com/share?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(story.summary)}`;
  };

  const openShare = (link) => {
    let left = Math.round(window.screen.width / 2 - 640 / 2);
    let top = Math.round(window.screen.height / 2 - 480 / 2);
    const window_config = `width=${640},height=${480},left=${left},top=${top}`;

    window.open(
      link,
      "Share this story",
      `${window_config},toolbar=no,menubar=no,scrollbars=no`
    );
  };
  const copyToClipboard = () => {
    var textField = document.createElement('textarea')
    textField.innerText = window.location.href
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  };

  return (
    <div className={classnames(className, styles.More, "pb-10 px-6 pt-12 whitespace-pre-line flex flex-col items-center justify-center lg:rounded-tr-2xl")}>
      <div className={classnames(styles.portrait)} style={{ backgroundImage: `url(${_.get(story, "media[0].url")})` }}>
      </div>

      <div className="pt-2 font-bold text-sm">
        @{story.user?.email.split("@")[0]}
      </div>

      <div className="pt-2 font-bold text-sm">
        {story.user?.firstName + " " + story.user?.lastName}
      </div>

      <div className="font-light text-sm">
        Specialist at Verizon
      </div>

      {/* <div className="pt-2 font-bold text-sm">
          {(story.user?.socialUrl)}
        </div> */}

      <div className="pt-10 w-full">

        {!share && <div className="flex w-full">
          <div className={classnames(styles.box, " w-1/2 flex flex-col items-center justify-center")}
            style={{ backgroundColor: "white", color: "#94a9ea" }}>
            <img src={svg_msg} />
            <div className="pt-1">
              affirm
            </div>
          </div>
          <div className={classnames(styles.box, "ml-1 w-1/2 flex flex-col items-center justify-center cursor-pointer")}
            style={{ backgroundColor: "white", color: "#304A9A" }} onClick={() => setShare(true)}>
            <img src={svg_share} />
            <div className="pt-1">
              share
            </div>
          </div>

        </div>}
        {!share && <div className="flex w-full pt-1">
          <div className={classnames(styles.box, " w-1/2 flex flex-col items-center justify-center")}
            style={{ backgroundColor: "white", color: "#94a9ea" }}>
            <img src={svg_shop} />
            <div className="pt-1">
              artifacts
            </div>
          </div>
          <div className={classnames(styles.box, "ml-1 w-1/2 flex flex-col items-center justify-center cursor-pointer")}
            style={{ backgroundColor: "white", color: "#304A9A" }} onClick={() => dispatch(modalActions.show_modal(4))}>
            <img src={svg_flag} />
            <div className="pt-1">
              flag
            </div>
          </div>
        </div>
        }

        {share && <div className="flex flex-col">
          <div className={classnames("items-center justify-center p-4", styles.Content)}>
            <div onClick={() => setShare(false)} className={classnames("flex justify-end")}>
              <img className={classnames("cursor-pointer")} src={Cross_icon} alt="Menu" style={{ width: "14px" }} />
            </div>
            <div className={classnames("justify-left", styles.share_title)}>
              Share Story
            </div>
            <div className={classnames("w-full items-center flex flex-row", styles.share_url)}>
              <input type="text" value={window.location.href} readOnly className={classnames(styles.share_url_path, "p-1")} />
              <div className={classnames("cursor-pointer", styles.share_url_clip)} onClick={copyToClipboard}>
                <img className={classnames("w-8")} src={svg_copy} />
              </div>
            </div>
            <div className={classnames(styles.share_social)}>
              Share to Social
            </div>
            <div className={classnames(styles.social)}>
              <div >
                <img className={'cursor-pointer'} src={facebook_icon} onClick={() => openShare(facebookUrl())} />
              </div>
              <div >
                <img className={'cursor-pointer'} src={instagram_icon} />
              </div>
              <div >
                <img className={'cursor-pointer'} src={twitter_icon} onClick={() => openShare(twitterUrl())} />
              </div>
            </div>
          </div>
        </div>
        }

        <div className="flex flex-col">
          <div className={classnames(styles.images, "pt-4 w-full flex")}>
            <SquareImage src="/images/storyPage/PS_ex1.JPG" className={classnames("w-1/2", styles.paddings)} fullscreenOnClick={true} />
            <SquareImage src="/images/storyPage/PS_ex2.JPG" className={classnames("w-1/2 ml-1", styles.paddings)} fullscreenOnClick={true} />
          </div>
          <div className={classnames(styles.images, "w-full flex pt-1")} >
            <SquareImage src="/images/storyPage/PS_ex3.JPG" className={classnames("w-1/2", styles.paddings)} fullscreenOnClick={true} />
            {/* <SquareImage src="/images/storyPage/4.svg" className={classnames("w-1/2 ml-1", styles.paddings)} fullscreenOnClick={true} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default More;