import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='d-flex justify-content-between align-items-center navbar px-3 fixed-top top-0 end-0 w-100'>
    {/* logo is here  */}
    <Link to='/'> <div className='app-logo'>
      <span>MY</span>
      <span>TUBE</span>
     </div></Link>
        
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
