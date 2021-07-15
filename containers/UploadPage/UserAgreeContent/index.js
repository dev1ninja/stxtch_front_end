import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';
import Cross_icon from 'assets/images/cross.svg';
import MDBBtn from 'components/MDBbtn'
import { storyUploadActions } from '_redux/_actions/storyUpload.actions'
import { useDispatch, useSelector } from "react-redux";

function UserAgreeContent(props){
  const dispatch = useDispatch()
  const contentId = useSelector(state => state.storyUploadContent.uploadContent_ID)
  const [selected, setSelected] = useState(0)
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
          <div className={cn(styles.Content_Title_text, "lg:pt-12 flex text-center justify-center items-center")}>
            User Agreement
          </div>
          <div className={cn("lg:w-3/5 w-full flex flex-col items-left justify-left lg:pt-8 overflow-auto overflow-x-hidden", styles.Content_input_div)}>
            You understand and agree that by uploading video and photo content, you warrant and represent that: (i) you are the owner (or authorized representative of the owner) of the rights granted herein and that the consent of no other person or entity is required to post the material, (ii) that your material does not violate or infringe any rights or interests 
            You understand and agree that by uploading video and photo content, you warrant and represent that: (i) you are the owner (or authorized representative of the owner) of the rights granted herein and that the consent of no other person or entity is required to post the material, (ii) that your material does not violate or infringe any rights or interests 
            <div className={cn("lg:w-3/5 w-full flex flex-col pt-5", styles.Content_input_div)}>
              <div className={cn("flex flex-row items-center justify-left text-center")}>
                <MDBBtn color="elegant" className={cn("btn-radius-5 flex items-center justify-center", styles.Content_btnProperty)} onClick={() => dispatch(storyUploadActions.show_uploadContent(contentId+1))} >
                  <div className={cn("")}>A</div>
                </MDBBtn>
                <b>I accept</b>
              </div>
              <div className={cn("flex flex-row items-center justify-left text-center pt-4")}>
                <MDBBtn color="elegant" className={cn("btn-radius-5 flex items-center justify-center", styles.Content_btnProperty)} >
                  <div className={cn("")}>B</div>
                </MDBBtn>
                <b>I don't accept</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAgreeContent