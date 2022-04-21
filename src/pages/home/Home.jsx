import React from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'

import './styles/styles.scss'
function Home() {
  return (
    <>
      <Navbar />
    
    <div className="page">
      <Sidebar />
      <div className='bg-dark text-white page-container'>
        home
      </div>
    </div>
    </>
    
  )
}

export default Home