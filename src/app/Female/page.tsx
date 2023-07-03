
import Image from 'next/image'
import {client} from "@/lib/sanityClient" 
import { Image as IImage} from 'sanity'
import { urlForImage } from '../../../sanity/lib/image'
import ProductCard from '@/components/ProductCard';

export const getProductData=async()=>{
    const res = await client.fetch(
      `*[_type=="product" && category -> name == "Female"]{
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
const page = async() => {

    const data:IProduct[]=await getProductData()
    // console.log(data)
    return (
     <>
     <h1>FEMALE Collections</h1>
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

export default page

