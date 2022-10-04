import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchApi from '../utils/fetchApi'
import ChenelCard from './ChenelCard'
import Loader from './Loader'
import VideoCard from './VideoCard'

const ChenelDetails = () => {
  const [ChenelDetail,setChenelDetail] = useState(null)
  const [channelVideos,setChannelVideos] = useState(null)
  const {id} = useParams()

  useEffect(()=>{
    // load chenel details 
    fetchApi(`channels?part=snippet&id=${id}`)
    .then(data=>setChenelDetail(data?.items[0]))
      // load chenel videos 
    fetchApi(`search?channelId=${id}&part=snippet&order=date`)
    .then(data=>setChannelVideos(data?.items))
     
  },[id])
  if (!ChenelDetail || !channelVideos) return <Loader/>
  return (
    <div className='chenel-details'>
      <div className="banner d-flex justify-content-center align-items-center">
      {/* chenel profile is here  */}
      <ChenelCard ChenelDetails={ChenelDetail}/>
      </div>

       {/* chenel videos  is here  */}
      <div className="d-flex flex-wrap justify-content-center mt-5 pt-5" style={{gap:"10px"}}>
      {
        channelVideos?.map((video,index)=><VideoCard key={index} videoDetails={video}/>)
     }
      </div>

     
    </div>
  )
}

export default ChenelDetails
