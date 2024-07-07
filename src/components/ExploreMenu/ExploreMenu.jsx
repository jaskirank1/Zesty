import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
      <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes</p>
        <div className='explore-menu-list'>
            {/* inside this list we will render the menu-list using map method */}
            {menu_list.map((item,index)=>{
                return(
                    // we will check if thee prev state is same as the itemname then set the category as all otherwise the menu_name
                    // we are doing so that when we click a particular category then only those elments will be visible otherwise display all the dishes  
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        {/* item is an object where we have menu_image */}
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
      </div>
  )
}

export default ExploreMenu
