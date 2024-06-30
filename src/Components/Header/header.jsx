import React, { useEffect, useRef, useState } from "react";
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faPlane, faCar, faTaxi, faDiamond } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";


export default function Header () {

    const h1Title = ["Flight Booking", "Hotels Booking"]
    const[title, setTitle] = useState(null)
    const facilitiesList = useRef(null)
    const location = useLocation()
    const pathNames = ["/hotels","/flights","/cars","/taxis"]

    useEffect(() => {
        let counter, arrCount, condition;
        let tempTilte;

        counter = 0;
        arrCount = 0;
        condition = true;
        tempTilte = "";
        setInterval(() => {
            if(counter === h1Title[arrCount].length) {
                condition = false
            } else if(counter === 0 ){
                condition = true
            }

            if(condition === true){
                tempTilte += h1Title[arrCount][counter]
                counter++
            }else{
                tempTilte = tempTilte.slice(0, counter-1)
                counter--
            }

            if(counter === 0) {
                if(arrCount === 0) {
                    arrCount = 1
                } else {
                    arrCount = 0
                }
            }
            setTitle(tempTilte)
        }, 500);
    }, [])

    useEffect(() => {
        let facListIndex = facilitiesList.current.children
        for(let i = 0 ; i < facListIndex.length ; i++) {
            facListIndex[i].firstChild.classList.remove("active")
            if(location.pathname === pathNames[i]){
                facListIndex[i].firstChild.classList.add("active")
            }
        }
        
    }, [])

    return (
        <>
        <header>
            <nav className="navOne">
                <h1>
                    {title}
                    <span></span>
                </h1>
                <ul>
                    <li><Link to="">Register</Link></li>
                    <li><Link to="">Log In</Link></li>
                </ul>
            </nav>
            <nav className="navTwo">
                <ul ref={facilitiesList}> 
                    <li><Link to=""><FontAwesomeIcon icon={faHotel} />Hotels</Link></li>
                    <li><Link to=""><FontAwesomeIcon icon={faPlane} />Flights</Link></li>
                    <li><Link to=""><FontAwesomeIcon icon={faCar} />Car Rental</Link></li>
                    <li><Link to=""><FontAwesomeIcon icon={faTaxi} />Airport taxis</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}