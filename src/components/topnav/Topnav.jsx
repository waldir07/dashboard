import React from 'react'
import './topnav.scss'
import Userinfo from '../user-info/Userinfo'
import { data } from '../../constants'

const Topnav = () => {

  const openSidebar = () => {
    document.body.classList.add('sidebar-open');
  }
  return (
    <div className='topnav'>
      <Userinfo user={data.user} />
      <div className="sidebar-toggle" onClick={openSidebar}>
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  )
}

export default Topnav