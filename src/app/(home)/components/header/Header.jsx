"use client";
import React, { useState, useEffect } from "react";
import "./header.css";
import Hero from "../Hero/Hero";

function Header() {
  const [hideItems, setHideItems] = useState(false);

  useEffect(()=>{

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbarElement = document.querySelector(".navbar-container");
      if (currentScrollPos > 30) navbarElement.classList.add("top-0");
      else navbarElement.classList.remove("top-0");
  
      if (currentScrollPos <= 50) {
        setHideItems(false);
      } else {
        setHideItems(true);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  },[])

  

  return (
    <div className="header">
      <nav className="bg-yellow-400 flex justify-center p-2 font-thin">
        <h3>
          Take $50 off any order $200 USD or more with code 
          <span className="font-bold"> ANY50</span>
        </h3>
      </nav>

      <div className="navbar-container fixed z-[999] w-full flex p-3 justify-between ">
        <div className="flex gap-x-12 ">
          <div className="invert font-large opal">
            <a href="#">Opal</a>
          </div>

          <div className="text-white mt-3 ml-6 flex justify-center gap-x-12 bmd:hidden ">
            <ul className="flex-col gap-y-3 flex">
              <li>
                <a href="#" className="">
                  Products
                </a>
              </li>
              <li
                className={`opacity-[0.4] transition-item ${
                  hideItems ? "hidden-item" : ""
                }`}
              >
                Tadpole
              </li>
              <li
                className={`opacity-40 transition-item ${
                  hideItems ? "hidden-item" : ""
                }`}
              >
                C1
              </li>
              <li
                className={`opacity-40 transition-item ${
                  hideItems ? "hidden-item" : ""
                }`}
              >
                Composer
              </li>
            </ul>
            <ul className="flex-col flex gap-y-3">
              <li>
                <a href="#" className="">
                  Company
                </a>
              </li>
              <li
                className={`opacity-40 transition-item ${
                  hideItems ? "hidden-item" : ""
                }`}
              >
                About
              </li>
              <li
                className={`opacity-40 transition-item ${
                  hideItems ? "hidden-item" : ""
                }`}
              >
                Terms
              </li>
              <li
                className={`opacity-40 transition-item ${
                  hideItems ? "hidden-item" : ""
                }`}
              >
                Privacy
              </li>
            </ul>
            <ul className="flex-col flex gap-y-3">
              <li>
                <a href="#" className="">
                  Resources
                </a>
              </li>
              <li
                className={`opacity-40 transition-item ${
                  hideItems ? "hidden-item" : ""
                }`}
              >
                Support
              </li>
              <li
                className={`opacity-40 transition-item ${
                  hideItems ? "hidden-item" : ""
                }`}
              >
                Media Kit
              </li>
              <li
                className={`opacity-40 transition-item ${
                  hideItems ? "hidden-item" : ""
                }`}
              >
                Downloads
              </li>
              <li
                className={`opacity-40 transition-item ${
                  hideItems ? "hidden-item" : ""
                }`}
              >
                Newsletter
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/3 text-white pt-3">
          
          <svg
            viewBox="0 0 30 24"
            className="w-[23px] deep:fill-white  bg-invert-style"
          >
            <g clipPath="url(#a)">
              <path
                fillRule="evenodd"
                d="M21.96 5.306A12 12 0 0 0 11.398.014C5.191.318.178 5.447.005 11.66-.182 18.443 5.26 23.999 12 23.999c4.15 0 7.807-2.107 9.96-5.306l-9.813-6.416a.333.333 0 0 1 0-.554l9.813-6.415a11.9 11.9 0 0 1 2.04 6.69c0 2.48-.75 4.78-2.04 6.694l7.52 5.249c.223.147.52-.01.52-.277V.334a.333.333 0 0 0-.52-.277z"
                clipRule="evenodd"
              />
            </g>
          </svg>
          

          <div className="flex justify-between pt-16 bmd:hidden">
            <h2
              className={`text-2xl transition-item ${
                hideItems ? "newsletter-item" : ""
              } `}
            >
              Newsletter
            </h2>
            <button
              className={`w-28 h-12 hover:bg-[rgb(72,101,213)] rounded-3xl justify-center items-center flex bg-[rgba(255,255,255,0.4)] ${
                hideItems ? "newsletter-item" : ""
              }`}
            >
              <svg
                width="60"
                height="40"
                viewBox="0 0 15 15"
                fill="#fff"
                className="!opacity-100 translate-x-3 hover:translate-x-0 transition-all "
              >
                <path d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" />
              </svg>
            </button>
          </div>

          <div
            className={`!opacity-100 bmd:hidden text-[12px] text-slate-400 transition-item pt-3 ${
              hideItems ? "newsletter-item" : ""
            }`}
          >
            <i>
              By signing up, i agree with the data protection policy of Opal
            </i>
          </div>
        </div>
      </div>

      <Hero />

    </div>
  );
}

export default Header;
