import React, { useEffect, useState } from 'react'
import { categories } from '../utils/constants'
import fetchApi from '../utils/fetchApi'
import SideBar from './SideBar'

const Feeds = () => {
  const [selectedCategory,setSelectedCategory] = useState('New')
   
  useEffect(() => {


    fetchApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) =>console.log(data))
    }, [selectedCategory]);
   
  return (
    <div className='feeds d-flex justify-content-center align-items-center'>
      {/* side bar is here  */}
      <SideBar credentials = {{selectedCategory,setSelectedCategory,categories}}/>
      {/* video and charnel card is here  */}
      <div className='cards-wrapper px-3'>
        <p className='fs-2'> <span className='text-danger'>{selectedCategory}</span> Videos</p>
      </div>
    </div>
  )
}

export default Feeds
