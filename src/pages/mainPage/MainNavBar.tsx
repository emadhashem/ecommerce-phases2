import React from 'react'
import './MainNavBar.style.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../assets/imgs/logo.png'

function MainNavBar() {
  return (
    <div className='container' >
      <div>
        <AccountCircleIcon sx={{color: '#2C7BE5'}}/>
        <FavoriteIcon sx={{color: '#2C7BE5'}}/>
        <NotificationsIcon sx={{color: '#2C7BE5'}} />
        <ShoppingCartIcon sx={{color: '#2C7BE5'}} />
      </div>
      <div>
        <img src={logo} />
      </div>
    </div>
  )
}

export default MainNavBar