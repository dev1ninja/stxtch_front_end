import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';
import Cross_icon from 'assets/images/cross.svg';
import svg_stroyUploaded from 'assets/images/storyUploaded.svg';
import { storyUploadActions } from '_redux/_actions/storyUpload.actions'
import { useDispatch, useSelector } from "react-redux";

function CompleteContent({ className, title, children, isStory, ...rest}){
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(0)
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  const btnClicked = (id) => {
    setSelected(id);
  }
  useEffect(() => {
    isStory && setTimeout(() => {
      dispatch(storyUploadActions.show_uploadContent(3))
    }, 2000);
  }, [])
  return (
    <div className={cn(styles.Content)}>
      <div className={cn(styles.Content_Content, "items-center justify-center")}>
        <div onClick={handleCloseClick} className={cn("flex justify-end")}>
          <img className={cn("cursor-pointer pt-6 pr-6")} src={ Cross_icon } alt="Menu" style={{width: "50px"}} />
        </div>
        <div className={cn(styles.Content_Title, "w-full flex flex-col pt-6 text-center justify-center items-center")}>
          <div className={cn("flex items-center justify-center text-center lg:pt-20", styles.Content_Svg_div)}>
            <img src={svg_stroyUploaded} />
          </div>
          <div className={cn(styles.Content_Title_text, "lg:pt-12 flex text-center justify-center items-center pt-8")}>
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteContent