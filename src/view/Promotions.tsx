import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import event1 from "/public/event1.webp";
import event2 from "/public/event2.webp";
import event3 from "/public/event3.webp";

const Promotions = () => {
  return (
    <div>
      <div className="my-4">
        <h1 className="flex justify-center text-sm font-bold text-blue-700">
          PROMOTIONS
        </h1>
        <p className="flex justify-center my-4 text-3xl font-bold">
          Our Promotional Events
        </p>
      </div>

      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        <div>
          <div className="flex items-center justify-between px-8 my-4 bg-gray-300">
            <div className="">
              <h1 className="text-3xl font-bold">GET UPTO 60%</h1>
              <p className="block">For the summer season</p>
            </div>
            <Image src={event1} alt="event1" />
          </div>

          <div className="flex items-center justify-center px-8 py-2 text-white bg-black">
            <div>
              <h1 className="text-3xl font-bold">GET 30% Off</h1>
              <p className="mx-5 mt-5">USE PROMO CODE</p>
              <Button className="mt-2 -mx-3.5 bg-gray-700 rounded-xl">
                D I N E W E E K E N D S A L E
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mx-5 mb-5">
          <div className="flex-row justify-center gap-5 sm:inline-flex">
            <div className="w-full mt-4 bg-orange-800">
              <h1 className="px-2 pt-4">Flex Sweatshirt</h1>
              <div className="flex items-center px-2">
                <del>$100.00</del>
                <h1 className="text-xl font-bold">$75.00</h1>
              </div>
              <div className="flex justify-center ">
                <Image src={event2} alt="event1" className="bottom-0" />
              </div>
            </div>

            <div className="w-full mt-4 bg-gray-300">
              <h1 className="px-2 pt-4">Flex Push Button Bomber</h1>
              <div className="flex items-center px-2">
                <del>$225.00</del>
                <h1 className="text-xl font-bold">$190.00</h1>
              </div>
              <div className="flex justify-center">
                <Image src={event3} alt="event1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
