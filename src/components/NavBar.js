import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
const NavBar = () => {
  return (
    <div className='d-flex justify-content-between align-items-center' style={{height:"80px"}}>
        {/* logo is here  */}
     <div className='app-logo'>
      <span>MY</span>
      <span>TUBE</span>
     </div>
        
        {/* search bar is here  */}
        <form className='d-flex align-items-center'>
          <input type="text" name='searchbar' className='search-filed'/>
          <div className='search-icon'>
            <BiSearchAlt2/>
          </div>
        </form>
    </div>
  )
}

export default NavBar
