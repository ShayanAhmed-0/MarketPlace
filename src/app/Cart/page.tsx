import React from 'react'
import { cookies } from 'next/headers'
import {v4 as uuid} from "uuid"
import {client} from "@/lib/sanityClient" 
const getCart = async()=>{
  const user_id:any=cookies().get("user_id")
  if(user_id){
    const res = await fetch(`http://localhost:3000/api/UserCart/${user_id.value}`,{
    method: "GET"
  })
  const result = await res.json()
  return result;
}
return false
  }

// const getProductCart=async()=>{
//   const resu = await client.fetch(
//     `*[_type=="product" && _id==${data.product_id}]`
    
//     // `*[_type=="product && ${}"]{   
//     //   image,
//     //   id,
//     //   price,
//     //   title,           
//     //   }`
//   );
//   return resu;
// }

const page = async() => {
 
const results=await getCart()
// const re=await getProductCart()
const res=results.data
// console.log(re)
// console.log("results")
// const re=results.data
  return (
    <div>
    {
      res.length>=1?(
        <>
          <h1>Cart</h1>
          {
            res.map((items:any)=>{

              return(
                <>
                <h1>{items.user_id}</h1>
                </>
              )
            })
          }
        </>
        )
      :(
        <h1>Your Cart is Empty</h1>
      )
    }
      </div>



  )
}


export default page
