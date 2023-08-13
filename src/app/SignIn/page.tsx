import { SignIn } from "@clerk/nextjs";

const page=()=> {
  return (
    <div className="items-center justify-center">
  <SignIn/>
  </div>
    )
}
export default page;
