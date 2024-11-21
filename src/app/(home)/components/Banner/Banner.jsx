import React from 'react'

export default function Hero() {
  return (
    <div>
      <div id="main" className="relative h-[90vh] w-full">
        <div className="hero-section__content  flex   items-center md:justify-start justify-center h-full">
          <div className="flex flex-col gap-12 p-8 bsm:px-1 ml-0 md:ml-12">
            <div className="text-[20px] md:text-[32px] text-white z-10 flex justify-center">
              <h1>
                The first webcam
                <br />
                designed for laptops.
              </h1>
            </div>
            <button className="w-52 h-10 bg-yellow-400 rounded-2xl z-10">
              Available now for $149.
            </button>
          </div>
        </div>
        <div className="image-container absolute left-0 top-0 h-full w-full">
          <picture>
            <source
              media="(min-width: 1888px)"
              srcSet="/hero-4xl.webp"
            ></source>
            <source
              media="(min-width: 1648px)"
              srcSet="/hero-3xl.webp"
            ></source>
            <source
              media="(min-width: 1408px)"
              srcSet="/hero-2xl.webp"
            ></source>
            <source
              media="(min-width: 1000px)"
              srcSet="/hero-1xl.webp"
            ></source>
            <source media="(min-width: 700px)" srcSet="/hero-xl.webp"></source>
            <source media="(min-width: 384px)" srcSet="/hero-sm.webp"></source>
            <img
              src="/hero-sm.webp"
              alt="img"
              className="w-full h-full object-cover "
            />
          </picture>
        </div>
      </div>
      
    </div>
  )
}
