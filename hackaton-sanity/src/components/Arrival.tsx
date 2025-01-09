"use client";
import React, { useEffect, useState } from "react";
import ArraivalList from "./ArraivalList";
import { client } from "../../src/sanity/lib/client";
import Loader from "./Loader";

export type ArrivalDataType = {
  _id: number;
  name: string;
  price: number;
  discountPercentage: number;
  tags: string[];
  rating: number;
  imageUrl: string;
};
const Arrival = () => {
  const [arrivalData, setArrivalData] = useState<ArrivalDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
      try {
        setIsLoading(true);
        const res = await client.fetch(query);
        setArrivalData(res);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return (
      <Loader/>
    );
  }

  return (
    <>
      <section className="flex w-full flex-col items-center justify-center gap-10 px-20 py-16">
        <div>
          <h2 className="text-center text-4xl font-extrabold uppercase">
            New Arrivals
          </h2>
        </div>
        <div className="mt-10 flex w-full flex-row flex-wrap items-center justify-center gap-10">
          <ArraivalList data={arrivalData} />
        </div>
        {/* <div className='flex items-center justify-center rounded-full px-10 py-3 border-[1px] border-gray-700/10'>
        <p>view all</p>
      </div> */}
        <div className="flex items-center justify-center border-b border-neutral-600"></div>
      </section>
    </>
  );
};

export default Arrival;
