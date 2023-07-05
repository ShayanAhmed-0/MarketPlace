import React from 'react'
import { cookies } from "next/headers"

const page = async() => {

    // const getCart=async()=>{
    //     const res = await fetch("http://localhost:3000/api/cart",{
    //         method: "GET"
    //     })
    // }
    const user=cookies().get("user_id")?.value as string
    console.log(user)
  return (
    <div>
      {user}
    </div>
  )
}

export default page
