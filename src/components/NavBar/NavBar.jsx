import React from 'react'
import { Link } from 'react-router-dom'
import NavBarCss from './NavBar.module.scss'
const NavBar = () => {
  return (
    <div className={NavBarCss.container}>
      <Link to="/" className={NavBarCss.logo}>
        <img alt="" src="images/image 1.svg" />
      </Link>
      <div className={NavBarCss.rightnav}>
        <Link to="/compare">
          <h3>COMPARE</h3>
        </Link>
        <div className={NavBarCss.menu}>
          <img alt="" src="images/whitedots.svg" />
        </div>
      </div>
    </div>
  )
}

export default NavBar
