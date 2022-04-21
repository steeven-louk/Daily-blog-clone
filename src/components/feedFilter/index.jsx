import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles/styles.scss'
const FeedFilter = ({showFilter, setShow}) => {

  return (
    <div className="FeedFilter__component bg-dark text-light">
        <div className="filter-container me-4">
            <span onClick={()=>setShow(!showFilter)}><FontAwesomeIcon icon="fa-solid fa-xmark" className='icon' /></span>
            <hr />

            <div className="feed-selection">
                <ul>
                    <li className='nav-item justify-content-between d-flex'><h5 className="fw-bold"><FontAwesomeIcon className='me-3' icon="fa-solid fa-hashtag" />Manage tags</h5><FontAwesomeIcon icon="fa-solid fa-chevron-right" className='my-2' /></li>
                    <li className='nav-item justify-content-between d-flex'><h5 className="fw-bold"><FontAwesomeIcon className='me-3' icon="fa-solid fa-sliders" />Advanced</h5><FontAwesomeIcon icon="fa-solid fa-chevron-right" className='my-2' /></li>
                    <li className='nav-item justify-content-between d-flex'><h5 className="fw-bold"><FontAwesomeIcon className='me-3' icon="fa-solid fa-ban" />Blocked items</h5><FontAwesomeIcon icon="fa-solid fa-chevron-right" className='my-2' /></li>
                    <li className='nav-item justify-content-between d-flex'><h5 className="fw-bold"><FontAwesomeIcon className='me-3' icon="fa-solid fa-plus" />Suggest new source</h5><FontAwesomeIcon icon="fa-solid fa-chevron-right" className='my-2' /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FeedFilter