import React from "react";
import styles from '../styles/CartModel.module.css'
import { useValue } from "../itemContext";


 function CartModal() {
  const {cart, total, resetHandle, toggle} = useValue();
  return (
    <>
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle} >
        Close
      </div>
      <div className={styles.clearButton} onClick={resetHandle} >
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((item)=>{
          return(
            <div className={styles.cartCard} key={item.id}>
                <h1>{item.name}</h1>
                <h1>{item.quantity * item.price}</h1>
                <h1>x{item.quantity}</h1>
            </div>
          )
        })}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>${total}</div>
      </div>
    </div>
    </>
  );
}

export default CartModal;


