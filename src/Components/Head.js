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
        <div className='cursor-pointer w-1/2 z-10'>
        <p><i className="fa-solid fa-bars fa-lg cursor-pointer "></i> </p>
        </div>
        <div>
        <img  onClick={handleToggle}  className='w-32 -mt-9 pl-4 -z-10' src="./youtube-head-logo.webp" alt="logo"></img>
        </div>
      </div>

      <div className='col-span-10 pl-40'>
        <input className=' h-9 w-1/2 border border-gray-300 rounded-l-full p-3' type="text" placeholder='Search '></input>
        <button className=' h-9 w-24 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-300  '> 
            <i className="fa-solid fa-magnifying-glass fa-sm"></i>
            </button>
      </div >
        
      <div className='col-span-1'>
      <i className="fa-solid fa-user fa-lg flex justify-end mt-3"></i>

      </div>
    </div>
  )
}

export default Head
