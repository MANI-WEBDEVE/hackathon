"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import HappyCustomers from "./HappyCustomers";
import ProductHappyCustomer from "./ProductHappyCustomer";

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("olive");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: "olive", class: "bg-olive-800" },
    { name: "navy", class: "bg-navy-800" },
    { name: "black", class: "bg-black" },
  ];

  const sizes = ["Small", "Medium", "Large", "X Large"];

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const productData = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PwSkNZuEpNHoUhWJRCYDcRS4LtWawCWpXaS68hDv2IS33ta5lFCZiCcFpvkNO7ncNrY9Y2exa1AzHJM3BRy0Lfng30cBG787Xiq1rmYy25J-PQdfisKietiEtTTQYoN0ssFYJfWlX9Le60-dHNYeBSI4hQJqJYzuFpojY-EkEWcl4vsC3ffsoJxDU0eFB9YaTQ0WNyswsYMe~3fzJ-KM2s3fRhadwXMoPR3lc9xg8Gy1NsLslrVY6RkhMVASlWJ6IRxix7DtKiTpJe8JK66YgyyGzKR6Z~ZfJpH62z0Cz3Hpcv3mulfXqoIYE1HfUPRdWKzZh8lPvOWhGJyOcFvE-w__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/51c4/5a78/b417beff6f8fa6310534f3755fd23c5a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCR12hX19GOL128neDSv~AqvVH4YKlD5sumo0PhggWrJruaLjeBR37FTDJoJfmJOmuDdabI2w-IeIqzUQZhNpjvvch3TyineDSYmhWrf48323dUGhozaTZVhLRi6M3E~HMf-3cIZAr7UUdnyk8p7eXz6o6abLI4m7W6Chv66PXMZJFWrhHF98wRj8s95aVHECWxsXNBMXmW7YrjZlzozTO-lEyLwPcaOG0Jo6UQQrnnUCTXg95tFHhJXFlHoYXKa98anrxIOion7p1BJQ04lSTDbXQDJmr5Ynx2O6~gLlg5Bg8mTW3-qJUxAHYshgtOUKw1P0yHOvtEpX6tP0QnMTA__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/52ce/3b46/9d8d7ff6e33f95a574450e07218fc909?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZu7rdHCUdOpj~dOuSdey2Wknxur0p7~P8GP1y8ILnRMG9wTJNNFR1wtfkv2XC6AA0SMbicjYV9qdt7Avu2VYZLsHbZjuOMefSBcKWwBSdjGLTnZqS2CJzTlKxmLfSQWkr52DmZj4ebGnCaHIDa2snL3ZxAdE1jrTaQ8NivkxYteJaSLtJuzsu3meFd1JFWhZ2efDLYyT1bpt0ZVjSmCs5~zoW4WBZ3rVP4cyKt04kmX8PX7J4sUIhidK4tmL6rPqnVQfoDOYaGc1njdmPfuoqTfexOUq9kCQggV4XhHd2xpzvVbtKAIyveWyMwPwS0MWR8OdyTnKxlU-BSMF9zfuA__",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/52ce/3b46/9d8d7ff6e33f95a574450e07218fc909?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hZu7rdHCUdOpj~dOuSdey2Wknxur0p7~P8GP1y8ILnRMG9wTJNNFR1wtfkv2XC6AA0SMbicjYV9qdt7Avu2VYZLsHbZjuOMefSBcKWwBSdjGLTnZqS2CJzTlKxmLfSQWkr52DmZj4ebGnCaHIDa2snL3ZxAdE1jrTaQ8NivkxYteJaSLtJuzsu3meFd1JFWhZ2efDLYyT1bpt0ZVjSmCs5~zoW4WBZ3rVP4cyKt04kmX8PX7J4sUIhidK4tmL6rPqnVQfoDOYaGc1njdmPfuoqTfexOUq9kCQggV4XhHd2xpzvVbtKAIyveWyMwPwS0MWR8OdyTnKxlU-BSMF9zfuA__",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-4 md:px-8 lg:px-16 py-4 text-sm">
        <span className="text-gray-500">Home</span>
        <MdKeyboardArrowRight className="text-gray-500" />
        <span className="text-gray-500">Shop</span>
        <MdKeyboardArrowRight className="text-gray-500" />
        <span className="text-gray-500">Men</span>
        <MdKeyboardArrowRight className="text-gray-500" />
        <span>T-shirts</span>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 py-4">
        {/* Image Gallery */}
        <div className="space-y-0 md:space-y-4 w-full flex flex-col-reverse md:flex-row gap-10 items-start ">
          <div className="w-full  grid grid-rows-1 grid-cols-4 md:w-[20%] md:grid-cols-1 md:grid-rows-4 gap-2 items-center justify-center ">
            {productData.map((img, index) => (
              <div
                key={index}
                className="relative border border-gray-200 rounded-lg cursor-pointer hover:border-gray-400 w-full h-[100px] flex items-center justify-center mt-4"
              >
                <Image
                  src={`${img.image}`}
                  alt={`Product view ${img}`}
                  className="object-cover w-full h-full"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
          <div className=" w-full relative border border-gray-200 rounded-lg ">
            <Image
              src="https://s3-alpha-sig.figma.com/img/21d6/bcec/533545a2b1e10e90b8059bc1bc97eab5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PwSkNZuEpNHoUhWJRCYDcRS4LtWawCWpXaS68hDv2IS33ta5lFCZiCcFpvkNO7ncNrY9Y2exa1AzHJM3BRy0Lfng30cBG787Xiq1rmYy25J-PQdfisKietiEtTTQYoN0ssFYJfWlX9Le60-dHNYeBSI4hQJqJYzuFpojY-EkEWcl4vsC3ffsoJxDU0eFB9YaTQ0WNyswsYMe~3fzJ-KM2s3fRhadwXMoPR3lc9xg8Gy1NsLslrVY6RkhMVASlWJ6IRxix7DtKiTpJe8JK66YgyyGzKR6Z~ZfJpH62z0Cz3Hpcv3mulfXqoIYE1HfUPRdWKzZh8lPvOWhGJyOcFvE-w__"
              alt="Product main"
              width={200}
              height={200}
              className="object-cover w-full h-[478px]"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <span className="text-gray-500">4.5/5</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold">$260</span>
            <span className="text-gray-500 line-through">$300</span>
            <span className="text-red-500">-40%</span>
          </div>

          <p className="text-gray-600">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color Selection */}
          <div>
            <h3 className="font-medium mb-2">Select Colors</h3>
            <div className="flex gap-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full ${color.class} ${
                    selectedColor === color.name
                      ? "ring-2 ring-offset-2 ring-black"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-medium mb-2">Choose Size</h3>
            <div className="flex flex-wrap gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4">
            <div className="flex items-center border border-gray-300 rounded-full">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-4 py-2 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-4 py-2 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button className="flex-1 bg-black text-white py-2 px-8 rounded-full hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>

          {/* Tabs */}
        </div>
      </div>
      <div className="border-b border-gray-200 w-full flex items-center justify-between gap-4 mt-10 px-10">
        <div className="flex gap-8 justify-between px-10 w-full">
          <button className="w-full text-gray-500 pb-2 font-medium text-sm md:text-xl">
            Product Details
          </button>
          <button className="w-full border-b-2 border-black  pb-2 font-medium text-sm md:text-xl">
            Rating & Reviews
          </button>
          <button className="w-full text-gray-500 pb-2 font-medium text-sm md:text-xl">FAQs</button>
        </div>
      </div>
      <div>
        <ProductHappyCustomer />
      </div>
    </div>
  );
};

export default ProductPage;
