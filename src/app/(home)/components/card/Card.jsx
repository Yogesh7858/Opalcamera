import Image from 'next/image';
import React from 'react';

function Card() {
  const data = [
    {
      name: "Tadpole",
      image: "/opalc1.png", 
      description: "The tiny webcam with a clip",
      rate: "Now $149",
    },
    {
        name: "Opal C1",
        image: "/opalc2.png", 
        description: "This first professional webcam",
        rate: "$299",
    },
    {
        name: "Composer",
        image: "/opalc3.png",
        description: "This magic behind the camera",
    },
    // 
  ];

  return (
    <>
      <div className="grid  grid-cols-1 md:grid-cols-3 sticky">
        {data.map((curr, index) => (
          <div key={index} className="border-[1px]  bg-white p-4 flex flex-col items-center gap-2">
            <h2 className='text-3xl font-bold pt-12'>{curr.name}</h2>
            <h3 className='text-neutral-400 '>{curr.description}</h3>
            {curr.rate && <button className='bg-yellow-400 h-10 w-24 rounded-3xl'>{curr.rate}</button>}
            <Image 
              src={curr.image} 
              alt={curr.name} 
              width={200} 
              height={200} 
              priority 
              className='mt-10'
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
