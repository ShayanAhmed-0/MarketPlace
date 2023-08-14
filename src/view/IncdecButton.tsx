"use client";
import React from "react";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";

interface IncdecButtonProps {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
}

const IncdecButton: React.FC<IncdecButtonProps> = ({ number, setNumber }) => {
  return (
    <div className="flex items-center mt-10 gap-x-4">
      <h1 className="text-xl font-bold">Quantity:</h1>
      <button
        className="p-2 pl-4 pr-4 bg-blue-300 rounded-2xl"
        onClick={() => {
          number > 1 ? setNumber(number - 1) : setNumber(1);
        }}
      >
        <GrSubtract />
      </button>

      <h1 className="flex text-2xl font-bold">{number}</h1>

      <button
        className="p-2 pl-4 pr-4 bg-blue-300 rounded-2xl"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        <GrAdd />
      </button>
    </div>
  );
};

export default IncdecButton;
