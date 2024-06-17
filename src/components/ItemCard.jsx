import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../itemContext";





function ItemCard({ name, price, id }) {

  const {handleAdd, handleRemove  } = useValue();
  

  // const handleAdd = () => {
  //   setTotal(total+price)
  //   setItem(item+1)
    
  // };

  // const handleRemove = () => {
  //   if(total > 0){
  //     setTotal((prevState) =>(prevState-price))
  //   }
  //   if(item > 0){
  //     setItem((prevState) =>(prevState-1))
  //   }
    
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({price, id, name})}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
