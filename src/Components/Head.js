import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux';
import { Youtube_Search_Api } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions, setSuggestion]=useState([ ]);
  const [showSuggestion, setShowSuggestions]=useState(false);
  const dispatch=useDispatch();

  const searchCache=useSelector((store)=>store.search);
  
  useEffect(()=>{
   const timer=setTimeout(()=>{
    if(searchCache[searchQuery]){
      setSuggestion(searchCache[searchQuery])
    }else{
      getSearchSuggestion()
    }
  },200) ;

   return ()=>{
     clearTimeout(timer);
   }
  },[searchQuery]);



  const getSearchSuggestion= async ()=>{
    const data = await fetch(Youtube_Search_Api + searchQuery);
    const json= await data.json();
    setSuggestion(json[1])
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  }

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
        <div>
        <input 
         value={searchQuery}
         onChange={(e)=>setSearchQuery(e.target.value)}
         onFocus={()=>setShowSuggestions(true)}
         onBlur={()=>setShowSuggestions(false)}
         className=' h-9 w-1/2 border border-gray-300 rounded-l-full p-3' 
         type="text" 
         placeholder='Search '></input>
         
        <button className=' h-9 w-24 border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-300  '> 
            <i className="fa-solid fa-magnifying-glass fa-sm"></i>
            </button>
            {showSuggestion && searchQuery &&
            <div className=' bg-white fixed py-2 px-5 w-[35rem] rounded-lg'>
              <ul>
                {suggestions.map((item)=> 
                <li key={item} className=' border-gray-200 border-b-2 py-2 hover:bg-gray-100'>
                   <i className="fa-solid fa-magnifying-glass "></i> {item}
                    </li>)}

              </ul>
            </div>
            }
            </div>
      </div >
        
      <div className='col-span-1'>
      <i className="fa-solid fa-user fa-lg flex justify-end mt-3"></i>

      </div>
    </div>
  )
}

export default Head
