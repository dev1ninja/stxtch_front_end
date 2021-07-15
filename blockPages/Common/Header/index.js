import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import Logo from "assets/images/logo.svg";
import Menu_icon from "assets/images/menu.svg";
import Cross_icon from 'assets/images/cross_1.svg'
import Back_icon from 'assets/images/left.svg'
import Menu from '../Menu'
import styles from './index.module.scss'
import classnames from 'classnames'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { headerActions } from '_redux/_actions'

const Header = (props) => {
  
  const dispatch = useDispatch()
  const [menuOpened, setMenuOpened] = useState(false)
  const { title, bg, sticky, divider, back, dialog, display, white, about, className} = useSelector(state => state.header)
  const customer = useSelector(state => state.customer)

  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
  }

  const router = useRouter()
  const current_story = useSelector( state => state.story.current )
  const goBack = () => {
    // router.push("/groupPage/" + current_story.groupId)
    router.back()
  }

  const goBackAbout = (e) => {
    e.preventDefault();
  }
  
  let navClassName = classnames(className, "top-nav");
  navClassName = classnames(navClassName, menuOpened && styles.openedMenu)
  navClassName = classnames(navClassName, !menuOpened && sticky && styles.sticky)
  navClassName = classnames(navClassName, bg && styles.whiteheader)
  navClassName = classnames(navClassName, dialog && styles.dialogNav)
  navClassName = classnames(navClassName, !display && "hidden")
  //navClassName = classnames(navClassName, white && styles.white)

  return (
    <nav className={navClassName}>
      <div className={classnames("flex items-start xl:items-center justify-between ", styles.nav, dialog?"lg:hidden":"")}>
        <div className="flex relative nav-logo h-7 items-center">
          {
            back && 
              <img onClick={goBack} className="cursor-pointer" src={ Back_icon } style={{height:"14px", paddingRight:"0.5rem"}} alt="Back" />
          }
          {
            title && 
              <div className="text-lg overflow-ellipsis	overflow-hidden whitespace-pre" style={{maxWidth: "70vw"}}>{title}</div>
          }
          {
            !title &&
              <Link href="/"><img className="cursor-pointer logo" src={customer?.whiteLabelLogo ?? Logo} alt="Logo" /></Link>
          }
        </div>
        <div className={classnames("flex items-end self-center", !bg && white && styles.white)} onClick={toggleMenu}>
          <img className={classnames("cursor-pointer", dialog?"lg:hidden":"")} src={ menuOpened ? Cross_icon :Menu_icon} alt="Menu" style={{width: "35px"}} />
          <img className={classnames("cursor-pointer hidden", dialog?"lg:block":"")} src={ menuOpened || dialog ? Cross_icon :Menu_icon} alt="Menu" style={{width: "35px"}} onClick={dialog? goBack: ()=>{}}/>
        </div>
      </div>
      <div className={classnames("items-start xl:items-center justify-between hidden z-10", styles.nav, dialog?"lg:flex":"", styles.dialogHeader)}>
        <div className="flex relative nav-logo h-7 items-center">
          <Link href="/"><img className="cursor-pointer logo" src={customer?.whiteLabelLogo ?? Logo} alt="Logo" /></Link>
        </div>
        <div className="flex items-end self-center" onClick={about?goBackAbout:goBack}>
          <img className={classnames("cursor-pointer")} src={ Cross_icon } alt="Menu" style={{width: "35px"}}/>
        </div>
      </div>
      { !dialog && divider && !menuOpened && !bg && <div className={classnames("divider", !bg && white && styles.white)}></div>}
      { menuOpened && <Menu onMenuClicked={toggleMenu}/> }
    </nav>
  );
}

export default Header