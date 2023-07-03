import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import ProductCard from "@/components/ProductCard";

const page = async ({ params }: { params: { id: string } }) => {
  const getProductData = async () => {
    const res = await client.fetch(
      `*[_type=="product" && id == ${params.id}]{
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

  const data: IProduct[] = await getProductData();
  const res = data[0]
  return (
    <div>
        {res.category.name}
        <Image src={urlForImage(res.image).url()}
        alt="Card Image"
        width={400}
        height={300}
        />
     <h1>
     {res.title}
     </h1>
     <h2>
     {res.description}
     </h2>
        <h3>
     {res.price}
        </h3>
            
    </div>
  );
};

export default page;
