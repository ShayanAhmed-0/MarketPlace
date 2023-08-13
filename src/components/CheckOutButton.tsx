"use client";
import getStripePromise from "@/lib/stripe";
import { loadStripe } from "@stripe/stripe-js";

const StripeCheckOutButton = ({quantity,price,name}:any) => {
  const handleCheckout = async () => {
    const stripe = await getStripePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify({
        name:name,
        price:price,
        quantity:quantity
      }),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({sessionId:data.session.id})
    } 
  };

  return (
    <div className="py-5">
      <button
        className="px-3 py-3 bg-green-500 rounded-md"
        onClick={handleCheckout}
      >
        Check out
      </button>
    </div>
  );
};

export default StripeCheckOutButton;