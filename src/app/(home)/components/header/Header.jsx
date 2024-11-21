import "./header.css";
import React from "react";
import Banner from "../Banner/Banner";
import ClientHeaderLogic from "../clientHeader/ClientHeader"; 

function Header({data}) {
  return (
    <div className="header">
       
        <ClientHeaderLogic data={data}/>

        <Banner/>
    </div>
  );
}

export default Header;
