import React from 'react'

const VideoCard = ({item}) => {
  console.log(item)
  const {id,snippet} = item
  return (
    <div className="videoCard">
     <figure><img src={snippet?.thumbnails?.medium?.url} alt /></figure>
    </div>
  )
}

export default VideoCard
