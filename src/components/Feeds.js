import React, { useEffect, useState } from 'react'
import { categories } from '../utils/constants'
import fetchApi from '../utils/fetchApi'
import SideBar from './SideBar'
import Videos from './Videos'

const Feeds = () => {
  const [selectedCategory,setSelectedCategory] = useState('New')
  const [videos,setVideos] = useState([])
  useEffect(() => {
    fetchApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) =>setVideos(data.items))
    }, [selectedCategory]);
   
  return (
    <div className='feeds d-flex justify-content-center '>
      {/* side bar is here  */}
      <SideBar credentials = {{selectedCategory,setSelectedCategory,categories}}/>
      {/* video and charnel card is here  */}
      <div className='videos-wrapper px-3'>
        <p className='fs-2'> <span className='text-danger'>{selectedCategory}</span> Videos</p>
        <Videos videos= {videos}/>
      </div>
    </div>
  )
}

export default Feeds
