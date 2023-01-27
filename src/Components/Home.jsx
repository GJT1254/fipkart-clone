import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';


const Home = () => {
  const [name,setName]= useState("");
  const [products,setproducts]=useState([]);
  const router=useNavigate();

  useEffect(()=>{
    var userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData,"userData");

    if(userData){
      setName(userData.name)
      setproducts(userData.name,"userData.name here")
    }else{
      router("/login");

    }

  },[]);
      
     
      async function getData(){
        const {data}=await axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies");
        console.log(data,"data is here")
      }

      return (
     <div>
      <Header/>
      <div id="div"style={{display:"flex"}}>
      <div>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"/>
        <h5 onClick={()=>router('/Product')}>Grocery</h5>
      </div>

      <div>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"/>
        <h5 onClick={()=>router('/Product')}>Mobile</h5>
      </div>

      <div>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"/>
        <h5 onClick={()=>router('/Product')}>Fashion</h5>
      </div>

      <div>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"/>
        <h5 onClick={()=>router('/Product')}>Electronics</h5>
      </div>

      <div>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"/>
        <h5 onClick={()=>router('/Product')}>Home</h5>
      </div>

      <div>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"/>
        <h5>Appliances</h5>
      </div>

     

      <div>
        <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"/>
        <h5 onClick={()=>router('/Product')}>Beauty Toys</h5>
      </div>

      <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"/>
        <h5 onClick={()=>router('/Product')}>Two Whellers</h5>
      </div>


  </div>

  <div id="img">
    <div>
  <img src="data:image/jpeg;base64,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"/>
  <h5>intel</h5>
  </div>
  <div>
 <img src="https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70"/>
 <h5>Monitor</h5>
 </div>
 <div>
 <img src="https://rukminim1.flixcart.com/image/200/200/krtjgcw0/headphone/d/9/g/au-mh501-maono-original-imag5j35rffkwpac.jpeg?q=70"/>
 <h5>Head-phone</h5>
 </div>
 <div>
 <img src="https://rukminim1.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70"/>
 <h5>Cycle</h5>
 </div>
 <div>
 <img src="https://rukminim1.flixcart.com/image/200/200/ke1pnrk0-0/watch/j/l/0/f-tm519-timor-original-imafutgyfsstzhav.jpeg?q=70"/>
 <h5>Wrist-Watch</h5>
 </div>
 <div>
 
 <img src="https://rukminim1.flixcart.com/image/200/200/l2f20sw0/shopsy-hand-messenger-bag/b/4/n/stylish-women-shoulder-bag-shoper-1red-hobo-khatushyam-original-imagdrmucazmpztg.jpeg?q=70"/>
 <h5>Hand Bags</h5>
 </div>
 </div>










    

     
    </div>
  )
}

export default Home;