import React, { useEffect, useState } from "react";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";


export const CartContext = React.createContext()

export const CustomProvider = ({children}) => {

    const [items,setItems] = useState([]);
    const [totalCount, setTotalCount] = useState (0);
    const [totalPrice, setTotalPrice] = useState (0);
    const [userState, setUserState] = useState (false);

    useEffect(()=>{
    setTotalPrice(Cost())
    setTotalCount(totalItems())
    },[items])


    function addItem(item, quantity){
        let cartCompra = {item,quantity}
        let cartAux = []
        if(isInCart(item.dato.id)){
            cartCompra = items.find(element=>element.item.dato.id === item.dato.id)
            //Modificio la "cantidad" que quiero comprar, esa cantidad es independiente del array "items"
            cartCompra.quantity = cartCompra.quantity + quantity
            discountStockFirebase(cartCompra)
            cartAux = [...items]
        }
        else{
            discountStockFirebase(cartCompra)
            cartAux = [cartCompra, ...items]
        }

        setItems(cartAux)
    }

    function isInCart(id){
        return items && items.some(element => element.item.dato.id === id)
    }

    function removeItem(itemID){
        let cartAux = items.find(element=>element.item.dato.id===itemID)
        restaurarStockFirebase(cartAux)
        cartAux = items.filter(element=>element.item.dato.id!==itemID) 
        setItems(cartAux)
    }

    function clear(){
        setItems([])
    }

    function Cost (){
        const precioAux = items.reduce((acc,element)=>{
            return acc = acc + (element.item.dato.price*element.quantity);
        },0);
        return precioAux;
    }

    function totalItems(){
        const precioAux = items.reduce((acc,element)=>{
            return acc = acc + element.quantity;
        },0);
        return precioAux;
    }

    function discountStockFirebase (itemToDiscount){
        const db = getFirestore()
        const itemDoc = doc(db,"items",`${itemToDiscount.item.dato.id}`)
        getDoc(itemDoc).then((copiaDeDatos)=>{
            let nuevoStock = copiaDeDatos.data().stock - itemToDiscount.quantity
            updateDoc(itemDoc,{stock: nuevoStock})
           });
        }

     function restaurarStockFirebase (itemToRestoreStock){
         const db = getFirestore()
         const itemDoc = doc(db,"items",`${itemToRestoreStock.item.dato.id}`)
         getDoc(itemDoc).then((copiaDeDatos)=>{
             let nuevoStock = copiaDeDatos.data().stock + itemToRestoreStock.quantity
             updateDoc(itemDoc,{stock: nuevoStock})
            });
        }

        function logUser(user) {
            if(user)
                setUserState(user)
            else
                setUserState(false)
        }


    return(
        <CartContext.Provider value={[addItem,removeItem,clear,isInCart,items,totalPrice,totalCount,userState,logUser]}>
            {children}
        </CartContext.Provider>
    )
}


