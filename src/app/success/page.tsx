import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center'>
        <h1>DimeMart</h1>
      <h1>Thanks For Shopping</h1>
      <Link href='/'>
      <Button className='text-white bg-black rounded-xl'>Go Back To Shopping</Button>
      </Link>
    </div>
  )
}

export default page
