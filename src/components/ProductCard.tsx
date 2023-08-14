import React, { FC } from "react";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";

const ProductCard: FC<{ item: any }> = ({ item }) => {
  return (
    <div>
      <Link href={`/Product/${item.id}`}>
        <div className="max-w-sm mx-auto bg-white rounded shadow-lg">
          {item.image?.asset && (
            <Image
              className=" w-full max-h-[200px]"
              src={urlForImage(item.image).url()}
              alt="Card Image"
              width={400}
              height={300}
            />
          )}

          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h2>
            <p className="text-lg font-bold text-gray-800">${item.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
