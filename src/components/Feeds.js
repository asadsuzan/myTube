import React, { useState } from 'react'
import { categories } from '../utils/constants'
import SideBar from './SideBar'

const Feeds = () => {
  const [selectedCategory,setSelectedCategory] = useState('New')

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
