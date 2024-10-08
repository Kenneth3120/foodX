import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'


const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Menu!</h1>
      <p className='explore-menu-text'>choose from a large variety and range of foods, The best of all at one place.</p>
      <p className="notice"><strong>Note:</strong> The loading of products will take around 120 seconds to load due to hosting on render :) Works Perfectly on localhost. Thanks for your Patience</p>
      <div className='explore-menu-list'>
        { menu_list.map((item, index) => {
            return(
                <div onClick={() =>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='' />
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
