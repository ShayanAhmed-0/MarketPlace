import Image from "next/image";
import feature from "/public/feature.webp";
import { Button } from "../../components/ui/button";

const Hero2 = () => {
  return (
    <div className="mt-10">
      {/* heading */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div></div>
          <h1 className="text-5xl font-bold">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>
      </div>

      {/* 3grid cols */}

      <div className="grid grid-cols-1 gap-10 mt-4 md:grid-cols-2">
        <div className="flex items-center justify-center space-y-10">
          {/* 4cols of details */}
          <div className="space-y-20">
            <div className="flex space-x-10">
              {/* col1*/}
              <div>
                <h1 className="text-xl font-semibold">rent from others Using Good Quality Materials</h1>
                <h2>Lorem ipsum dolor sit amt, consectetur adipiscing elit</h2>
              </div>
              {/* col2 */}
              <div>
                <h1 className="text-xl font-semibold">100% Handmade Products</h1>
                <h2>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</h2>
              </div>
            </div>

            <div className="flex space-x-10">
              {/* col1*/}
              <div>
                <h1 className="text-xl font-semibold">Modern Fashion Design</h1>
                <h2>Lorem ipsum dolor sit amt, consectetur adipiscing elit</h2>
              </div>
              {/* col2 */}
              <div>
                <h1 className="text-xl font-semibold">
                  Discount for Bulk Orders
                </h1>
                <h2>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex justify-center">
              <Image src={feature} alt="Image" />
            </div>

            <div className="flex items-center">
              <div>
                <h1>
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
                </h1>
              <Button className="mt-10 text-white bg-black">See All Product</Button>
              </div>
            </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default Hero2;
