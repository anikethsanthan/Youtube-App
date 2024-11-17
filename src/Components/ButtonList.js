import React from 'react'
import Button from './Button'
import { list } from '../utils/constants'

const ButtonList = () => {
  const names= list;
  return (
    <div className='flex justify-center m-2'>
      <BlackButton name="Adds"/>
      {names.map((item)=><Button  key={item.name} name={item.name}/> )} 
    </div>
  )
}

const BlackButton=({name})=>{
  return(
  <div className=' border-gray-400 border-r-2'>
    <Button name={name} />
  </div>)
}

export default ButtonList








