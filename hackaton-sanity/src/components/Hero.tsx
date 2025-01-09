import Image from "next/image";
import React from "react";
import ProductLogo from "./ProductLogo";
import Arrival from "./Arrival";
import TopSelling from "./TopSelling";
import localFont from "next/font/local";

const intergral = localFont({
  src: "../app/fonts/integralcf.otf",
  variable: "--font-integral",
});

const Hero = () => {
  return (
    <>
      <section className="relative grid min-h-screen w-full grid-cols-1 overflow-hidden bg-[#F2F0F1] px-4 md:px-8 lg:h-[87vh] lg:grid-cols-2 lg:px-28">
        {/* Decorative elements - Hidden on mobile */}
        <div className="absolute md:right-[9.5rem] md:top-[51px] z-[99] hidden animate-pulse md:block">
          <Image
            src="/image/star.png"
            alt="decorative star"
            width={50}
            height={50}
          />
        </div>
        <div className="absolute md:right-[45rem] md:top-56 z-[99] hidden animate-pulse md:block">
          <Image
            src="/image/star.png"
            alt="decorative star"
            width={50}
            height={50}
          />
        </div>
        <div className="absolute left-1/3 top-40 hidden h-[200px] w-[1px] -rotate-45 transform bg-gray-300/50 md:block"></div>
        <div className="absolute bottom-40 right-1/3 hidden h-[200px] w-[1px] -rotate-45 transform bg-gray-300/50 md:block"></div>

        <div className="flex flex-col justify-center gap-4 py-8 text-center lg:py-0 lg:text-left">
          <h1
            className={`${intergral.className} text-3xl font-extrabold uppercase md:text-4xl lg:text-5xl`}
          >
            Find Clothes <br />
            that matches <br />
            your style
          </h1>
          <p className="px-4 text-sm md:text-base lg:px-0 lg:text-lg">
            Browse through our diverse range of meticulously crafted garments,
            <br className="hidden lg:block" /> designed to bring out your
            individuality and cater to your sense of style.
          </p>
          <div className="mt-4 flex flex-row justify-center gap-4 lg:justify-start">
            <button className="rounded-full bg-black px-6 py-2 text-sm text-white transition-colors hover:bg-gray-800 md:px-8 md:py-3 md:text-base">
              Shop Now
            </button>
          </div>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 "
        >
          <div className="relative aspect-[4/5]  w-full md:aspect-[5/6] lg:aspect-[6/7]">
            <Image
              className="rounded-b-[30px] object-cover object-[center_35%]"
              style={{
                objectPosition: "50% 10%", // This centers horizontally and moves the image up
              }}
              src={
                "/image/hero.png"
              }
              fill
              sizes="(max-width: 640px) 90vw,
              (max-width: 768px) 80vw,
              (max-width: 1024px) 70vw,
              45vw"
              priority
              quality={100}
              alt="hero"
            />
          </div>
        </div>
      </section>
      <section>
        <ProductLogo />
        <Arrival />
        <TopSelling />
      </section>
    </>
  );
};

export default Hero;
