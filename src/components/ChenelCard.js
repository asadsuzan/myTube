import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const ChenelCard = ({ChenelDetails}) => {

  return (
   <Link to={`/chenel/${ChenelDetails?.id?.channelId}`}> <div className="chenelCard d-flex justify-content-center align-items-center flex-column shadow-lg">
   {/* card media is here */}
    <figure>
    <img src={ChenelDetails?.snippet?.thumbnails?.medium?.url} alt={ChenelDetails?.snippet?.channelTitle} className='img-fluid' />
    </figure>
   
    {/* card content  is here  */}
   <div><span className='chenel-title'>{ChenelDetails?.snippet?.title}</span> 
   <AiFillCheckCircle color='gray' size={15} className="ms-1"/></div>
   </div></Link>
  )
}

export default ChenelCard
