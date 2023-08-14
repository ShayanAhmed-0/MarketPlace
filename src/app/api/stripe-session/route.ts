import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

async function createLineItem(item: any) {
  return {
    price_data: {
      currency: "pkr",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  };
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
      const lineItem = await createLineItem(body);
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1NeLHdSBay38KyVzzlXQ63F3" },
          { shipping_rate: "shr_1NeLGBSBay38KyVzYDbehpdZ" },
        ],
        invoice_creation: {
          enabled: true,
        },
        line_items: [lineItem],
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });

      return NextResponse.json({ session });
    
  } catch (err: any) {
    return NextResponse.json(err.message);
  }
}
