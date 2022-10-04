import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Loader from './Loader'

const VideoCard = ({videoDetails}) => {
  if(!videoDetails) return <Loader/>
  

  return (
    <div className="videoCard shadow-lg">
    {/* card media is here  */}
  <Link to={`/video/${videoDetails?.id?.videoId}`}><figure><img src={videoDetails?.snippet?.thumbnails?.medium?.url}  alt={videoDetails?.snippet?.channelTitle} className='w-100' /></figure></Link>
    
     {/* card content  is here  */}
    <Link to={`/video/${videoDetails?.id?.videoId}`}><p className='fw-bold video-title'>{videoDetails?.snippet?.title.slice(0,60)}</p></Link>
    
    <Link to={`/chenel/${videoDetails?.snippet?.channelId}`}>
    <span className='chenel-title'>{videoDetails?.snippet?.channelTitle}</span> 
    <AiFillCheckCircle color='gray' size={15} className="ms-1"/>
    </Link>

    </div>
  )
}

export default VideoCard
