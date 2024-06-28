import React from "react";
import './navBar.css'

export default function NavBar () {


    return (
        <>
        <nav>
          <h1>
            <a href="#">Flight Booking</a>
          </h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Sign In</a></li>
          </ul>
        </nav>
        </>
    )
}