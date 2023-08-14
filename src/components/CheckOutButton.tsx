"use client";
import getStripePromise from "@/lib/stripe";
import {MdDeleteForever} from "react-icons/md"

const StripeCheckOutButton = ({quantity,price,name,size,id}:any) => {
  const handleCheckout = async () => {
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

  const handleDel = async () => {
    try {
      const res = await fetch(`/api/UserCart/id/${id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
    } catch (error) {
      console.log("Delete handle");
    }
  }

  return (
    <div className="flex items-center gap-4">
      <button
        className="px-3 py-3 text-white duration-500 bg-black rounded-xl hover:scale-125"
      onClick={handleCheckout}
        >
        Check out
      </button>
      <button
        className="text-gray-400 duration-500 hover:text-red-600 hover:animate-pulse hover:scale-125"
        onClick={handleDel}
      >
        <MdDeleteForever size={25}/>
      </button>
    </div>
  );
};

export default StripeCheckOutButton;