 import Image from 'next/image'
import React from 'react'
 import Logo from "/public/logo.webp"
 import {BsTwitter,BsFacebook,BsLinkedin} from "react-icons/bs"
 const Footer = () => {
   return (
<div>


     <div className='grid grid-cols-1 gap-5 wrapper md:grid-cols-4'>
       <div className='space-y-5'>
<Image src={Logo} alt="logo"/>
<h1 className=''>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</h1>
<div className='flex space-x-4'>
<BsTwitter/>
<BsFacebook/>
<BsLinkedin/>
</div>
       </div>

       <div className='space-y-5'>
        <h1 className='text-xl font-bold'>Company</h1>
        <h2>About</h2>
        <h2>Terms of Use</h2>
        <h2>Privacy Policy</h2>
        <h2>How it Works</h2>
        <h2>Contact Us</h2>
       </div>

       <div className='space-y-5'>
        <h1 className='text-xl font-bold'>Support</h1>
        <h2>Support Carrer</h2>
        <h2>24h Service</h2>
        <h2>Quick Chat</h2>
       </div>

       <div className='space-y-5'>
        <h1 className='text-xl font-bold'>Contact</h1>
        <h2>Whatsapp</h2>
        <h2>Support 24h</h2>
       </div>
     </div>


       <div className='flex justify-around p-4 mt-10 border-t border-black/60'>
        <h1>
       Copyright © 2022 Dine Market
        </h1>
<h1>
Design by. <span className='font-bold'>Weird Design Studio</span>
</h1>
<h1>
Code by. <span className='font-bold'>ShayanAhmed-0 on github</span>
</h1>
       </div>
</div>
   )
 }
 
 export default Footer
 