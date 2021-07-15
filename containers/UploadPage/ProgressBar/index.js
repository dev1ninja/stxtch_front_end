import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';

function ProgressBar(props){
  const {completed} = props;
  return (
    <div className={cn("flex flex-col text-center text-white fixed lg:bottom-10 bottom-24")}>
      <div className={cn(styles.container, "")}> 
        <div className={cn(styles.filter, "")} style={{width: `${completed}%`}}></div>
      </div>
      <div>
        {`${completed}% complete`}
      </div>
    </div>
  );
}

export default ProgressBar