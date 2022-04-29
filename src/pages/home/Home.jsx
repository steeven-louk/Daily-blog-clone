import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import BestDiscution from '../bestDiscution'
import Bookmark from '../bookmark'
import Feed from '../feed'
import Popular from '../popular'
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
              <Route path='/popular' element={<Popular />}  />
              <Route path='/upvoted' element={<Upvoted />}  />
              <Route path='/discussed' element={<BestDiscution />}  />
              <Route path='/search' element={<Search />}  />
              <Route path='/bookmark' element={<Bookmark />}  />
          </Routes>
      
      </div>
    </div>
    </>
    
  )
}

export default Home