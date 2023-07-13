import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import event1 from "/public/event1.webp";
import event2 from "/public/event2.webp";
import event3 from "/public/event3.webp";

const Promotions = () => {
  return (
    <div>
      <div className="my-4 mt-24 sm:mt-36 md:mt-0">
        <h1 className="flex justify-center text-sm font-bold text-blue-700">
          PROMOTIONS
        </h1>
        <p className="flex justify-center my-4 text-3xl font-bold">
          Our Promotional Events
        </p>
      </div>

      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        <div className="mt-4 space-y-5 ">

          <div className="flex justify-center bg-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="flex items-center mx-4">
                <div>
                  <h1 className="p-2 text-3xl font-bold">GET UPTO 60%</h1>
                  <h2 className="">For the summer season</h2>
                </div>
              </div>
              <Image src={event1} alt="event1" />
            </div>
          </div>

          <div className="flex items-center justify-center px-8 py-6 text-white bg-black">
            <div>
              <h1 className="text-3xl font-bold">GET 30% Off</h1>
              <p className="mx-5 mt-5">USE PROMO CODE</p>
              <Button className="mt-2 -mx-3.5 bg-gray-700 rounded-xl">
                D I N E W E E K E N D S A L E
              </Button>
            </div>
          </div>
        </div>

        <div className="sm:flex">
  
              <div className="flex justify-center w-full">
            <div className="mt-4 bg-orange-100 ">
              <div className="px-2 mt-4">
              <h1 className="">Flex Sweatshirt</h1>
                <del>$100.00</del>
                <span className="text-xl font-bold">$75.00</span>
              </div>
              <div className="pt-16 lg:pt-0">
                <Image src={event2} alt="event1" className="bottom-0" />
              </div>
              </div>
            </div>

            <div className="flex justify-center w-full">
            <div className="mt-4 bg-gray-300">
              <div className="px-2 mt-4">
              <h1 className="">Flex Push Button Bomber</h1>
              <del>$225.00</del>
                <span className="text-xl font-bold">$190.00</span>
              </div>
              <div className="pt-8 lg:pt-0">
                <Image src={event3} alt="event1" className="bottom-0" />
              </div>
            </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Promotions;
