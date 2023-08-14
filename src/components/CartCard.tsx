import Image from 'next/image';
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from '../../sanity/lib/image'
import CheckOutButton from './CheckOutButton';

interface IProduct {
    image:IImage;
    price: number;
    title: string;
    _id: string;
    quantity:number;
    id:number;
    size:string

}

const Card=({id,_id,image,price,title,quantity,size}:IProduct)=>{
    const img= urlForImage(image).url();
    return(
        <div className='flex gap-4'>
            <Image src={img} alt='img' width={100} height={200}/>
            <div className='flex items-center'>
                <div>
            <h1>Title: {title}</h1>
            <h1>Price: {price}</h1>
            <h1>size: {size}</h1>
            <h1>Quantity: {quantity}</h1>
            <h1>total:{quantity*price}</h1>
                </div>
            </div>
        </div>
    )
}
const CartCard = async({id,pid,quantity,size}:any) => {

    const getCartData = async () => {
        const res = await client.fetch(
                  `*[_type=="product" && _id == "${pid}"]{
                    id,
                    type,
                    price,
                    title,
                    image,
                    category -> {
                      name
                    },
                  }`
                );
                return res;
                }
      const data:IProduct[]=await getCartData()
  return (
    <div className=''>
        <div>
            {
                data && data.map((i)=>{
                    return(
                        <div key={i.id} className='flex justify-between'>
                    <Card id={i.id} _id={i._id} image={i.image} price={i.price} title={i.title} quantity={quantity} size={size}/>
                    <div className='flex items-center'>
                    <CheckOutButton quantity={quantity} price={i.price} name={i.title} size={size} id={id}/>
                    </div>
                </div>
                    )
                })
            }
            {
                !data && <h1>Your Cart is Empty</h1>
            }
        </div>
    </div>
  )
}

export default CartCard

