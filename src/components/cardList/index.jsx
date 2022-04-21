import React from "react";
import "./styles/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardList = () => {
  return (
    <>
      <div className="card col-md-4 col-sm-12 bg-dark text-white border">
        <div className="card-header d-flex">
          <div className="card-img px-2">
              <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="" />
          </div>
          
          <div className="card-option">
            <span data-bs-toggle="tooltip" data-bs-placement="left" title="option" className="icon-item"><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></span>
            <div className="option text-muted">
                <ul className="nav">
                    <li className="nav-item"><a href="/" className="nav-link"><FontAwesomeIcon icon="fa-solid fa-eye" className="pe-2" />Hide</a></li>
                    <li className="nav-item"><a href="/" className="nav-link"><FontAwesomeIcon icon="fa-solid fa-share" className="pe-2" />Share article</a></li>
                </ul>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title text-white text-uppercase">
            learn redux toolkit - the recommended way to use redux
          </h5>{" "}
          <br />
          <span className="text-muted">Yesterday . 1m read time</span>
          <div className="img-card">
            <img
              src="https://place-hold.it/300x170"
              alt=""
              className="card-img"
            />
          </div>
          <div className="footer-card d-flex justify-content-between">
           <span> <FontAwesomeIcon className="pt-3 px-3" icon="fa-solid fa-arrow-up" /></span>

            <span><FontAwesomeIcon className="pt-3 " icon="fa-solid fa-message" /></span>

            <span><FontAwesomeIcon className="pt-3 px-3" icon="fa-solid fa-bookmark" /></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
