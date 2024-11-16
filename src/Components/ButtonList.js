import React from 'react'
import Button from './Button'
import { list } from '../utils/constants'

const ButtonList = () => {
  const names= list;
  return (
    <div className='flex justify-center m-2'>
      {names.map((item)=><Button  key={item.name} name={item.name}/> )} 
    </div>
  )
}

export default ButtonList
