"use client"
import React,{useState} from 'react'
import CartCard from './CartCard'

const CardsDetails = ({res}:any) => {
  return (
    <div>
       <div className='space-y-10'>
      {
        res?.map((i:any)=><div key={i.product_id}><CartCard pid={i.product_id} quantity={i.quantity}/></div>)
      }
      </div>
    </div>
  )
}

export default CardsDetails
