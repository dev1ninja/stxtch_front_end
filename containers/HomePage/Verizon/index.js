import React from 'react';
import { useSelector } from "react-redux";
import styles from './index.module.scss';
import verizon_logo from "assets/images/verizon.svg";

function Verizon() {
  
  const customer = useSelector(state => state.customer)
  return (
    <div className="pb-10">
      {/* <img className="cursor-pointer logo pl-3" src={verizon_logo} alt="verizon_logo" /> */}
      <div className={styles.verizon_text}>
        {customer?.summary}
      </div>
    </div>
  );
}

export default Verizon;