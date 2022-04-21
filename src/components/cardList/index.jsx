import React from "react";
import "./styles/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardList = ({
  feed: {
    title,
    readable_publish_date,
    comments_count,
    public_reactions_count,
    positive_reactions_count,
    social_image,
    reading_time_minutes,
    user
  },
}) => {

   
  return (
    <>
      <div className="card col-md-4 col-sm-12 bg-dark text-white border">
        <div className="card-header d-flex">
          <div className="card-img px-2">
            <img src={user.profile_image_90} alt="" />
            <span className="mx-2">{user.username}</span>
          </div>

          <div className="card-option">
            <span
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="option"
              className="icon-item"
            >
              <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
            </span>
            <div className="option text-muted">
              <ul className="nav">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <FontAwesomeIcon icon="fa-solid fa-eye" className="pe-2" />
                    Hide
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    <FontAwesomeIcon
                      icon="fa-solid fa-share"
                      className="pe-2"
                    />
                    Share article
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title text-white text-uppercase">
            {title}
          </h5>{" "}
          <br />
          <span className="text-muted">{readable_publish_date} - {reading_time_minutes}min read time</span>
          <div className="img-card">
            <img
              src={social_image}
              alt=""
              className="card-img"
            />
          </div>
          <div className="footer-card d-flex justify-content-between">
            <span>
              {" "}
              <FontAwesomeIcon
                className="pt-3 px-3"
                icon="fa-solid fa-arrow-up"
              />
              {positive_reactions_count}
            </span>

            <span>
              <FontAwesomeIcon className="pt-3 " icon="fa-solid fa-message" /> {comments_count}
            </span>

            <span>
              <FontAwesomeIcon
                className="pt-3 px-3"
                icon="fa-solid fa-bookmark"
              />
              {public_reactions_count}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
