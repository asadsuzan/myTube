import React from 'react'
import ChenelCard from './ChenelCard'
import VideoCard from './VideoCard'

const Videos = ({videos}) => {
  return (
    <div className='d-flex flex-wrap justify-content-center' style={{gap:"20px"}}>
      {
        videos.map((item,index)=>{
           return(
            <div key={index} >
            {item.id.videoId && <VideoCard item= {item}/>}
            {item.id.channelId && <ChenelCard item= {item}/>}

            </div>
           ) 
          
          
        })
      }
    </div>
  )
}

export default Videos
