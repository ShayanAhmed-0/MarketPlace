import React from 'react'
import { Button } from './ui/button'
import {BiCart} from "react-icons/bi"

const AddToCart = () => {
  return (
    <div>
        <Button className='text-white bg-black gap-x-10'>
            <BiCart size={23}/>
            <p>Add To Cart</p>
        </Button>
    </div>
  )
}

export default AddToCart