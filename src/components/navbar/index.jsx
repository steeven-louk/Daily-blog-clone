import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Sidebar from '../sidebar';
import './styles/styles.scss'


function Navbar() {

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);



  return (
    <div className="navbar__section">
        <nav className='navbar justify-content-between d-flex bg-dark text-light px-4'>
        <div className="menu-icon">
          <div className="menu" onClick={()=> setShowSidebar(!showSidebar)}>
              <FontAwesomeIcon icon="fa-solid fa-bars" />
          </div>
              {showSidebar? <Sidebar show={showSidebar} setShow={setShowSidebar}/> : '' }
            
        </div>
         
       
          <a href="/" className="nav-brand fw-bold">DEV-DAILY</a>
          <div className="profile" onClick={()=> setShowSubMenu(!showSubMenu)}>
            <h2 className='me-2'>2</h2>
            <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="" />

            <div className={!showSubMenu ? "sub-menu-profile" : "sub-menu-show"}>
                <ul className='nav d-flex flex-column'>
                  <li className="nav-item"><a href="/" className="nav-link"><FontAwesomeIcon className='me-3' icon="fa-solid fa-user" />Profile</a></li>
                  <li className="nav-item"><a href="/" className="nav-link"><FontAwesomeIcon className='me-3' icon="fa-solid fa-gear" />Account details</a></li>
                  <li className="nav-item">
                  <a href="/" className="nav-link">
                  <FontAwesomeIcon className='me-3' icon="fa-solid fa-sd-card" />
                  Dev card
                  </a>
                  </li>
                  <li className="nav-item"><a href="/" className="nav-link"><FontAwesomeIcon className='me-3' icon="fa-solid fa-plug" />Logout</a></li>
                </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar