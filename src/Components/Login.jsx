import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [userLogInData,setUserLogInData] =useState();
  console.log(userLogInData,"userLogInData");
  const router=useNavigate();

  useEffect(()=>{
    if(userLogInData){
      const registerdData =JSON.parse(localStorage.getItem("userData"));
      console.log(registerdData,"registerdData is here");
     
      if( registerdData){
      
        if(registerdData.email === userLogInData.email && registerdData.password === userLogInData.password){
         
          localStorage.setItem("isUserLogged","true")
         
          router("/");
         
          toast.success("Login Successful !!")

        }else{
         
          toast.error("Wrong Credentials !!")
        }
      }else{
       
        toast.error("User Not Found")
      }
    }

  },[userLogInData]);

  useEffect(()=>{
    const localStorageData =JSON.parse(localStorage.getItem("isUserLogged"))
    if(localStorageData){
      console.log("user logged in already")
      router('/');
    }

  },[])

  const handleSubmit=(e)=>{
    e.preventDefault();
   
    setUserLogInData({email:"Gayatri@gmail.com",password:"gjt@abc"})



  }

  return (
    <div id="secondDiv">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
      <label>Email</label><br/>
      <input type="email" placeholder='Enter your Email....'/><br/>
      <label>Password</label><br/>
      <input type="password"placeholder='Enter your Password....'/><br/>
      <input style={{marginLeft:"10px"}} type="submit"/><br/>
      
      </form>
      <a href="/register">Register First</a>
    </div>
  )
}

export default Login