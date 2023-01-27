import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Header = () => {
  const [userName,setUserName]= useState();
  const router=useNavigate();

  useEffect(()=>{
    const dUser=JSON.parse(localStorage.getItem("userData"));
    if(dUser){
      setUserName(dUser.name);

    }
  },[])

  function logout(){
    localStorage.removeItem("userData");
    localStorage.removeItem("isUserLogged");
    setUserName("");
    toast.success("Logout Successful");

  }
  return (
    <div id="header">
      <div id="navbar">

      <div><h3><i>Flipkart</i></h3></div>
      <div><input type="text"placeholder='Search for products,brands and more'/><i class="fa-solid fa-magnifying-glass"></i></div>
      <div><button onClick={()=>router("/Login")} >Login</button></div>
     <div><span>Become a Seller</span></div>
     <div>
      <select>
        
       <option>More</option>
       <option>Notification preference</option>
       <option>Advertisement</option>
       <option>Download App</option>
      </select>
     </div>
     <div>{userName ? userName : "Profile"}</div>
     <div><button onClick={()=>router("/CartPage")}>Cart</button>
      <i class="fa-solid fa-cart-shopping"></i></div>
     <div onClick={logout}>{userName ?"Logout":""}</div>
     <div id="dB"><button onClick={()=>router('/Product')}>Product</button></div>
     <div onClick={()=>router("/Wishlist")}><button>Wishlist<i class="fa-regular fa-heart"></i></button></div>
     



     </div>





    </div>
  )
}

export default Header