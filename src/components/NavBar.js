import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
const NavBar = () => {
  return (
    <div className='d-flex justify-content-between align-items-center navbar px-3 fixed-top top-0 end-0 w-100'>
        {/* logo is here  */}
     <div className='app-logo'>
      <span>MY</span>
      <span>TUBE</span>
     </div>
        
        {/* search bar is here  */}
        <form className='d-flex align-items-center'>
          <input type="text" name='searchbar' className='search-filed'/>
          <button className='search-btn' type='submit'>
            <BiSearchAlt2 color='#fff'/>
          </button>
        </form>
    </div>
  )
}

export default NavBar
