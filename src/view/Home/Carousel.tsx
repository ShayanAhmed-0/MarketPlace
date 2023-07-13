"use client"
import Image from 'next/image'
import {client} from "@/lib/sanityClient" 
import { Image as IImage} from 'sanity'
import { urlForImage } from '../../../sanity/lib/image'
import ProductCard from '@/components/ProductCard';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BiCart} from "react-icons/bi"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export const getProductData=async()=>{
  const res = await client.fetch(
    `*[_type=="product"]{
      id,
      price,
      _id,
      description,
      title,
      image,
      category -> {
        name
      }
    }`
  );
  return res;
};

interface IProduct {
  id:number;
  price: number;
  _id: string;
  description: string;
  title: string;
  image: IImage;
  category: {
    name: string;
  };
}


  



const Carousel = async() => {
    const data:IProduct[]=await getProductData()

    const settings = {
              dots: true,
              autoplay:true,
              autoplaySpeed: 100,
              infinite: true,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 3,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ],
            
            };
    return (
     <>
      <div className="my-4 mt-24 sm:mt-36 md:mt-10">
        <h1 className="flex justify-center text-sm font-bold text-blue-700">PRODUCTS</h1>
        <p className="flex justify-center my-4 text-3xl font-bold">Check What We Have</p>
      </div>

      <div className="">
          <Slider {...settings}>
          {data.map((item) => (
         <div key={item._id}>
          <ProductCard item={item}/>
         </div>
        ))}
          </Slider>
        </div>

     {/* <div className='grid justify-center grid-cols-[auto,auto,auto] gap-10'>
        {data.map((item) => (
         <div key={item._id}>
          <ProductCard item={item}/>
         </div>
        ))}
        </div> */}
     </>
    )
}

export default Carousel

// "use client"
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {BiCart} from "react-icons/bi"
// import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

// const CarouselSlider = () => {
//     const carouselImages = [
//         "https://i.ibb.co/fDngH9G/carosel-1.png",
//         "https://i.ibb.co/DWrGxX6/carosel-2.png",
//         "https://i.ibb.co/tCfVky2/carosel-3.png",
//         "https://i.ibb.co/rFsGfr5/carosel-4.png",
//       ];
    
//       const settings = {
//         dots: true,
//         autoplay:true,
//         autoplaySpeed: 100,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         responsive: [
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//           },
//         ],
      
//       };
    
//       return (
//         <div className="relative z-0 w-full">
//           <Slider {...settings}>
//             {carouselImages.map((image, index) => (
//               <div key={index}>
//                 <img
//                   src={image}
//                   alt={`Carousel Image ${index + 1}`}
//                   className="object-cover w-full h-64"
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//   );
// };

// export default CarouselSlider;
