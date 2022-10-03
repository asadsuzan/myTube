import React from 'react'
import ChenelCard from './ChenelCard'
import VideoCard from './VideoCard'

const FeedContent = ({videos}) => {
  return (
    <div className='d-flex flex-wrap justify-content-center feed-content'>
      {
        videos.map((video,index)=>{
           return(
            <div key={index} >
            {/* video card is here  */}
            {video.id.videoId && <VideoCard videoDetails= {video}/>}
            {/* chanel card is here  */}
            {video.id.channelId && <ChenelCard ChenelDetails= {video}/>}

            </div>
           ) 
          
          
        })
      }
    </div>
  )
}

export default FeedContent
