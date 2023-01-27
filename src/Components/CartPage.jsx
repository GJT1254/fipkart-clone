import React, { useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Header from './Header';



const CartPage = () => {
    const [cartProducts,setCartProducts]=useState();
    const router=useNavigate();
    
   
    useEffect(()=>{

        const cartProFromStorage = JSON.parse(localStorage.getItem("cartProducts"));
        if (cartProFromStorage){
            setCartProducts(cartProFromStorage);

        }else{
            toast.error("Product Not Found")

        }
        

    },[]);
    // useEffect(()=>{
    //     const isUserLogged=JSON.parse(localStorage.getItem("userData"));
    //     if(isUserLogged){
    //         router('/login')
    //     }
    // },[])

    function deleteProduct(e){

        const ProFromStorage=JSON.parse(localStorage.getItem("cartProducts"));
        var newArray=[];
        for(var i=0;i<ProFromStorage.length;i++){
            if(e.title != ProFromStorage[i].title){
                newArray.push(ProFromStorage[i]);
            }
        }
        localStorage.setItem("cartProducts",JSON.stringify(newArray))
        toast.success("Product Deleted");

    }






  return (
    <div>
        <Header/>
        <div id="cdiv">
        <div id="cartdiv">
           {cartProducts && cartProducts.map((e,i)=>(
            <div key={i} id="cartdiv1">
                <div id="cart">
                   <div>
                    <img src={e.image} alt="Movies Poster"/>
                   </div>
                   <div>
                   <h3>{e.title}</h3>
                   <p>${e.price}</p>
                  
                   </div>
                   <div>
                    <button onClick={()=>deleteProduct(e)}><i class="fa-solid fa-xmark"></i></button>
                   </div>
        






                </div>
                

            </div>

           ))}



        </div>
        <div id="rdiv">
            <h1>PRICE DETAILS</h1>

           




        </div>





        </div>


    </div>
  )
}

export default CartPage;