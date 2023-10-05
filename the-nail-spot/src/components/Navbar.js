import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    
  return (
    <nav>
     <div className="bg-white h-20 text-gray-600 w-full px-40 flex items-center justify-start">
      <div>
        <ul className="flex gap-4 items-center">
          <li>
            {" "}
            <Link to="/">
              <i className="fa-sharp fa-solid fa-house mr-1"></i>Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/OurServices">
              <i className="fa-regular fa-calendar-days mr-1"></i>Our Services
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/BookASlot">
              <i className="fa-solid fa-right-to-bracket mr-1"></i>Book A Slot
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Contact">
              <i className="fa-solid fa-right-to-bracket mr-1"></i>Contact
            </Link>{" "}
          </li>
        </ul>
        </div>
      </div>
       
          
       
    </nav>
  );
}

export default Navbar;
