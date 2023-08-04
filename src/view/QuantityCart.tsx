"use client"
import React, { useState } from 'react'
import IncdecButton from './IncdecButton'
import AddToCart from '@/components/AddtoCart'

const QuantityCart = ({pID,pPrice}:{pID:string,pPrice:number}) => {
    const [number,setNumber]=useState(1)
    const [size,setSize]=useState("SM")
    const [styl,setStyl]=useState("outline-dotted outline-blue-300")
    const [styl1,setStyl1]=useState("outline-none")
    const [styl2,setStyl2]=useState("outline-none")
    const [styl3,setStyl3]=useState("outline-none")
    const [styl4,setStyl4]=useState("outline-none")

  return (
    <div>
          <div className="flex mt-4 gap-x-10">
            <button onClick={()=>{
               if(styl=="outline-none"){
                setStyl("outline-dotted outline-blue-300")
                setStyl1("outline-none")
                setStyl2("outline-none")
                setStyl3("outline-none")
                setStyl4("outline-none")
                setSize("XS")
            }
                }} className={`flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full ${styl}`}>
                XS
            </button>
              <button onClick={()=>{
               if(styl1=="outline-none"){
                   setStyl("outline-none")
                   setStyl1("outline-dotted outline-blue-300")
                   setStyl2("outline-none")
                   setStyl3("outline-none")
                   setStyl4("outline-none")
                   setSize("S")
               }
                }} className={`flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full ${styl1}`}>
                S
              </button>
              <button onClick={()=>{
                if(styl2=="outline-none"){
                    setStyl("outline-none")
                    setStyl1("outline-none")
                    setStyl2("outline-dotted outline-blue-300")
                    setStyl3("outline-none")
                    setStyl4("outline-none")
                    setSize("M")
                }
                }} className={`flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full ${styl2}`}>
                M
              </button>
              <button onClick={()=>{
                if(styl3=="outline-none"){
                    setStyl("outline-none")
                    setStyl1("outline-none")
                    setStyl2("outline-none")
                    setStyl3("outline-dotted outline-blue-300")
                    setStyl4("outline-none")
                    setSize("L")
                }
                }} className={`flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full ${styl3}`}>
                L
              </button>
              <button onClick={()=>{
                 if(styl4=="outline-none"){
                    setStyl("outline-none")
                    setStyl1("outline-none")
                    setStyl2("outline-none")
                    setStyl3("outline-none")
                    setStyl4("outline-dotted outline-blue-300")
                    setSize("XL")
                }
                }} className={`flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full ${styl4}`}>
                XL
              </button>
            </div>
       <div className="space-y-10">
              <IncdecButton number={number} setNumber={setNumber}/>
              <div className="flex items-center gap-x-4">
                <AddToCart pID={pID} quantity={number} size={size}/>
                <h1 className="text-2xl font-bold">${pPrice}</h1>
              </div>
            </div>
    </div>
  )
}

export default QuantityCart
