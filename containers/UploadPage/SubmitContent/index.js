import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';
import Cross_icon from 'assets/images/cross.svg';
import MDBBtn from 'components/MDBbtn'
import svg_tick from 'assets/images/uploadPage/tick.svg';
import svg_enter from 'assets/images/uploadPage/enter.svg';
import { storyUploadActions } from '_redux/_actions/storyUpload.actions'
import { useDispatch, useSelector } from "react-redux";

function SubmitContent({ className, title, children, ...rest}){
  const dispatch = useDispatch()
  const contentId = useSelector(state => state.storyUploadContent.uploadContent_ID)
  const [isOk, setIsOk] = useState(false)
  const [isValue, setValue] = useState("")
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  const btnClicked = () => {
    setValue("")
    setIsOk(false)
    dispatch(storyUploadActions.show_uploadContent(contentId+1))
  }
  const onChange = (event) => {
    let newQuery = event.target.value
    setValue(newQuery)
    if(newQuery){
      setIsOk(true)
    }
    if(!newQuery){
      setIsOk(false)
    }
  }
  useEffect(() => {
    
  }, [])

  return (
    <div name="firstname" className={cn(styles.Content)}>
      <div className={cn(styles.Content_Content, "items-center justify-center")}>
        <div onClick={handleCloseClick} className={cn("flex justify-end")}>
          <img className={cn("cursor-pointer pt-6 pr-6")} src={ Cross_icon } alt="Menu" style={{width: "50px"}} />
        </div>
        <div className={cn(styles.Content_Title, "w-full flex flex-col pt-6 text-center justify-center items-center")}>
          <div className={cn(styles.Content_Title_text, "lg:pt-12 pt-16 flex text-center justify-center items-center")}>
            {title}
          </div>
          <div className={cn("lg:w-3/5 w-full flex flex-col items-left justify-left lg:pt-24 pt-16", styles.Content_input_div)}>
            <input className={cn("w-full", styles.Content_common_input, styles.Content_no_outline)} value={isValue} onChange={onChange} type="text" placeholder="Type your answer here..." name="name" />
          </div>
          <div className={cn("lg:w-3/5 w-full flex flex-row pt-5", styles.Content_input_div, isOk?"":"hidden")}>
            <MDBBtn color="elegant" className={cn("btn-radius-5 flex items-center justify-center", styles.Content_btnProperty)} onClick={btnClicked} >
              <div className={cn("")}>OK</div>
              <img className={cn(styles.Content_Svg)} src={svg_tick} /> 
            </MDBBtn>
            <MDBBtn color="elegant" className={cn("btn-radius-5 flex items-center justify-center", styles.Content_btnProperty, styles.Content_enter)}  >
              <div className={cn("")}>press Enter</div>
              <img className={cn(styles.Content_Svg)} src={svg_enter} /> 
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitContent