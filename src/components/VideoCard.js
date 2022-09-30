import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

const VideoCard = ({videoDetails}) => {

  return (
    <div className="videoCard shadow-lg">
    {/* card media is here  */}
     <figure><img src={videoDetails?.snippet?.thumbnails?.medium?.url}  alt={videoDetails?.snippet?.channelTitle} className='img-fluid' /></figure>
    
     {/* card content  is here  */}
    <p className='fw-bold video-title'>{videoDetails?.snippet?.title.slice(0,60)}</p>
    <span className='chenel-title'>{videoDetails?.snippet?.channelTitle}</span> 
    <AiFillCheckCircle color='gray' size={15} className="ms-1"/>

    </div>
  )
}

export default VideoCard
