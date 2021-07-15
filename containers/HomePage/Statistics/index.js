import React from 'react';
import icon_users from "assets/images/page1/users.svg";
import icon_hands from "assets/images/page1/hands.svg";
import classnames from 'classnames'
import styles from './index.module.scss'

function Statistics({storyTold}) {
  return (
    <div className="pl-6 pr-10 pb-10 mx-auto flex lg:flex-col lg:py-8 lg:w-8/12">
      <div className={classnames("flex flex-col justify-center lg:flex-row ", styles.statistics_item)}>
        <div className="w-14 lg:mx-8">
          <img src={icon_users} className="mx-auto pb-1"/>
        </div>
        <div className="lg:w-32">
          <div className={classnames(styles.number, 'text-center')}>{storyTold}</div>
          <div className={classnames(styles.description)}>Stories Told</div>
        </div>
      </div>
      <div className={classnames("flex flex-col justify-center lg:flex-row lg:pt-4 hidden", styles.statistics_item)}>
        <div className="w-14 lg:mx-8">
          <img src={icon_hands} className="mx-auto pb-1"/>
        </div>
        <div className="lg:w-32">
          {/* <div className={classnames(styles.number)}>{statistics["Affirmations_Given"].toLocaleString('en')}</div> */}
          <div className={classnames(styles.description)}>Affirma Given</div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;