import { cookies } from 'next/headers';
import CardsDetails from '@/components/CardsDetails';

const Page = async () => {
  const user_id_cookie = cookies().get("user_id");
  let content;

  if (user_id_cookie) {
    const uid = user_id_cookie.value;
    content = <CardsDetails uid={uid} />;
  } else {
    content = 
    <div className='h-[30vh] items-center flex justify-center'> 
    <h1 className='text-xl md:text-6xl'>Your Cart is Empty</h1>;
    </div>
  }

  return (
    <div className='wrapper'>
      {content}
    </div>
  );
};

export default Page;
