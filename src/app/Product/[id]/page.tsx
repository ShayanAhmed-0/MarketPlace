import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import QuantityCart from "@/view/QuantityCart";

// Define the type for the product image object
interface IProductImage extends IImage {
  _type: string;
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

// Define the type for the product data
interface IProduct {
  productImage: IImage[];
  price: number;
  title: string;
  type: string;
  _id:string;
  id: number;
  category: {
    name: string;
  };
  productcare: string[];
  description: string;
}

interface ImageAsset {
  _ref: string;
  _type: "reference";
}

interface ImageItem {
  _type: "image";
  _key: string;
  asset: ImageAsset;
}
// Define the page component
const Page = async ({ params }: { params: { id: string } }) => {

  const getProductData = async () => {
    const res = await client.fetch(
      `*[_type=="product" && id == ${params.id}]{
        type,
        id,
        price,
        _id,
        description,
        productcare,
        title,
        image,
        category -> {
          name
        },
        productImage
      }`
    );
    return res;
  };

  const data: IProduct[] = await getProductData();
  const res = data[0];

  return (
    <div className="wrapper">
      <h1 className="flex justify-center text-2xl">
        category:<span className="font-bold">{res.category.name}</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex justify-center gap-4 mx-4">
          <div className="space-y-4">
            {res.productImage.map((item: ImageItem | any) => (
              <div key={item._key}>
                <Image
                  className=""
                  src={urlForImage(item).url()}
                  alt="Card Image"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
          <div className="w-full">
            <Image
              className="h-[80vh]"
              src={urlForImage(res.productImage[0]).url()}
              alt="Card Image"
              width={600}
              height={400}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-3xl font-semibold">{res.title}</h1>
            <h2 className="text-xl text-gray-400 ">{res.type}</h2>
            <h3 className="mt-4">SELECT SIZE</h3>
          
           <QuantityCart pID={res._id} pPrice={res.price} title={res.title}/>
          </div>
        </div>
      </div>

      <div className="flex justify-center max-w-screen-lg mx-auto mt-10 ">
        <div className="space-y-10">
          <div>
            <h1 className="text-xl font-semibold">Product Information</h1>
          </div>
          <hr className="h-0.5 bg-gray-400" />

          <div className="space-y-6">
            <div className="grid grid-cols-2">
              <h1>PRODUCT DETAILS</h1>
              <p>{res.description}</p>
            </div>

            <div className="grid grid-cols-2">
              <h1>PRODUCT Care</h1>
              <ul className="ml-6">
                {res.productcare.map((items) => {
                  return <li key={items} className="font-semibold list-disc">{items}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
