import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import ProductCard from "@/components/ProductCard";

const page = async ({ params }: { params: { type: string } }) => {

    const getProductData = async () => {
    if(params.type == "All"){
            const res = await client.fetch(
              `*[_type=="product"]{
                    id,
                    price,
                    _id,
                    description,
                    title,
                    image,
                    category -> {
                      name
                    }
                  }`
            );
            return res;
        }
        else{
            const res = await client.fetch(
              `*[_type=="product" && category -> name == "${params.type}"]{
                    id,
                    price,
                    _id,
                    description,
                    title,
                    image,
                    category -> {
                      name
                    }
                  }`
            );
            return res;
        }
};
  

  interface IProduct {
    id: number;
    price: number;
    _id: string;
    description: string;
    title: string;
    image: IImage;
    category: {
      name: string;
    };
  }

    const data:IProduct[]=await getProductData()
    return (
     <>
     <h1>{params.type}</h1>
     <div className='grid justify-center grid-cols-[auto,auto,auto] gap-10'>
        {data.map((item) => (
         <div key={item.id}>
          <ProductCard item={item}/>
         </div>
        ))}
        </div>
     </>
    )
}

export default page
