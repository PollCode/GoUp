import React from "react";
import starRainbow from "../assets/images/star-rainbow.png"
import rectangle from "../assets/images/rectangle.png"
import "../assets/styles/BookVisit.css"

const BookVisit = () => {
    return(
        <div className="row mb-4">
            <div className="col-lg-8 p-5">
                <div className="portrait">
                    <img src={rectangle} alt="Book Visit" className="main-img"></img>
                    <img src={starRainbow} alt="Star Rainbow" className="second-img"></img>
                </div>
            </div>
            <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                <p className="book-text">BOOK YOUR VISIT</p>
                <button className="btn btn-success btn-call-us rounded-pill mb-3">CALL US</button>
                <button className="btn btn-primary btn-email-us rounded-pill">EMAIL US</button>
            </div>
        </div>
    );
};

export default BookVisit;