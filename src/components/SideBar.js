import React from 'react'


const SideBar = ({credentials}) => {
  const {selectedCategory,setSelectedCategory,categories} = credentials
  return (
    <div className='d-flex flex-column side-bar px-2 pt-3'>
      {
        categories?.map(category=>{
          const {name,icon} = category
           return(
            <div className={`category-btn d-flex align-items-center p-2 w-100 ${selectedCategory === name && "active"}`} onClick={()=>setSelectedCategory(name)} key={name}>
              {icon}
              <span>{name}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default SideBar
