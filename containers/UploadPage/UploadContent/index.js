import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';
import Cross_icon from 'assets/images/cross.svg';
import MDBBtn from 'components/MDBbtn'
import svg_camera from 'assets/images/camera.svg';
import svg_camera_blue from 'assets/images/camera-blue.svg';
import svg_upload from 'assets/images/upload.svg';
import svg_upload_blue from 'assets/images/upload-blue.svg';
import { storyUploadActions } from '_redux/_actions/storyUpload.actions'
import { useDispatch, useSelector } from "react-redux";

function UploadContent(props){
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(0)
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  const btnClicked = (id) => {
    setSelected(id);
    dispatch(storyUploadActions.show_uploadContent(2))
  }
  return (
    <div className={cn(styles.Content)}>
      <div className={cn(styles.Content_Content, "items-center justify-center")}>
        <div onClick={handleCloseClick} className={cn("flex justify-end")}>
          <img className={cn("cursor-pointer pt-6 pr-6")} src={ Cross_icon } alt="Menu" style={{width: "50px"}} />
        </div>
        <div className={cn(styles.Content_Title, "w-full pt-6 text-center")}>
          <div className={cn(styles.Content_Title_text, "")}>
            First, upload your story
          </div>
          <div className={cn(styles.Content_Title_reason, "lg:px-24 px-12 text-center")}>
            Choose a method below to submit your video.
          </div>
        </div>
        <div className={cn(styles.Content_Body, "pt-4 w-full px-12")}>
            <div className={cn("w-full flex flex-col items-center justify-center", styles.Content_Btn)}>
              <MDBBtn color="elegant" className={cn("black btn-radius-10 flex items-center justify-center", styles.Content_btnProperty)} onClick={() => btnClicked(1)} modal={true} selected={selected == 1} >
                <img className={cn(styles.Content_Svg)} src={selected == 1 ? svg_camera_blue : svg_camera} /> 
                <div className={cn("pl-7")}>Record your story</div>
              </MDBBtn>
            </div>
            <div className={cn("w-full flex flex-col items-center justify-center lg:pt-6 pt-4", styles.Content_Btn)}>
              <MDBBtn color="elegant" className={cn("black btn-radius-10 flex items-center justify-center", styles.Content_btnProperty)} onClick={() => btnClicked(2)} modal={true} selected={selected == 2} >
                <img className={cn(styles.Content_Svg)} src={selected == 2 ? svg_upload_blue : svg_upload} /> 
                <div className={cn("pl-7")}>Upload your file</div>
              </MDBBtn>
            </div>
        </div>
      </div>
    </div>
  );
}

export default UploadContent