
// import React,{useState} from 'react'
import { cookies } from 'next/headers'
import {v4 as uuid} from "uuid"
import {client} from "@/lib/sanityClient" 
import CartCard from '@/components/CartCard'
import CardsDetails from '@/components/CardsDetails'
const getCart = async(uid:string)=>{
     
  try{
      const res = await fetch(`http://localhost:3000/api/UserCart/${uid}`,{
        method: "GET"
      })
      const result = await res.json()
      return result;
  }catch{
return "Cart is Empty"
  }
  }

const page = async() => {
  // const [Tprice,setTPrice]=useState(0)
  // const calcu=(value:any)=>{
  //   setTPrice(Tprice+value)
  // }
  const user_id:any=cookies().get("user_id")
  var res
 if(user_id){
   const results=await getCart(user_id.value)
   res=results.data
  }
  return (
    // quantity
    <div className='wrapper'>
     {
      user_id && <CardsDetails res={res}/>
     }
     {
      !user_id && <h1 className='flex justify-center text-6xl'>Your Cart is Empty</h1>
     }
      </div>



  )
}


export default page
