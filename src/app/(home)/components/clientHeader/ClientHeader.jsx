"use client";

import React, { useEffect, useState } from "react";

function ClientHeaderLogic({data}) {
  const [hideItems, setHideItems] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbarElement = document.querySelector(".navbar-container");

      if (currentScrollPos > 30) navbarElement?.classList.add("top-0");
      else navbarElement?.classList.remove("top-0");

      setHideItems(currentScrollPos > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="bg-yellow-400 flex justify-center p-2 font-thin text-[14px]">
          <p>
            Take $50 off any order $200 USD or more with code 
            <span className="font-bold"> ANY50</span>
          </p>
        </nav>
      <div className={`navbar-container fixed z-[999] w-full flex p-3 justify-between bmd:${hideItems ? "hidden" : ""}`}>
          <div className="flex gap-x-12 ">
            <div className="invert font-large opal">
              <a href="#">Opal</a>
            </div>

            <div className="text-white mt-3 ml-6 flex justify-center gap-x-12 bmd:hidden ">

              { data.map((curr,index)=>{
                return (
                  <ul key={index} className="flex-col gap-y-3 flex ">
                    <li  className="overflow-hidden ">
                        <div className="open-items">{curr.title}</div>
                    </li>
                    {curr.content.map((newElement,index)=>{
                      return (
                        <li key={index}
                        className="overflow-hidden "
                          >
                            <div className={`opacity-40 ${
                              hideItems ? "hidden-item " : "open-items"
                            }`}>
                            <a href="#" className="opacity-40">
                            {newElement}
                            </a>
                            </div>
                            
                        </li>
                      )
                    })}
                  </ul>
                )
              })
              }
            </div>
          </div>
          <div className="flex mx-auto my-auto"><svg viewBox="0 0 50 50" data-sentry-element="svg" data-sentry-source-file="MobileNav.tsx" fill="#fff" className={`w-6 h-6  md:hidden ${
                hideItems ? "newsletter-item" : ""
              }`}><path data-sentry-element="polygon" data-sentry-source-file="MobileNav.tsx" d="m21.97 17.09 1.27.17 1.18.49 1.01.77.77 1.01.49 1.18.17 1.26-.17 1.27-.49 1.18-.77 1.01-1.01.77-1.18.49-1.27.17-1.26-.17-1.18-.49-1.01-.77-.77-1.01-.49-1.18-.17-1.27.17-1.26.48-1.18.78-1.01 1.01-.77 1.18-.49zM7.33 2.44l1.26.17 1.18.49 1.01.77.77 1.01.49 1.18.17 1.27-.17 1.26-.49 1.18-.77 1.01-1.01.77-1.18.49-1.26.17-1.27-.17-1.18-.49-1.01-.77-.77-1.01-.49-1.18-.17-1.26.17-1.27.49-1.18.77-1.01 1.01-.77 1.18-.49zm0 14.65 1.26.17 1.18.49 1.01.77.77 1.01.49 1.18.17 1.26-.17 1.27-.49 1.18-.77 1.01-1.01.77-1.18.49-1.26.17-1.27-.17-1.18-.49-1.01-.77-.77-1.01-.49-1.18-.17-1.27.17-1.26.49-1.18.77-1.01 1.01-.77 1.18-.49zM36.62 2.44l1.27.17 1.18.49 1.01.77.77 1.01.49 1.18.17 1.27-.17 1.26-.49 1.18-.77 1.01-1.01.77-1.18.49-1.27.17-1.26-.17-1.18-.49-1.01-.77-.78-1.01-.48-1.18-.17-1.26.17-1.27.48-1.18.78-1.01 1.01-.77 1.18-.49zm-14.65 0 1.27.17 1.18.49 1.01.77.77 1.01.49 1.18.17 1.27-.17 1.26-.49 1.18-.77 1.01-1.01.77-1.18.49-1.27.17-1.26-.17-1.18-.49-1.01-.77-.77-1.01-.49-1.18-.17-1.26.17-1.27.48-1.18.78-1.01 1.01-.77 1.18-.49zm14.65 29.3 1.27.17 1.18.48 1.01.78.77 1.01.49 1.18.17 1.26-.17 1.27-.49 1.18-.77 1.01-1.01.77-1.18.49-1.27.17-1.26-.17-1.18-.49-1.01-.77-.78-1.01-.48-1.18-.17-1.27.17-1.26.48-1.18.78-1.01 1.01-.78 1.18-.48zm0-14.65 1.27.17 1.18.49 1.01.77.77 1.01.49 1.18.17 1.26-.17 1.27-.49 1.18-.77 1.01-1.01.77-1.18.49-1.27.17-1.26-.17-1.18-.49-1.01-.77-.78-1.01-.48-1.18-.17-1.27.17-1.26.48-1.18.78-1.01 1.01-.77 1.18-.49zM7.33 31.74l1.26.17 1.18.48 1.01.78.77 1.01.49 1.18.17 1.26-.17 1.27-.49 1.18-.77 1.01-1.01.77-1.18.49-1.26.17-1.27-.17-1.18-.49-1.01-.77-.77-1.01-.49-1.18-.17-1.27.17-1.26.49-1.18.77-1.01 1.01-.78 1.18-.48zm14.64 0 1.27.17 1.18.48 1.01.78.77 1.01.49 1.18.17 1.26-.17 1.27-.49 1.18-.77 1.01-1.01.77-1.18.49-1.27.17-1.26-.17-1.18-.49-1.01-.77-.77-1.01-.49-1.18-.17-1.27.17-1.26.48-1.18.78-1.01 1.01-.78 1.18-.48z"/></svg></div>
          <div className="w-1/3 text-white pt-3 md:mr-0 mr-[-40px]">
            
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
                className={` text-2xl transition-item ${
                  hideItems ?  "hidden-item " : "open-items"
                } `}
              >
                <span className="opacity-[0.4]">Newsletter</span>
              </h2>
              <button
                className={` transitionEffect w-28 h-12 hover:bg-[rgb(72,101,213)] rounded-3xl justify-center items-center flex bg-[rgba(255,255,255,0.4)] ${
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
              className={` bmd:hidden text-[12px] text-slate-400 transition-item pt-3 ${
                hideItems ?  "hidden-item " : "open-items"
              }`}
            >
              <i>
                By signing up, i agree with the data protection policy of Opal
              </i>
            </div>
          </div>
      </div>
       </>
  );
}

export default ClientHeaderLogic;
