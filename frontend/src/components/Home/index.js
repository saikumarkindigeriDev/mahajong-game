import React from 'react' 
import { useState } from 'react'  

import { useNavigate } from 'react-router-dom';
import './index.css' 


const Home = () => { 


    const [name,setName]=useState('') 
    const naviagate=useNavigate()

    const changeName=e=>{
        setName(e.target.value)
    }

    const playGame=()=>{ 


        localStorage.setItem('name',name)

        if (name!==""){
            naviagate("/game")
        }else{
            alert("Enter Your Name")
        }

    }

  return (
    <div className='s-container'>
        <h1 className='main-heading'>React Tiles</h1> 
        <div className='box'>
            <h1 className='name-heading'>Enter Your Name</h1> 
            <input className='name' type="text" value={name} onChange={changeName} /> 
            <button className='button' type="button" onClick={playGame}>Play</button>
        </div>
    </div>
  )
}

export default Home