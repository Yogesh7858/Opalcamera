import React from "react";

function Footer() {
  return (
    <div className="footer bg-white px-0 lg:px-20">
      <div className="footer-menu w-full px-2 bg-white flex justify-between">
        <div className="left-section h-60 md:w-1/2 w-full md:flex hidden flex-col justify-between basis-[30%]">
          <div className="upper-section flex flex-col md:gap-4 gap-1 w-full">
            <h3 className="text-[20px] font-semibold">
              Subscribe to the
              <br />
              Opal Newsletter
            </h3>
            <p className="text-[13px]  text-neutral-400">
              Latest news, musings, announcements <br /> and updates direct to
              your inbox.
            </p>
            <button
              className={`w-28 h-12 bg-[#080404] hover:bg-yellow-300 rounded-3xl justify-center items-center flex  `}
            >
              <svg
                width="40"
                height="80"
                fill="#fff"
                viewBox="0 0 36 36"
                className=" rotate-90 translate-x-3 hover:translate-x-0 transition-all"
              >
                <path
                  d="M27.66 15.61 18 6l-9.66 9.61A1 1 0 1 0 9.75 17L17 9.81v19.13a1 1 0 1 0 2 0V9.81L26.25 17a1 1 0 0 0 1.41-1.42Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="right-section md:w-1/2 w-full basis-[100%] md:basis-1/2 py-6 md:p-0">
          <div className="text-xs font-semibold flex gap-2 md:gap-7 justify-around leading-8">
            <div>
              <ul>
                <li className="mb-3 text-neutral-400">Products</li>
                <a href="#">
                  <li className="hover:text-neutral-400">Tadpole</li>
                </a>
                <a href="#">
                  <li className="hover:text-neutral-400">OPal C1</li>
                </a>
                <a href="#">
                  <li className="hover:text-neutral-400">Composer</li>
                </a>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mb-3 text-neutral-400">Company</li>
                <a href="#">
                  <li className="hover:text-neutral-400">About</li>
                </a>
                <a href="#">
                  <li className="hover:text-neutral-400">Terms</li>
                </a>
                <a href="#">
                  <li className="hover:text-neutral-400">Privacy</li>
                </a>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mb-3 text-neutral-400">Resources</li>
                <a href="#">
                  <li className="hover:text-neutral-400">Support</li>
                </a>
                <a href="#">
                  <li className="hover:text-neutral-400">Media Kit</li>
                </a>
                <a href="#">
                  <li className="hover:text-neutral-400">Downloads</li>
                </a>
                <a href="#">
                  <li className="hover:text-neutral-400">Newsletter</li>
                </a>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mb-3 text-neutral-400">Social</li>
                <a href="#">
                  <li className="hover:text-neutral-400">Instagram</li>
                </a>
                <a href="#">
                  <li className="hover:text-neutral-400">Twitter</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative">
        <div className="lower-section flex justify-around md:justify-between w-full md:w-[50%] px-2 md:px-4 md:py-2 py-4">
          <span>Opal Camera Inc.</span>
          <span>All rights reserved.</span>
        </div>
        <a href="#main">
        <button className="bg-gray-300 hover:bg-yellow-400 rounded-full w-10 h-10 md:flex absolute bottom-2 right-2 justify-center items-center hidden">
          <svg width="25" height="50" viewBox="0 0 36 36">
            <path
              d="M27.66 15.61 18 6l-9.66 9.61A1 1 0 1 0 9.75 17L17 9.81v19.13a1 1 0 1 0 2 0V9.81L26.25 17a1 1 0 0 0 1.41-1.42Z"
             
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
        </button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
