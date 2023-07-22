"use client"


import Image from 'next/image';

import { useState } from 'react';

const images = [
  'https://i.ibb.co/fDngH9G/carosel-1.png',
  'https://i.ibb.co/DWrGxX6/carosel-2.png',
  'https://i.ibb.co/tCfVky2/carosel-3.png',
  'https://i.ibb.co/rFsGfr5/carosel-4.png',
];

const Page = () => {
  // const [selectedImage, setSelectedImage] = useState(images[0]);

  // const handleImageClick = (image) => {
  //   setSelectedImage(image);
  // };

  return (
    <div className='wrapper'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>

    <div className="flex justify-center gap-4 mx-4">
      <div className='space-y-4'>
      <img className="h-[10vh]" src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="img"/>
      <img className="h-[10vh]" src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="img"/>
      <img className="h-[10vh]" src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="img"/>
      <img className="h-[10vh]" src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="img"/>  
      </div>
      <div className=''>
      <img className='h-[80vh]' src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="img"/>
      </div>
    </div>

<div>
  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore repellat ab saepe delectus fugiat rerum cum officia voluptatibus minima cumque, sed adipisci praesentium ipsam deleniti non iusto quia iure!</h2>
  <h3>1231</h3>
</div>

      </div>
    </div>
  );
};

export default Page;






