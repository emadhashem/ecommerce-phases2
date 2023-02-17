import React from 'react'
import MainNavBar from './MainNavBar'
import logo from '../../assets/imgs/logo.png'
import MainSwiper from '../../features/swipers/mainSwiper/MainSwiper'
import Search from '../../features/search/Search'
import CategorySwiper from '../../features/swipers/categorySwiper/CategorySwiper'
import MostSaledSwiper from '../../features/swipers/mostSaledSwiper/MostSaledSwiper'
function MainPage() {
  return (
    <div>
      <MainNavBar />
      <MainSwiper />
      <Search />
      <MostSaledSwiper />
      <CategorySwiper />
    </div>
  )
}

export default MainPage