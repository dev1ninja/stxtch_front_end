import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';
import Cross_icon from 'assets/images/cross.svg';
import MDBBtn from 'components/MDBbtn'
import { storyUploadActions } from '_redux/_actions/storyUpload.actions'
import { useDispatch, useSelector } from "react-redux";

function SignContent(props){
  const [selected, setSelected] = useState(0)
  const dispatch = useDispatch()
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  const btnClicked = (id) => {
    setSelected(id);
  }
  return (
    <div className={cn(styles.Content)}>
      <div className={cn(styles.Content_Content, "items-center justify-center")}>
        <div onClick={handleCloseClick} className={cn("flex justify-end")}>
          <img className={cn("cursor-pointer pt-6 pr-6")} src={ Cross_icon } alt="Menu" style={{width: "50px"}} />
        </div>
        <div className={cn(styles.Content_Title, "w-full flex flex-col pt-6 text-center justify-center items-center")}>
          <div className={cn(styles.Content_Title_text, "lg:pt-12 pt-14 flex text-center justify-center items-center")}>
            Second, sign the digital release form.
          </div>
          <div className={cn("w-full flex flex-col items-center justify-center lg:pt-14 pt-12", styles.Content_Btn)}>
              <MDBBtn color="elegant" className={cn("black btn-radius-10 flex text-center items-center justify-center", styles.Content_btnProperty)} onClick={() => dispatch(storyUploadActions.show_uploadContent(4))} modal={true} selected={selected == 1} >
                <div className={cn("pl-7")}>Let’s get started!</div>
              </MDBBtn>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SignContent