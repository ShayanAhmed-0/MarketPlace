import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import ProductCard from "@/components/ProductCard";

const page = async ({ params }: { params: { type: string } }) => {

    const getProductData = async () => {
    if(params.type == "All-Products"){
            const res = await client.fetch(
              `*[_type=="product"]{   
                image,
                id,
                price,
                title,           
                }`
            );
            return res;
        }
        else{
            const res = await client.fetch(
              `*[_type=="product" && category -> name == "${params.type}"]{
                image,
                  id,
                  price,
                  title,
              }`
            );
            return res;
        }
};
  

interface IProduct {
  image:IImage;
  price: number;
  title: string;
  id: number;
}

    const data:IProduct[]=await getProductData()
    return (
     <div className="wrapper">
     <h1 className="flex justify-center text-xl font-bold">{params.type}</h1>
     <div className='grid justify-center grid-cols-[auto,auto] sm:grid-cols-[auto,auto,auto] mx-6 gap-10 mb-20 mt-20 '>
        {data.map((item) => (
         <div key={item.id}>
          <ProductCard item={item}/>
         </div>
        ))}
        </div>
     </div>
    )
}

export default page
