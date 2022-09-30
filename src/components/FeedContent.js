import React from 'react'
import ChenelCard from './ChenelCard'
import VideoCard from './VideoCard'

const FeedContent = ({videos}) => {
  return (
    <div className='d-flex flex-wrap justify-content-center feed-content'>
      {
        videos.map((item,index)=>{
           return(
            <div key={index} >
            {/* video card is here  */}
            {item.id.videoId && <VideoCard item= {item}/>}
            {/* chanel card is here  */}
            {item.id.channelId && <ChenelCard item= {item}/>}

            </div>
           ) 
          
          
        })
      }
    </div>
  )
}

export default FeedContent
