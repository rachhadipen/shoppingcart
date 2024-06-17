import { createContext } from "react";
import { useState, useContext } from 'react';
import CartModal from "./components/cartModel";

export const itemcontext = createContext();


export function useValue(){
    const value = useContext(itemcontext)
    // console.log(value)
    return value;
}
export function CustomeItemContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);
    

    const handleAdd = (product) => {
        // console.log(product)
        const index = cart.findIndex((item)=> item.id === product.id);

        if(index == -1){
          setCart([...cart, {...product, quantity:1}]);
          console.log(cart)
          setTotal(total+product.price)
          
        }
        else{
          cart[index].quantity++;
          setCart(cart);
          console.log(cart)
          setTotal(total+cart[index].price)
          
        }
        setItem(item+1);
        
      };
    const resetHandle = ()=>{
      setTotal(0);
      setItem(0);
      setCart([])
    }
    const toggle = () =>{
      setShowCart(!showCart)
    }


    
    
      const handleRemove = (id) => {
        const index = cart.findIndex((item)=> item.id === id);
        if(index !== -1){
          cart[index].quantity--;
          setItem(item-1);
          setTotal(total-cart[index].price)
          if(cart[index].quantity === 0){
            cart.splice(index,1)
          }
         
        }
      
        setCart(cart);
        
        

        // if(total > 0){
        //   setTotal((prevState) =>(prevState-price))
        // }
        // if(item > 0){
        //   setItem((prevState) =>(prevState-1))
        // }
        
      };

    // console.log(children)
    return(
        <itemcontext.Provider value={{item,total, handleAdd, handleRemove, resetHandle, toggle, cart}}>
            {showCart && <CartModal toggle={toggle}/>}
            {children}
        </itemcontext.Provider>
    )
}