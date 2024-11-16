import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'


const WatchPage = () => {
    const [searchParams]=useSearchParams();
    console.log(searchParams.get("v"))
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(closeMenu());
    },[]);
    
  return (
    <div>
      <h1>Hello Watch page</h1>
      
    </div>
  )
}

export default WatchPage
