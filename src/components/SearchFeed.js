import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from '../utils/fetchApi';
import ChenelCard from './ChenelCard';
import VideoCard from './VideoCard';

const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const { searchFor } = useParams()

  // fetch videos by search query
  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchFor}`)
      .then((data) => setVideos(data.items))
  }, [searchFor]);
  return (
    <div className='searchFeed'>
      {/* page title is here  */}
      <div className='my-5 ps-5 ms-4 fs-4 fw-bold'>Search Result for <span className='text-danger'> {searchFor}</span> Videos</div>

         {/* page content is here  */}
      <div className='d-flex flex-wrap px-5 justify-content-center' style={{ gap: "30px" }}>

        {
          videos.map((video, index) => {
            return (
              <div key={index} >
                {/* video card is here  */}
                {video.id.videoId && <VideoCard videoDetails={video} />}
                {/* chanel card is here  */}
                {video.id.channelId && <ChenelCard ChenelDetails={video} />}

              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default SearchFeed
