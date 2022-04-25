import React from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import Feed from '../feed'
import Upvoted from '../upvoted'

import './styles/styles.scss'
function Home() {
  return (
    <>
      <Navbar />
    
    <div className="page">
    <div className='sidebar'> <Sidebar /></div>
     
      <div className='bg-dark text-white page-container'>
          <Upvoted />
      </div>
    </div>
    </>
    
  )
}

export default Home