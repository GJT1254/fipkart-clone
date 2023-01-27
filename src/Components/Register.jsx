import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [userData,setUserData] = useState();
    const router = useNavigate();

    useEffect(()=>{
        console.log("userData updated !");
        if(userData){
            const toStoreUserData =JSON.stringify(userData);
            localStorage.setItem("userData",toStoreUserData);
            toast.success("Submitted");
      
            
        }
    },[userData]);

    useEffect(()=>{
        const localStorageData =JSON.parse(localStorage.getItem("isUserLogged"))
        if(localStorageData){
          console.log("user logged in already")
          router('/');
        }
    
      },[])

    function submitHandle(e){
        e.preventDefault();
        setUserData({name:"Gayatri",email:"Gayatri@gmail.com",password:"gjt@abc"});
       
        
    }
    console.log(userData,"userData is here");

  return (
    <div id="firstDiv">
        <h1>Register</h1>
        <form onSubmit={submitHandle}>
            <label>Name</label><br/>
            <input type="text" placeholder='Enter your Name...'/><br/>
            <label>Email</label><br/>
            <input type="email" placeholder='Enter your Email...'/><br/>
            <label>Password</label><br/>
            <input type="password" placeholder='Enter your Password...'/>
            <input  style={{marginLeft:"70px"}}type="submit"/><br/>
            
        </form>
        <a href="/login">AlreadyLogin ? Login</a>
    </div>
  )
}

export default Register;