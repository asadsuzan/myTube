import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

const VideoCard = ({item}) => {
  console.log(item)
  const {id,snippet} = item
  return (
    <div className="videoCard shadow-lg">
    {/* card media is here  */}
     <figure><img src={snippet?.thumbnails?.medium?.url}  alt={snippet?.channelTitle} className='img-fluid' /></figure>
    
     {/* card content  is here  */}
    <p className='fw-bold video-title'>{snippet?.title.slice(0,60)}</p>
    <span className='chenel-title'>{snippet?.channelTitle}</span> 
    <AiFillCheckCircle color='gray' size={15} className="ms-1"/>

    </div>
  )
}

export default VideoCard
