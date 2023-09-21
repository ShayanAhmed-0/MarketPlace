"use client";
import getStripePromise from "@/lib/stripe";
import { useRouter } from "next/navigation";
import {MdDeleteForever} from "react-icons/md"




const StripeCheckOutButton = ({quantity,price,name,size,id}:any) => {
  const router = useRouter()
  const handleDel = async (id:any) => {
    try {
      const res = await fetch(`/api/UserCart/id/${id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      router.refresh()
    } catch (error) {
      console.log("Delete handle");
    }
  
  }
  const handleCheckout = async () => {
    handleDel(id)
    const stripe = await getStripePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify({
        name:name,
        price:price,
        quantity:quantity,
        size:size
      }),
    });

   

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({sessionId:data.session.id})
    } 
  };

  
  return (
    <div className="flex items-center gap-1 sm:gap-4">
      <button
        className="px-3 py-3 text-white duration-500 bg-black rounded-xl hover:scale-125"
      onClick={handleCheckout}
        >
        Check out
      </button>
      <button
        className="text-gray-400 duration-500 hover:text-red-600 hover:animate-pulse hover:scale-125"
        onClick={()=>handleDel(id)}
      >
        <MdDeleteForever size={25}/>
      </button>
    </div>
  );
};

export default StripeCheckOutButton;