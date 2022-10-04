import React, { useEffect, useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom'
import fetchApi from '../utils/fetchApi'
import Loader from './Loader'
import VideoCard from './VideoCard'


const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data?.items[0]))

    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => setRelatedVideos(data?.items))
  }, [id])

  if (!videoDetails || !relatedVideos) return <Loader/>
  return (

    <div className='video-detail px-2 d-flex'>
      <div className='react-player' >
        <ReactPlayer controls playing url={`https://www.youtube.com/watch?v=${id}`} width="100%" height={'80%'} />
        <div className='mt-3 d-flex justify-content-between align-items-center'>
          <div>
            <span className='d-block fs-5'>{videoDetails?.snippet?.title}</span>
            <div className='pt-2'>
            <Link to={`/chenel/${videoDetails?.snippet?.channelId}`}>
            <span className='me-1 text-light' style={{fontSize:"13px"}}>{videoDetails?.snippet?.channelTitle}</span>
            </Link>
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
