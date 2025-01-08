"use client";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";

import { client } from "../../src/sanity/lib/client";
import {urlFor} from "@/sanity/lib/image";

type ArrivalDataType ={
  _id: number
  name: string
  price:number
  discountPercentage:number
  tage:string[]
  rating:number
  imageUrl:string
}

const ArraivalList = () => {
  const [arrivalData, setArrivalData] = useState<ArrivalDataType[]>([]);
  const query = `*[_type == "product" && "women's clothing" in tags]{
            _id,
            name,
            price,
            discountPercentage,
            tags,
            rating,
          "imageUrl": image
        }`;

  useEffect(() => {
    const getData = async () => {
      const res = await client.fetch(query);
      setArrivalData(res)
    };
    getData();
  }, []);
  return (
    <div className="w-full">
      <div className="scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
        {arrivalData.map((item) => (
          <div
            key={item._id}
            className="flex w-[280px] flex-shrink-0 snap-start flex-col items-center justify-center rounded-xl bg-gray-50/50 p-3 transition-all duration-300 hover:shadow-md sm:w-full"
          >
            <div className="mb-3 flex w-full justify-center">
              <Image
                src={urlFor(item.imageUrl as string).url() as string}
                alt="arraival-image"
                width={200}
                height={200}
                className="h-[200px] w-full max-w-[200px] rounded-lg object-cover transition-all hover:scale-110"
              />
            </div>
            <div className="w-full text-center">
              <p className="line-clamp-2 flex min-h-[50px] items-center justify-center text-base font-semibold sm:text-lg">
                {item.name}
              </p>
              <div className="mt-2 flex items-center justify-center gap-2 text-yellow-600">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`h-4 w-4 ${index < item.rating ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <p className="ml-1 text-sm text-black">{item.rating}/5</p>
               </div>
              <div className="mt-2 flex items-center justify-center gap-3">
                <p className="text-lg font-bold text-black">${item.price}</p>
                <p className="text-base font-medium text-gray-500 line-through">
                  ${item.price}
                </p>
                <p className="rounded-full bg-red-400/30 px-2 py-1 text-xs uppercase text-red-400">
                  -{item.discountPercentage}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArraivalList;
