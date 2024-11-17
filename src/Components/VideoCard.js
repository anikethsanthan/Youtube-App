import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const{channelTitle,thumbnails,title}=snippet;
  return (
    <div className='p-2 m-2 w-80 h-full shadow-xl rounded-xl overflow-x-auto' >
    <img  className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail"></img> 
     <div>
   
    <p>{title}</p>
   
    <p className=' text-sm font-extralight text-gray-700'>{channelTitle}</p>
    <p className=' text-sm font-extralight'>{statistics.viewCount} views</p>
    </div> 
    
    </div>
  )
}

export default VideoCard
