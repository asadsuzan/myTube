import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

const ChenelCard = ({item}) => {
  const {id,snippet} = item
  return (
    <div className="chenelCard d-flex justify-content-center align-items-center flex-column shadow-lg">
    {/* card media is here */}
     <figure>
     <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.channelTitle} className='img-fluid' />
     </figure>
    
     {/* card content  is here  */}
    <div><span className='chenel-title'>{snippet?.channelTitle}</span> 
    <AiFillCheckCircle color='gray' size={15} className="ms-1"/></div>
    </div>
  )
}

export default ChenelCard
