import React from 'react'

const Sidebar = () => {
  return (
    <div className=' col-span-1 shadow-xl p-6 '>
      <div className='border-b-2 border-gray-300'> 
      <h1 className=' py-2 '>Home</h1>
      <h1 className=' py-2 '>Shorts</h1>
      <h1 className='py-2 '>Subscriptions</h1>
      <h1 className=' py-2 mb-3 '>Youtube Music</h1> 
      </div>

      <div className='border-b-2 border-gray-300'> 
      <h1 className=' font-bold py-4 '>You </h1>
      <ul>
        <li className='py-2 '>History</li>
        <li className='py-2 '>Playlist</li>
        <li className='py-2 '>Your Videos</li>
        <li className='py-2 '>Your courses</li>
        <li className='py-2 '>Watch later</li>
        <li className='py-2 '>Liked Videos</li>
        <li className='py-2 '>Downloads</li>
      </ul>
      </div>


      <div>
      <h1 className='font-bold py-4 '>Subscriptions</h1>
      <ul >
        <li className='py-2 '>Music</li>
        <li className='py-2 '>Sports</li>
        <li className='py-2 '>Gaming</li>
        <li className='py-2 '>Movies</li>
      </ul>
      </div>


    </div>
  )
}

export default Sidebar
