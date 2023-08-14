"use client"
import React, { useState } from 'react'
import IncdecButton from './IncdecButton'
import AddToCart from '@/components/AddtoCart'

const QuantityCart = ({pID,pPrice,title}:{pID:string,pPrice:number,title:string}) => {
    const [number,setNumber]=useState(1)
    const [size,setSize]=useState("SM")
    const [styl,setStyl]=useState("outline-dotted outline-blue-300 outline-2 bg-black text-gray-200")
    const [styl1,setStyl1]=useState("outline-none bg-gray-200 text-black")
    const [styl2,setStyl2]=useState("outline-none bg-gray-200 text-black")
    const [styl3,setStyl3]=useState("outline-none bg-gray-200 text-black")
    const [styl4,setStyl4]=useState("outline-none bg-gray-200 text-black")

  return (
    <div>
          <div className="flex mt-4 gap-x-10 ">
            <button onClick={()=>{
               if(styl=="outline-none bg-gray-200 text-black"){
                setStyl("outline-dotted outline-blue-300 outline-2 bg-black text-gray-200")
                setStyl1("outline-none bg-gray-200 text-black")
                setStyl2("outline-none bg-gray-200 text-black")
                setStyl3("outline-none bg-gray-200 text-black")
                setStyl4("outline-none bg-gray-200 text-black")
                setSize("XS")
            }
                }} className={`flex items-center justify-center w-10 h-10  rounded-full ${styl}`}>
                XS
            </button>
              <button onClick={()=>{
               if(styl1=="outline-none bg-gray-200 text-black"){
                   setStyl("outline-none bg-gray-200 text-black")
                   setStyl1("outline-dotted outline-blue-300 outline-2 bg-black text-gray-200")
                   setStyl2("outline-none bg-gray-200 text-black")
                   setStyl3("outline-none bg-gray-200 text-black")
                   setStyl4("outline-none bg-gray-200 text-black")
                   setSize("S")
               }
                }} className={`flex items-center justify-center w-10 h-10 b rounded-full ${styl1}`}>
                S
              </button>
              <button onClick={()=>{
                if(styl2=="outline-none bg-gray-200 text-black"){
                    setStyl("outline-none bg-gray-200 text-black")
                    setStyl1("outline-none bg-gray-200 text-black")
                    setStyl2("outline-dotted outline-blue-300 outline-2 bg-black text-gray-200")
                    setStyl3("outline-none bg-gray-200 text-black")
                    setStyl4("outline-none bg-gray-200 text-black")
                    setSize("M")
                }
                }} className={`flex items-center justify-center w-10 h-10 rounded-full ${styl2}`}>
                M
              </button>
              <button onClick={()=>{
                if(styl3=="outline-none bg-gray-200 text-black"){
                    setStyl("outline-none bg-gray-200 text-black")
                    setStyl1("outline-none bg-gray-200 text-black")
                    setStyl2("outline-none bg-gray-200 text-black")
                    setStyl3("outline-dotted outline-blue-300 outline-2 bg-black text-gray-200")
                    setStyl4("outline-none bg-gray-200 text-black")
                    setSize("L")
                }
                }} className={`flex items-center justify-center w-10 h-10  rounded-full ${styl3}`}>
                L
              </button>
              <button onClick={()=>{
                 if(styl4=="outline-none bg-gray-200 text-black"){
                    setStyl("outline-none bg-gray-200 text-black")
                    setStyl1("outline-none bg-gray-200 text-black")
                    setStyl2("outline-none bg-gray-200 text-black")
                    setStyl3("outline-none bg-gray-200 text-black")
                    setStyl4("outline-dotted outline-blue-300 outline-2 bg-black text-gray-200")
                    setSize("XL")
                }
                }} className={`flex items-center justify-center w-10 h-10  rounded-full ${styl4}`}>
                XL
              </button>
            </div>
       <div className="space-y-10">
              <IncdecButton number={number} setNumber={setNumber}/>
              <div className="flex items-center gap-x-4">
                <AddToCart title={title} price={pPrice} pID={pID} quantity={number} size={size}/>
                <h1 className="text-2xl font-bold">${pPrice}</h1>
              </div>
            </div>
    </div>
  )
}

export default QuantityCart
