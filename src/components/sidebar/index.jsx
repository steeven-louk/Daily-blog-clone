import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeedFilter from "../feedFilter";
import "./styles/styles.scss";

const Sidebar = () => {

    const [showFilter, setShowFilter] = useState(false);


  return (
    <div className="sidebar__section">
      <div className="sidebar-container mx-3 py-5  text-white">
        <div className="d-flex flex-column">
           <div className={showFilter ? 'show-filter' : 'filter-side' }>
                <FeedFilter setShow={setShowFilter} showFilter={showFilter}/>
           </div>
          <header className="d-flex  text-muted justify-content-between">
            <h5>
            <Link to="/" >
              <FontAwesomeIcon icon="fa-solid fa-house" className="me-3" />
              my feed
              </Link>
            </h5>
            <FontAwesomeIcon icon="fa-solid fa-sliders" className="icon" onClick={()=> setShowFilter(!showFilter)} />
          </header>
          <hr />
          <div className="">
            <div className="discover text-muted">
              <h5 className="text-muted my-2">Discover</h5>
              <ul className="nav d-flex flex-column">
                <li className="nav-item">
                  <FontAwesomeIcon
                    className="my-2"
                    icon="fa-solid fa-fire-flame-curved"
                  />
                  <a href="/" className="nav-link">
                    Popular
                  </a>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon
                    className="my-2"
                    icon="fa-solid fa-arrow-up"
                  />
                  <Link to="/upvoted" className="nav-link">
                    Most upvoted
                  </Link>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon
                    className="my-2"
                    icon="fa-solid fa-message"
                  />
                  <Link to="/discussed" className="nav-link">
                    Best discussions
                  </Link>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon
                    className="my-2"
                    icon="fa-solid fa-magnifying-glass"
                  />
                  <Link to="/search" className="nav-link">
                    Search
                  </Link>
                </li>
              </ul>
            </div>

            <div className="Manage text-muted">
              <h5 className="text-muted my-2">Manage</h5>
              <ul className="nav d-flex flex-column">
                <li className="nav-item">
                  <FontAwesomeIcon
                    className="my-2"
                    icon="fa-solid fa-bookmark"
                  />
                  <Link to="/bookmark" className="nav-link">
                    Bookmarks
                  </Link>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon className="my-2" icon="fa-solid fa-eye" />
                  <a href="/" className="nav-link">
                    Reading history
                  </a>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon className="my-2" icon="fa-solid fa-moon" />
                  <a href="/" className="nav-link">
                    Focus mode
                  </a>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon className="my-2" icon="fa-solid fa-gear" />
                  <a href="/" className="nav-link">
                    Customize
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer text-muted flex-direction-end">
              <ul className="nav d-flex flex-column">
                <li className="nav-item">
                  <FontAwesomeIcon
                    className="my-2"
                    icon="fa-solid fa-file-invoice"
                  />
                  <a href="https://docs.daily.dev/docs/intro" rel="noreferrer" target="_blank"   className="nav-link">
                    Docs
                  </a>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon className="my-2" icon="fa-solid fa-code" />
                  <a href="/" className="nav-link">
                    Changelog
                  </a>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon
                    className="my-2"
                    icon="fa-solid fa-comments"
                  />
                  <a href="https://daily.dev/feedback" target='_blank' rel='noreferrer' className="nav-link">
                    Feedback
                  </a>
                </li>
                <li className="nav-item">
                  <FontAwesomeIcon
                    className="my-2"
                    icon="fa-solid fa-user-plus"
                  />
                  <a href="/" className="nav-link">
                    Invite people
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
