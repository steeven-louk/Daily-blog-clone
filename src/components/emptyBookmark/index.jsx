import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom';
import './styles/style.scss';


const EmptyBookmark = () => {
  return (
    <div className="empty-component">
        <FontAwesomeIcon
                className="icon my-5"
                icon="fa-solid fa-bookmark"
              />
        <h2>Your bookmark list is empty.</h2>
        <p className="text-muted pt-3">Go back to your feed and bookmark posts you’d like to keep or read later. Each post you bookmark will be stored here.</p>

        <div className="go-feed pt-5">
            <Link to="/" className="btn btn-lg bg-white text-dark">Back to feed</Link>
        </div>
    </div>
  )
}

export default EmptyBookmark 