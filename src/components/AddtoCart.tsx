import React from "react";
import { Button } from "./ui/button";
import { BiCart } from "react-icons/bi";
import { useToast } from "@/components/ui/use-toast";

const AddToCart = ({
  pID,
  quantity,
  size,
  title,
  price,
}: {
  pID: string;
  quantity: number;
  size: string;
  title: string;
  price: number;
}) => {
  const { toast } = useToast();

  const handleAddtocart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: pID,
        quantity: quantity,
        size: size,
      }),
    });
    const result = await res.json();
  };

  return (
    <div>
      <Button
        onClick={() => {
          handleAddtocart();
          toast({
            title: "Added To Cart",
            description: `Item:${title} of Size:${size} with Price:${price} and Quantity:${quantity} is added to the Cart`,
          });
        }}
        className="text-white bg-black gap-x-10"
      >
        <BiCart size={23} />
        <p>Add To Cart</p>
      </Button>
    </div>
  );
};

export default AddToCart;
