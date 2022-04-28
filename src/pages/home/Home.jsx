import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
          <Routes>
              <Route path='/' exact element={<Feed />}  />
              <Route path='/upvoted' exact element={<Upvoted />}  />
              <Route path='/discussed' exact element={<BestDiscution />}  />
              <Route path='/search' exact element={<Search />}  />
              <Route path='/bookmark' exact element={<Bookmark />}  />
          </Routes>
      
      </div>
    </div>
    </>
    
  )
}

export default Home