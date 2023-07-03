"use client"
import React, { FC } from 'react'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'
import Link from 'next/link'


const ProductCard:FC<{item:any}> = ({item}) => {
    const handleAddToCart=async()=>{
        const res = await fetch("/api/cart",{
            method:"POST",
            body: JSON.stringify({
                product_id:item._id
            })
        })
        const result= await res.json()
    }
  return (
    <div>
       <div className="max-w-sm mx-auto bg-white rounded shadow-lg">
  <Link href={`/Product/${item.id}`}>

        {item.image?.asset && (
          <Image
          className="object-cover w-full max-h-[200px]"
          src={urlForImage(item.image).url()}
          alt="Card Image"
          width={400}
          height={300}
          />
          )}
          </Link>
          
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-lg font-bold text-gray-800">${item.price}</p>
              <button onClick={handleAddToCart} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                Add To Cart
              </button>
          </div>
        </div>
    </div>
  )
}

export default ProductCard
