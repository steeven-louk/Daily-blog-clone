import React from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import Feed from '../feed'

import './styles/styles.scss'
function Home() {
  return (
    <>
      <Navbar />
    
    <div className="page">
    <div className='sidebar'> <Sidebar /></div>
     
      <div className='bg-dark text-white page-container'>
          <Feed />
      </div>
    </div>
    </>
    
  )
}

export default Home