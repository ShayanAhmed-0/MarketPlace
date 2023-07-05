"use client";

import Image from "next/image";
import logo from "/public/logo.webp";
import Link from "next/link";
import {ShoppingCart} from "lucide-react"

const navbar = () => {
  return (
    <div className="flex items-center justify-between mx-10 my-6">
        <Image src={logo} alt="navbarImg" />
        <ul className="flex text-lg font-semibold gap-x-10">
          <Link href={"/Category/Female"}>
          <li>Female</li>
          </Link>
          <Link href={"/Category/Male"}>
          <li>Male</li>
          </Link >
          <Link href={"/Category/Kids"}>
          <li>Kids</li>
          </Link>
          <Link href={"/Category/All"}>
          <li>All Products</li>
          </Link>
        </ul>
      <div className="flex items-center justify-center p-2 bg-gray-300 rounded-full">
        <ShoppingCart/>
      </div>
    </div>
  );
};

export default navbar;
