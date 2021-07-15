import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';
import Cross_icon from 'assets/images/cross.svg';
import MDBBtn from 'components/MDBbtn'
import { useDispatch } from 'react-redux';
import { modalActions } from '_redux/_actions'

const Modal = ({ show, onClose, ...rest }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0)
  const btnClicked = (id) => {
    setSelected(id);
    dispatch(modalActions.show_modal(id));
  }

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  
  return (show == 4 && (
    <div className={cn(styles.Modal)}>
      <div onClick={handleCloseClick} className={cn(styles.Modal_Bg)}></div>
      <div className={cn(styles.Modal_Content, "items-center justify-center")}>
        <div onClick={handleCloseClick} className={cn("flex justify-end")}>
          <img className={cn("cursor-pointer pt-6 pr-6")} src={ Cross_icon } alt="Menu" style={{width: "50px"}} />
        </div>
        <div className={cn(styles.Modal_Title, "w-full pt-6 lg:text-center")}>
          <div className={cn(styles.Modal_Title_text)}>
            Flag this Content
          </div>
          <div className={cn(styles.Modal_Title_reason)}>
            Why are you flagging this content?
          </div>
        </div>
        <div className={cn(styles.Modal_Body, "lg:pt-16 pt-6 w-full pb-32 lg:px-20")}>
          <div className="flex w-full lg:flex-row flex-col">
            <div className={cn("lg:mr-2.5 lg:w-1/2 w-full flex flex-col items-center justify-center", styles.Modal_Btn)}>
              <MDBBtn color="elegant" className={cn("black btn-radius-10")} onClick={() => btnClicked(5)} modal={true} selected={selected == 5} style={{height:"106px", letterSpacing:"normal"}}>
                This story is inaccurate
              </MDBBtn>
            </div>
            <div className={cn("lg:ml-2.5 lg:w-1/2 w-full flex flex-col items-center justify-center", styles.Modal_Btn)}>
              <MDBBtn color="elegant" className={cn("black btn-radius-10")} onClick={() => btnClicked(6)} modal={true} selected={selected == 6} style={{height:"106px", letterSpacing:"normal"}}>
                I don't want it to be public
              </MDBBtn>
            </div>
          </div>

          <div className="flex w-full lg:flex-row flex-col lg:pt-4">
            <div className={cn("lg:mr-2.5 w-full lg:w-1/2 flex flex-col items-center justify-center", styles.Modal_Btn)}>
              <MDBBtn color="elegant" className={cn("black btn-radius-10")} onClick={() => btnClicked(7)} modal={true} selected={selected == 7} style={{height:"106px", letterSpacing:"normal"}}>
                This story is inappropriate
              </MDBBtn>
            </div>
            <div className={cn("lg:ml-2.5 w-full lg:w-1/2 flex flex-col items-center justify-center", styles.Modal_Btn)}> 
              <MDBBtn color="elegant" className={cn("black btn-radius-10")} onClick={() => btnClicked(8)} modal={true} selected={selected == 8} style={{height:"106px", letterSpacing:"normal"}}>
                For another reason
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )) || (show == 5 && (
    <form name = "flagform" className={cn(styles.Modal)}>
      <div onClick={handleCloseClick} className={cn(styles.Modal_Bg)}></div>
      <div className={cn(styles.Modal_Content, "items-center justify-center")}>
        <div onClick={handleCloseClick} className={cn("flex justify-end")}>
          <img className={cn("cursor-pointer pt-6 pr-6")} src={ Cross_icon } alt="Menu" style={{width: "50px"}} />
        </div>
        <div className={cn(styles.Modal_Title, "w-full pt-6 lg:text-center")}>
          <div className={cn(styles.Modal_Title_text)}>
            Modify Your Story
          </div>
          <div className={cn(styles.Modal_Title_reason)}>
            Enter modifications below
          </div>
        </div>
        <div className={cn(styles.Modal_Body, "lg:pt-16 pt-6 w-full pb-32 lg:px-8")}>
          <div className="flex w-full lg:flex-row flex-col lg:pb-4">
            <div className={cn("lg:mr-2.5 lg:w-1/2 w-full flex flex-col items-left justify-left", styles.Flag1_input_div)}>
              <label for="name" className={cn(styles.Flag1_common_label)}>NAME</label>
              <input className={cn("w-full", styles.Flag1_common_input, styles.Flag1_no_outline)} type="text" placeholder="Zane Goodman" name="name" />
            </div>
            <div className={cn("lg:ml-2.5 lg:w-1/2 w-full flex flex-col items-left justify-left", styles.Flag1_input_div)}>
              <label for="handle" className={cn(styles.Flag1_common_label)}>HANDLE</label>
              <input className={cn("w-full", styles.Flag1_common_input, styles.Flag1_no_outline)}  type="text" placeholder="@ZaneGoodman" name="handle" />
            </div>
          </div>

          <div className="flex w-full flex-col pb-14">
            <div className={cn("w-full flex flex-col items-left justify-left lg:pb-4", styles.Flag1_input_div)}>
              <label for="email" className={cn(styles.Flag1_common_label)}>EMAIL</label>
              <input className={cn("w-full", styles.Flag1_common_input, styles.Flag1_no_outline)}  type="text" placeholder="ZaneGoodman@verizon.com" name="email" />
            </div>
            <div className={cn("w-full flex flex-col items-left justify-left", styles.Flag1_input_div)}> 
              <label for="modify" className={cn(styles.Flag1_common_label)}>MODIFICATIONS</label>
              <textarea className={cn("w-full", styles.Flag1_textarea)}  placeholder="Enter modifications to your story here." name="modify" />
            </div>
          </div>

          <div className="flex w-full flex-col">
            <div className={cn("w-full flex flex-col items-center justify-center", styles.Flag1_Btn)}>
              <input className={cn("cursor-pointer", styles.Flag1_submit)} type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </form>
  )) || (show == 6 && (
    <form name = "flagform" className={cn(styles.Modal)}>
      <div onClick={handleCloseClick} className={cn(styles.Modal_Bg)}></div>
      <div className={cn(styles.Modal_Content, "items-center justify-center")}>
        <div onClick={handleCloseClick} className={cn("flex justify-end")}>
          <img className={cn("cursor-pointer pt-6 pr-6")} src={ Cross_icon } alt="Menu" style={{width: "50px"}} />
        </div>
        <div className={cn(styles.Modal_Title, "w-full pt-6 lg:text-center")}>
          <div className={cn(styles.Modal_Title_text)}>
            Make your Story Private
          </div>
          <div className={cn(styles.Modal_Title_reason)}>
            Fill out the information below
          </div>
        </div>
        <div className={cn(styles.Modal_Body, "lg:pt-16 pt-6 w-full pb-32 lg:px-8")}>
          <div className="flex w-full lg:flex-row flex-col lg:pb-4">
            <div className={cn("lg:mr-2.5 lg:w-1/2 w-full flex flex-col items-left justify-left", styles.Flag1_input_div)}>
              <label for="name" className={cn(styles.Flag1_common_label)}>NAME</label>
              <input className={cn("w-full", styles.Flag1_common_input, styles.Flag1_no_outline)} type="text" placeholder="Zane Goodman" name="name" />
            </div>
            <div className={cn("lg:ml-2.5 lg:w-1/2 w-full flex flex-col items-left justify-left", styles.Flag1_input_div)}>
              <label for="handle" className={cn(styles.Flag1_common_label)}>HANDLE</label>
              <input className={cn("w-full", styles.Flag1_common_input, styles.Flag1_no_outline)}  type="text" placeholder="@ZaneGoodman" name="handle" />
            </div>
          </div>

          <div className="flex w-full flex-col pb-14">
            <div className={cn("w-full flex flex-col items-left justify-left lg:pb-4", styles.Flag1_input_div)}>
              <label for="email" className={cn(styles.Flag1_common_label)}>EMAIL</label>
              <input className={cn("w-full", styles.Flag1_common_input, styles.Flag1_no_outline)}  type="text" placeholder="ZaneGoodman@verizon.com" name="email" />
            </div>
            <div className={cn("w-full flex flex-col items-left justify-left lg:pb-4", styles.Flag1_input_div)}>
              <label for="reason" className={cn(styles.Flag1_common_label)}>REASON</label>
              <select className={cn("w-full", styles.Flag1_common_input, styles.Flag1_no_outline)} placeholder="Select a reason" name="reason">
                <option value="" disabled selected hidden>Select a reason</option>
                <option value="reason1">Don't like</option>
                <option value="reason2">It's mine</option>
                <option value="reason3">You don't need to know</option>
              </select>
            </div>
            <div className={cn("w-full flex flex-col items-left justify-left", styles.Flag1_input_div)}> 
              <label for="modify" className={cn(styles.Flag1_common_label)}>COMMENTS</label>
              <textarea className={cn("w-full", styles.Flag1_textarea)}  placeholder="Enter any additional comments" name="modify" />
            </div>
          </div>

          <div className="flex w-full flex-col">
            <div className={cn("w-full flex flex-col items-center justify-center", styles.Flag1_Btn)}>
              <input className={cn("cursor-pointer", styles.Flag1_submit)} type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </form>
  )) || (show == 7 && (
    <form name = "flagform" className={cn(styles.Modal)}>
      <div onClick={handleCloseClick} className={cn(styles.Modal_Bg)}></div>
      <div className={cn(styles.Modal_Content, "items-center justify-center")}>
        <div onClick={handleCloseClick} className={cn("flex justify-end")}>
          <img className={cn("cursor-pointer pt-6 pr-6")} src={ Cross_icon } alt="Menu" style={{width: "50px"}} />
        </div>
        <div className={cn(styles.Modal_Title, "w-full pt-6 lg:text-center")}>
          <div className={cn(styles.Modal_Title_text)}>
            Why is this innappropriate?
          </div>
          <div className={cn(styles.Modal_Title_reason)}>
            Select a reason below
          </div>
        </div>
        <div className={cn(styles.Modal_Body, "lg:pt-16 pt-6 w-full pb-32 lg:px-8")}>
          <div className="flex w-full flex-col pb-14">
            <div className={cn("w-full flex flex-col items-left justify-left lg:pb-4", styles.Flag1_input_div)}>
              <label for="reason" className={cn(styles.Flag1_common_label)}>REASON</label>
              <select className={cn("w-full", styles.Flag1_common_input, styles.Flag1_no_outline)} placeholder="Select a reason" name="reason">
                <option value="" disabled selected hidden>Select a reason</option>
                <option value="reason1">Don't like</option>
                <option value="reason2">It's mine</option>
                <option value="reason3">You don't need to know</option>
              </select>
            </div>
            <div className={cn("w-full flex flex-col items-left justify-left", styles.Flag1_input_div)}> 
              <label for="modify" className={cn(styles.Flag1_common_label)}>COMMENTS</label>
              <textarea className={cn("w-full", styles.Flag1_textarea)}  placeholder="Enter any additional comments" name="modify" />
            </div>
          </div>

          <div className="flex w-full flex-col">
            <div className={cn("w-full flex flex-col items-center justify-center", styles.Flag1_Btn)}>
              <input className={cn("cursor-pointer", styles.Flag1_submit)} type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </form>
  )) || (show == 8 && (
    <form name = "flagform" className={cn(styles.Modal)}>
      <div onClick={handleCloseClick} className={cn(styles.Modal_Bg)}></div>
      <div className={cn(styles.Modal_Content, "items-center justify-center")}>
        <div onClick={handleCloseClick} className={cn("flex justify-end")}>
          <img className={cn("cursor-pointer pt-6 pr-6")} src={ Cross_icon } alt="Menu" style={{width: "50px"}} />
        </div>
        <div className={cn(styles.Modal_Title, "w-full pt-6 lg:text-center")}>
          <div className={cn(styles.Modal_Title_text)}>
            Tell us More
          </div>
          <div className={cn(styles.Modal_Title_reason)}>
            Why would you like to flag this content?
          </div>
        </div>
        <div className={cn(styles.Modal_Body, "lg:pt-16 pt-6 w-full pb-32 lg:px-8")}>
          <div className="flex w-full lg:flex-row flex-col lg:pb-4">
            <div className={cn("lg:mr-2.5 lg:w-1/2 w-full flex flex-col items-left justify-left", styles.Flag1_input_div)}>
              <label for="name" className={cn(styles.Flag1_common_label)}>NAME</label>
              <input className={cn("w-full", styles.Flag1_common_input, styles.Flag1_no_outline)} type="text" placeholder="Zane Goodman" name="name" />
            </div>
            <div className={cn("lg:ml-2.5 lg:w-1/2 w-full flex flex-col items-left justify-left", styles.Flag1_input_div)}>
              <label for="handle" className={cn(styles.Flag1_common_label)}>HANDLE</label>
              <input className={cn("w-full", styles.Flag1_common_input, styles.Flag1_no_outline)}  type="text" placeholder="@ZaneGoodman" name="handle" />
            </div>
          </div>

          <div className="flex w-full flex-col pb-14">
            <div className={cn("w-full flex flex-col items-left justify-left lg:pb-4", styles.Flag1_input_div)}>
              <label for="reason" className={cn(styles.Flag1_common_label)}>REASON</label>
              <select className={cn("w-full", styles.Flag1_common_input, styles.Flag1_no_outline)} placeholder="Select a reason" name="reason">
                <option value="" disabled selected hidden>Select a reason</option>
                <option value="reason1">Don't like</option>
                <option value="reason2">It's mine</option>
                <option value="reason3">You don't need to know</option>
              </select>
            </div>
            <div className={cn("w-full flex flex-col items-left justify-left", styles.Flag1_input_div)}> 
              <label for="modify" className={cn(styles.Flag1_common_label)}>COMMENTS</label>
              <textarea className={cn("w-full", styles.Flag1_textarea)}  placeholder="Enter any additional comments" name="modify" />
            </div>
          </div>

          <div className="flex w-full flex-col">
            <div className={cn("w-full flex flex-col items-center justify-center", styles.Flag1_Btn)}>
              <input className={cn("cursor-pointer", styles.Flag1_submit)} type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </form>
  ))
}

export default Modal