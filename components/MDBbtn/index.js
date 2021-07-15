import React, { useState } from 'react'
import styles from './index.module.scss'
import cn from 'classnames'

const MDBBtn = ({ className, children, dropdown, onSelect, selected, modal, ...rest}) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropDownClicked = (tag) => {
    if(onSelect) onSelect(tag)
    setShowDropdown(false)
  }
  return (
    <div className={cn( modal?"w-full":"", "wrapper " + dropdown?styles.dropdown: "", "flex items-center justify-center text-center")}>
      <button className={cn(className, modal?"w-full":"", "MDBbtn", (selected?modal?"blue_modal":"black":"outline"))}  onClick={() => setShowDropdown(!showDropdown)} {...rest}>
        {
          children
        }
      </button>
      { 
        dropdown &&
        <div className={cn(styles.dropdown_Content, showDropdown?styles.active:"")}>
          {
            ["tag1", "tag2", "tag3"].map( (tag, i) => (
              <li key={i} onClick={dropDownClicked}>
                {tag}
              </li>
            ))
          }
        </div>
      }
    </div>
  )
}

export default MDBBtn