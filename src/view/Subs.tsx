import { Button } from "@/components/ui/button";
const Subs = () => {
  return (
    <div className="flex items-center justify-center h-96">
      <div className="">
        <h1 className="flex justify-center text-2xl font-bold">
          Subscribe Our Newsletter
        </h1>
        <h2 className="flex justify-center my-5 ">
          Get the latest information and promo offers directly
        </h2>
        <div className="flex justify-center">
          <input
            className="border-2 "
            type="text"
            placeholder="Input Email Address"
          />
          <Button className="hidden text-white bg-black sm:flex">Get Started</Button>
        </div>
        <div className="flex justify-center sm:hidden">
          <Button className="justify-center mt-4 text-white bg-black ">Get Started</Button>
        </div>
          
      </div>
    </div>
  );
};

export default Subs;
