import Image from 'next/image'
import {client} from "@/lib/sanityClient" 
import { Image as IImage} from 'sanity'
import { urlForImage } from '../../sanity/lib/image'
import ProductCard from './ProductCard';

export const getProductData=async()=>{
  const res = await client.fetch(
    `*[_type=="product"]{
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
  price: number;
  _id: string;
  description: string;
  title: string;
  image: IImage;
  category: {
    name: string;
  };
}

export default async function Home() {
  
  const data:IProduct[]=await getProductData()
console.log(data)
  return (
   <>
   <div className='grid justify-center grid-cols-[auto,auto,auto] gap-10'>
      {data.map((item) => (
       <div>
        <ProductCard item={item}/>
       </div>
      ))}
      </div>
   </>
  )
}
