"use client";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    verified: true,
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    verified: true,
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of taste and occasions.",
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    verified: true,
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of taste and occasions.",
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    verified: true,
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of taste and occasions.",
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    verified: true,
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of taste and occasions.",
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    verified: true,
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

interface HappyCustomersProps {
  tags: string[];
}

type ProductCategoryType = {
  _id: number;
  name: string;
  price: number;
  discountPercentage: number;
  tage: string[];
  rating: number;
  image: string;
};

const HappyCustomers: React.FC<HappyCustomersProps> = ({ tags }) => {
  const query = `*[_type == "product" && "${tags[0]}" in tags]{
              _id,
              name,
              price,
              discountPercentage,
              tags,
              rating,
              image
      }
    `;

  const [productCategory, setProductCategory] = useState<ProductCategoryType[]>(
    [],
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await client.fetch(query);
        setProductCategory(res);
        console.log(res)
      } catch (err) {
        console.log(err);
      } 
    };
    getData();
  }, [tags[0]]);

  return (
    <section className="w-full px-4 py-10 sm:px-8 sm:py-16 md:px-16 lg:px-28 lg:py-20">
     
      
      <div className="mt-10 flex w-full flex-col items-center justify-center">
        <h2 className="mb-7 text-center text-4xl font-extrabold uppercase">
          You Might Also Like
        </h2>
        <div className="mt-10 flex w-full flex-row flex-wrap items-center justify-center gap-10">
          <div className="w-full">
            <div className="scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
              {productCategory.map((item: any) => (
                  <div
                  key={item._id}
                  className="flex w-[280px] flex-shrink-0 snap-start flex-col items-center justify-center rounded-xl bg-gray-50/50 p-3 transition-all duration-300 hover:shadow-md sm:w-full"
                  >
                    <Link href={`/product/${item._id}`}>
                    {productCategory.length > 0 && item.image && (

                    <div className="mb-3 flex w-full justify-center">
                    <Image
                      src={urlFor(item.image as string).url() as string}
                      alt="arraival-image"
                      width={200}
                      height={200}
                      className="h-[200px] w-full max-w-[200px] rounded-lg object-cover transition-all hover:scale-110"
                      />
                  </div>
                    )}
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
                      <p className="text-lg font-bold text-black">
                        ${item.price}
                      </p>
                      <p className="text-base font-medium text-gray-500 line-through">
                        ${item.price}
                      </p>
                      <p className="rounded-full bg-red-400/30 px-2 py-1 text-xs uppercase text-red-400">
                        -{item.discountPercentage}%
                      </p>
                    </div>
                  </div>
                </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-4 lg:mb-10">
        <h2 className="flex items-center gap-3 text-center text-2xl font-extrabold sm:text-left sm:text-3xl lg:text-4xl">
          All Reviews
          <span className="mt-3 text-center text-lg font-light text-gray-700/50">
            (451)
          </span>
        </h2>
        <div className="flex gap-3 sm:gap-4">
          <div className="flex items-center justify-center rounded-full bg-black px-3 py-2 md:px-4 md:py-4">
            <GiSettingsKnobs className="h-4 w-4 invert md:w-6" />
          </div>
          <div>
            <button className="flex items-center gap-2 rounded-full border-[1px] border-black px-6 py-3 text-black transition-colors hover:bg-black hover:text-white">
              Latest
              <span>
                <IoIosArrowDown className="h-4 w-4" />
              </span>
            </button>
          </div>
          <div>
            <button className="rounded-full bg-black px-8 py-3 text-white transition-colors hover:bg-gray-800">
              Write a Review
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Single column, Tablet: 2 columns, Desktop: 3 columns */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {reviews.map((review) => (
        <></>
        ))}
      </div>
    </section>
  );
};

export default HappyCustomers;
