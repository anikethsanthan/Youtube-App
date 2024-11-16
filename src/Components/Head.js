import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux';

const Head = () => {

  const dispatch=useDispatch();
  const handleToggle=()=>{
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-3 m-4 shadow-lg'>

      <div className='col-span-1 justify-evenly  '>
        <p><i className="fa-solid fa-bars fa-lg "></i> </p>
        <img  onClick={handleToggle}  className='w-32 -mt-9 pl-4 ' src="./youtube-head-logo.webp" alt="logo"></img>
      </div>

      <div className='col-span-10 pl-40'>
        <input className=' h-9 w-1/2 border border-gray-300 rounded-l-full p-3' type="text" placeholder='Search '></input>
        <button className=' h-9 w-24 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-300  '> 
            <i className="fa-solid fa-magnifying-glass fa-sm"></i>
            </button>
      </div >
        
      <div className='col-span-1'>
      <i className="fa-regular fa-bell fa-lg "></i>
      <i className="fa-solid fa-user fa-lg"></i>

      </div>
    </div>
  )
}

export default Head
