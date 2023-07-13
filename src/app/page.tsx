import Image from 'next/image'
import {client} from "@/lib/sanityClient" 
import { Image as IImage} from 'sanity'
import { urlForImage } from '../../sanity/lib/image'
import ProductCard from '../components/ProductCard';
import Carousel from '@/view/Carousel';
import Hero from '@/view/Hero';
import Promotions from '@/view/Promotions';
import Hero2 from '@/view/Hero2';


export default async function Home() {
// console.log(data)
  return (
   <>
   <Hero/>
   <Promotions/>
  <Carousel/>
  <Hero2/>
   </>
  )
}
