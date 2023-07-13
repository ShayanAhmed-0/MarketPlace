import Image from 'next/image'
import {client} from "@/lib/sanityClient" 
import { Image as IImage} from 'sanity'
import { urlForImage } from '../../sanity/lib/image'
import ProductCard from '../components/ProductCard';
import Carousel from '@/view/Home/Carousel';
import Hero from '@/view/Home/Hero';
import Promotions from '@/view/Home/Promotions';
import Hero2 from '@/view/Home/Hero2';
import Subs from '@/view/Home/Subs';
import HomePage from '@/view/HomePage';


export default async function Home() {
// console.log(data)
  return (
   <>
   <div className='wrapper'>
  <HomePage/>
   </div>
   </>
  )
}
