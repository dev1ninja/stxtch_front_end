import React, { useEffect, useRef } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames'
import svg_char from 'assets/images/storyPage/char.svg'

function Story({ story }) {

  return (
    <div className={classnames(styles.Story, "pb-10 px-6 pt-0 whitespace-pre-line bg-common relative flex-grow lg:rounded-tl-2xl")}>
      <div className={classnames(styles.divider, "divider pb-8 absolute")} />
      <div className="flex pl-4 pt-8 relative">
        <div className="hidden lg:flex lg:w-1/5" style={{ fontSize: "22px" }}>
          {/* {story.group?.name} */}
          Dear World,
        </div>
        <div className="lg:w-4/5 pb-24">
          {/* <div className="hidden lg:block pb-8" style={{fontSize: "34px"}}>
            {story.summary}
          </div> */}
          <div className="text-lg">
            {story.full}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;