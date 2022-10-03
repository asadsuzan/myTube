import React, { useEffect, useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import fetchApi from '../utils/fetchApi'
import VideoCard from './VideoCard'


const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])
  const { id } = useParams()
  console.log(relatedVideos)
  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data?.items[0]))

    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => setRelatedVideos(data?.items))
  }, [id])

  if (!videoDetails) return 'loading'
  return (

    <div className='video-detail px-2 d-flex md-column'>
      <div className='react-player' >
        <ReactPlayer controls playing url={`https://www.youtube.com/watch?v=${id}`} width="100%" height={'80%'} />
        <div className='mt-3 d-flex justify-content-between align-items-center'>
          <div>
            <span className='d-block fs-5'>{videoDetails?.snippet?.title}</span>
            <div className='pt-2'>
              <span className='me-1'>{videoDetails?.snippet?.channelTitle}</span>
              <AiFillCheckCircle color='gray' />
            </div>
          </div>
          <div className='d-flex pe-2' style={{ gap: "10px", color: "gray", fontSize: "15px" }}>
            <span> {parseInt(videoDetails?.statistics?.likeCount).toLocaleString()} likes</span>
            <span> {parseInt(videoDetails?.statistics?.viewCount).toLocaleString()} views</span>
          </div>
        </div>
      </div>


      <div className='related-videos'>
        {
          relatedVideos.map((video, index) => <VideoCard videoDetails={video} />)
        }
      </div>

    </div>
  )
}

export default VideoDetails
