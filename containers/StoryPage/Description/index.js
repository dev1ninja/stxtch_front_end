import React, { useEffect, useRef } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames'
import svg_char from 'assets/images/storyPage/char.svg'

function Description({story}) {

  return (
    <div className={classnames(styles.Description, "pb-10 px-4 lg:pr-2 flex flex-col")}>
      <div className={classnames("px-6 lg:pt-8 lg:font-italic lg:pr-2", styles.title)}>
        {story.title}
      </div>
      <div className="pt-2 pb-2 px-4">
        <img src={svg_char}/>
      </div>
      <div className={classnames("px-6 lg:pr-2 pt-2 whitespace-pre-line", styles.text)}>
        <div className="lg:hidden">
          {story.group?.name}
        </div>
        <div className="" style={{fontSize: "34px"}}>
          {story.summary}
        </div>
      </div>
    </div>
  );
}

export default Description;