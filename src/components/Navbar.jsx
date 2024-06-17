// import React, { useContext } from "react";
import styles from "../styles/Total.module.css";

import {  useValue } from "../itemContext";


function Navbar( ) {
 const  value  = useValue();
 const {resetHandle, toggle} = useValue();

  // console.log(value)
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: {value.item}</h1>
      <button className={styles.itemButton} onClick={toggle} >
          Cart
        </button>
      <button className={styles.itemButton} onClick={() => resetHandle( )}>
          Reset
        </button>
    </div>
  );
}

export default Navbar;
