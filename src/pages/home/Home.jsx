import React from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import BestDiscution from '../bestDiscution'
import Bookmark from '../bookmark'
import Feed from '../feed'
import Search from '../search'
import Upvoted from '../upvoted'

import './styles/styles.scss'
function Home() {
  return (
    <>
      <Navbar />
    
    <div className="page ">
    <div className='sidebar'> <Sidebar /></div>
      
      <div className='text-white bg-dark page-container'>
      <Bookmark />
      </div>
    </div>
    </>
    
  )
}

export default Home