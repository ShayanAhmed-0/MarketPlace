import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {LuShoppingCart} from "react-icons/lu"
import Image from "next/image";
import header from "/public/header.webp"
import featured1 from "/public/Featured/Featured1.webp"
import featured2 from "/public/Featured/Featured2.webp"
import featured3 from "/public/Featured/Featured3.webp"
import featured4 from "/public/Featured/Featured4.webp"

const Hero = () => {
  return (
    <section className="flex py-6 gap-y-10">
        {/* left div */}
        <div className="absolute bg-orange-100 rounded-full md:hidden">
<Image className="rounded-full" src={header} alt="header"/>
      </div>
      <div className="relative flex-1">
        <Badge className="mt-16 text-blue-700 bg-blue-100 text-md rounded-xl">
          Sale 70%
        </Badge>
        <h1 className="mt-10 text-6xl font-extrabold tracking-tight scroll-m-20">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className= "flex-1 h-12 mt-4 text-white bg-zinc-800">
            <LuShoppingCart/>
            <p className="mx-2">
            Start Shopping
            </p>
            </Button>
            {/* grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-sols:4 */}
            <div className="flex gap-5 mt-10 ">
                <Image src={featured1} alt="featured1"/>
                <Image src={featured2} alt="featured2"/>
                <Image src={featured3} alt="featured3"/>
                <Image src={featured4} alt="featured4"/>
            </div>
      </div>

{/* right div */}
      <div className="hidden bg-orange-100 rounded-full md:flex ">
<Image className="rounded-full" src={header} alt="header"/>
      </div>
    </section>
  );
};

export default Hero;
