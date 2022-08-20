import Link from 'next/link';
import React from 'react';

export default function Tag({
  text,
  count,
  image,
}: {
  text: string;
  count?: number;
  image?: string;
}) {
  return (
    <span className="flex items-center justify-center space-x-2 rounded-md p-4 text-sm drop-shadow transition duration-200 hover:-translate-y-1 hover:bg-overlay bg-surface  md:text-sm cursor-pointer">
      <img
        className={
          text === 'SQLServer' || text === '.Net Core 3.1/6'
            ? 'fill-current flex justify-center items-center text-gray-500 hover:text-gray-600 h-7 w-7'
            : 'fill-current flex justify-center items-center text-gray-500 hover:text-gray-600 h-6 w-6'
        }
        src={image}
        alt="tag"
      />
      <p>{text}</p>
    </span>
  );
}
