import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Result = ({user,score}) => {
    const navigator = useNavigate();
   
    
    useEffect(()=>{
        if(!user){
        navigator("/home");
    }
  },[user]);
  return (
    <div>
     <h1>Your Quiz Result is:</h1> 
     <h2>Hello <span style={{
        textTransform:"uppercase"
     }}>{user}</span>, your score is {score}.</h2>

     <a href="/home">
        <button>Back to Home</button>
        </a>
    </div>
  )
}

export default Result

