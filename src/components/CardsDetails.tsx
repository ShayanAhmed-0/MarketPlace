import { useEffect } from 'react';
import CartCard from './CartCard'

const getCart = async (uid:string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/UserCart/${uid}`, {
      method: "GET",
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await res.json();
    return result;
  } catch (error) {
    return { error: "An error occurred while fetching data" };
  }
};


const CardsDetails = async({uid}:string|any) => {
  const results=await getCart(uid)
  const res=results.data
  return (
    <div>
       <div className='space-y-10'>
      {
        res.length>0?
        res?.map((i:any)=>(<div className='m-20' key={i.product_id}><CartCard id={i.id} pid={i.product_id} quantity={i.quantity} size={i.size}/></div>))
        :
        <div className='flex justify-center h-[40vh]'>
        <h1 className='text-3xl'>Your Cart is Empty</h1>
        </div> 
      }
      </div>
    </div>
  )
}

export default CardsDetails
