import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Header from './Header';

const Product = () => {
  const [movies,setMovies] = useState();
  const router=useNavigate();

  useEffect(()=>{

    async function gettingData(){
      const {data}=await axios.get("https://fakestoreapi.com/products");
      console.log(data,"data is here");
      setMovies(data);
    }
    gettingData();

  },[]);

  function addToCart(e){
    console.log(e,'e From jsx')
    const proFromLocalStorage=JSON.parse(localStorage.getItem("cartProducts"))|| [];
    proFromLocalStorage .push(e);
    localStorage.setItem("cartProducts",JSON.stringify( proFromLocalStorage))
    toast.success("Product Added to Cart");

 }
  
 function addToWishlist(e){
  // console.log(e,"e from wishlist")
  const proFromWishlist = JSON.parse(localStorage.getItem("wishlistProducts"))||[]
  proFromWishlist.push(e);

  localStorage.setItem("wishlistProducts",JSON.stringify (proFromWishlist));
  toast.success("Products store in Wishlist");

 }







  return (
    <div>
      <Header/>
      
    
      
      <div id="Profirstdiv">
        <div id="Profirstdiv1">
          <div><h1>Filters</h1></div>
          <div>
            <h4>Categories</h4>
            </div>
            <div>
            <ul>
           <li><p>Mobile</p></li> 
           <li><p>Home Appliances</p></li>
          <li><p>Electronics</p></li>  
          <li><p>Accessories</p></li>
          <li><p>Fashion</p></li>
            </ul>
           </div>
           <div>
            <h3>Customer Ratings</h3>
            <div id="in"><input type="radio"></input>
            <input type="radio"></input>
            <input type="radio"></input>
            <input type="radio"></input>
            <input type="radio"></input>
            <h4>5<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></h4>
            </div>
            <div>
              <h4>Price</h4>
              <div id="div1">
                <div>
                <select>
                  <option>Min</option>
                  <option>Rs.1000</option>
                  <option>Rs.2000</option>
                  <option>Rs.3000</option>
                  <option>Rs.4000</option>
                  </select>
                  </div>
                  <div>to Rs.5000</div>

              </div>
            </div>
            
           </div>
          
          
          
          
        </div>
        <div id="Profirstdiv2">
          {movies && movies.map((e,i)=>(
            <div key={i} id='topDiv'>
              <div id="prodiv">
                <div id='left'>
                <img src={e.image} alt="image"/>
                </div>
                
                <div id='right'>
                  <h3>{e.title}</h3>
                 <p>${e.price}</p>
                 
                 <div>
                  <button onClick={()=>addToCart(e)}>Buy</button>
                  </div>
                  <div>
                  <button onClick={()=>addToWishlist(e)}>Wishlist<i class="fa-regular fa-heart"></i></button>
                </div>

                <div>
                  <h4>75% off</h4>
                </div>



                </div>
               












              </div>






            </div>







          ))}



        </div>
      </div>
      
        
     
    </div>
  )
}

export default Product