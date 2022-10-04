import React, { useEffect, useState } from 'react'
import fetchApi from '../utils/fetchApi'
import FeedContent from './FeedContent'
import Loader from './Loader'
import SideBar from './SideBar'

const Feeds = () => {
  const [selectedCategory,setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([])

  
  // fetch videos by selectedCategory
  useEffect(() => {

    fetchApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) =>setVideos(data.items))
   
    }, [selectedCategory,videos]);
     
    if(!videos) return <Loader/>

  return (
    <div className='feeds d-flex justify-content-center '>
      {/* side bar is here  */}
      <SideBar credentials = {{selectedCategory,setSelectedCategory}}/>
      {/* feed content is here  */}
      <div className='feed-content-box px-3'>
        <p className='fs-2'> <span className='text-danger'>{selectedCategory}</span> Videos</p>
        <FeedContent videos= {videos}/>
      </div>
    </div>
  )
}

export default Feeds
