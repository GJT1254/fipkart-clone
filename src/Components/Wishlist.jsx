import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { toast, Toast } from 'react-hot-toast';
import Header from './Header';

const Wishlist = () => {

    const [wishlistProducts,setWishListProducts] = useState();

    useEffect(()=>{
      const proFromLocalStorageWhishlist = JSON.parse(localStorage.getItem("wishlistProducts"));
      setWishListProducts(proFromLocalStorageWhishlist);
      // console.log(proFromLocalStorageWhishlist,"proFromLocalStorageWhishlist")

    },[])

    function addToCart(e){
      const proArrayFromDb = JSON.parse(localStorage.getItem("cartProducts"))||[];
      proArrayFromDb.push(e)

      localStorage.setItem("cartProducts",JSON.stringify(proArrayFromDb));



      const proFromLocalStorageWhishlist = JSON.parse(localStorage.getItem("wishlistProducts"));
      var newArray=[];
      for(var i=0;i<proFromLocalStorageWhishlist.length;i++){
        if(e.title != proFromLocalStorageWhishlist[i].title){
          newArray.push(proFromLocalStorageWhishlist[i])
        }
      }

      localStorage.setItem("wishlistProducts",JSON.stringify(newArray));
      setWishListProducts(newArray);
      toast.success("Product Added to Cart !")
       }



    









  return (
<div>
  <Header/>
<h1>Wishlist</h1>
{wishlistProducts && wishlistProducts.map((e,i)=>(
  <div key={i}>
    <div>
    <img src={e.image} alt="Movies Poster"/>
  </div>

  <div>
  <h3>{e.title}</h3>
  <p>${e.price}</p>
               
  </div>
  <div>
  <button onClick={()=>addToCart(e)}>Add To Cart</button>

  </div>
  </div>

))}



</div>


    
    
  )
}

export default Wishlist