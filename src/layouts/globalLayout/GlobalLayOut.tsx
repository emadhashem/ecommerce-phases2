import React from 'react'
import { IComponentPorps } from '../../shared/types'
import NavBar from '../navBar/NavBar'
import './globalLayOut.style.scss'

function GlobalLayOut({children} : IComponentPorps) {
  return (
    <div className='globallayout-container' >
        <NavBar />
        <div className='layout-body' >
          {children}
        </div>
    </div>
  )
}

export default GlobalLayOut