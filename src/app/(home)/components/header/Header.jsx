import "./header.css";
import React from "react";
import Banner from "../Banner/Banner";
import ClientHeaderLogic from "../clientHeader/ClientHeader"; 

function Header() {
  return (
    <div className="header">
       
        <ClientHeaderLogic />

        <Banner/>
    </div>
  );
}

export default Header;
