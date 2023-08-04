"use client"
import React from 'react'
import { Button } from './ui/button'
import {BiCart} from "react-icons/bi"

const AddToCart = ({pID,quantity,size}:{pID:string,quantity:number,size:string}) => {

const handleAddtocart=async()=>{
  const res = await fetch("/api/cart",{
    method: "POST",
    body: JSON.stringify({
      product_id:pID,
      quantity:quantity,
      size:size
    })
  })
  const result= await res.json()
}

  return (
    <div>
        <Button onClick={handleAddtocart} className='text-white bg-black gap-x-10'>
            <BiCart size={23}/>
            <p>Add To Cart</p>
        </Button>
    </div>
  )
}

export default AddToCart