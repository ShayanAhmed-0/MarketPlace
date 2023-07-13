import { SignIn } from "@clerk/nextjs";

const page=()=> {
  return (
    <div className="absolute items-center justify-center bg-red-800">
    SHayan
  <SignIn/>
  </div>
    )
}
export default page;