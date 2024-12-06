import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


 

const Hero = () => {
  return (
    <>
     <section className='w-full   flex  justify-center '>
            <div className=" border-r w-[20%] border-black row-span-2 ">
            <ul className='w-full flex flex-col gap-2 pl-3 mt-10'>
                <div className='w-full flex items-center justify-between '>
                <li>Women Feshion</li>
                <ChevronRight className="pr-3 " style={{height: "20px", width: "38px"}}/>
                </div>
                <div className='w-full flex items-center justify-between '>
                <li>Men Feshion</li>
                <ChevronRight className="pr-3 " style={{height: "20px", width: "38px"}}/>
                </div>
               
                <li>Electronics</li>
                <li>Home & Life style</li>
                <li>Medican</li>
                <li>Sports & Outdoor</li>
                <li>Baby & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
            </ul>
            </div>
            <div className="bg-black w-[58%] flex items-center justify-between text-white my-6 ml-[1.25rem]">
            <div className='flex items-start justify-center flex-col px-10 mb-10'>
            <div className='flex items-center justify-start gap-3'>
                <Image src={'https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJWDd4AmwiK02Qq6mtITqGXplLqnnp2igmkcWWkZera~Nm4PERbN8G52~hpPony9UX3WRfwOpwkcUFyCKEOatXvPkUfdg~o8UTRwCUcxgERbG7Llb3OU-4DmPDTNn-RNpvSEEOxwaWbXdNpcuR~CxH9wf7Zm8DKHX0JPnDCTMwC6ktdG6QxGUlArDV4JJ2FCI7RsTDO6o9GMCK6RRKGwbaPDuFusCiz4yKL5Qbo2bQkT3PF~ca8C~BysW3ggBG7jyxDjVGsyO2m~1VZU~5V5r9ipCOCgkOeDOTbpPaJCixsdOhRsjuXjK8lfF7vZAD3pqeICH32gaZi8f2FhiNLHDg__'} width={50} height={50} alt='hero'/>
                <p className='text-sm'>iPhone 14 Series</p>
            </div>
            <div className='mt-3 mb-3'>
                <h1 className='text-4xl font-bold leading-[50px]'>Up to 10%<br/> off Voucher</h1>
            </div>
            <div>
                <Link href={"#"}>Shop Now</Link>
            </div>
        </div>
            <div className='mt-3'>
                <Image src={"https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jkWowBZIoL3QE889P6PPJBzfqSZ7nwVyxEEGw4LQlGhVvKZy859mLThbCOiEf-V2Mye3Ci27LWe1FSSYRLBJJn31EouEC5RyEeOKwFF1L3d5j4-dRMQ9vlVHqVUQSfPqXzb5pT4jCTc9WpjdEccPUro5adOQrAJwJ6XYPL82q4nW5AYn1ymglIA3kbxLvcAEwEjkdUwT~PXbwN~1fW1pHWSoT~mVcT1Gx-LiWDEZKk92ISdB9lEKSdV7iCI9G3o7f53-KKvCxlr1eIcBvclXUD1X-KbTgZYcVa02WwmZABiN7dkWysIC4fOs29E8DfwD5Cc1VUWalTIWG2dilMHR6A__"} width={400} height={400} alt='hero'/>
            </div>
            </div>
     </section>
    </>
  )
}

export default Hero

/*  <section className='w-full h-full flex items-center justify-center px-10 py-3 m-6'>
        <div className='w-[30%] h-full flex justify-center  border-r border-black/15'>
            <ul className='w-full flex flex-col gap-2 pl-10 '>
                <div className='w-full flex items-center justify-between '>
                <li>Women Feshion</li>
                <ChevronRight className="pr-3 " style={{height: "20px", width: "38px"}}/>
                </div>
                <div className='w-full flex items-center justify-between '>
                <li>Men Feshion</li>
                <ChevronRight className="pr-3 " style={{height: "20px", width: "38px"}}/>
                </div>
               
                <li>Electronics</li>
                <li>Home & Life style</li>
                <li>Medican</li>
                <li>Sports & Outdoor</li>
                <li>Baby & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
            </ul>
        </div>
        <div className='w-[70%] ml-10 flex items-center justify-between p-4 bg-black px-10'>
        <div className=''>
            <div>
                <Image src={'https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJWDd4AmwiK02Qq6mtITqGXplLqnnp2igmkcWWkZera~Nm4PERbN8G52~hpPony9UX3WRfwOpwkcUFyCKEOatXvPkUfdg~o8UTRwCUcxgERbG7Llb3OU-4DmPDTNn-RNpvSEEOxwaWbXdNpcuR~CxH9wf7Zm8DKHX0JPnDCTMwC6ktdG6QxGUlArDV4JJ2FCI7RsTDO6o9GMCK6RRKGwbaPDuFusCiz4yKL5Qbo2bQkT3PF~ca8C~BysW3ggBG7jyxDjVGsyO2m~1VZU~5V5r9ipCOCgkOeDOTbpPaJCixsdOhRsjuXjK8lfF7vZAD3pqeICH32gaZi8f2FhiNLHDg__'} width={50} height={50} alt='hero'/>
                <p>iPhone 14 Series</p>
            </div>
            <div>
                <h1>Up to 10% off Voucher</h1>
            </div>
            <div>
                <Link href={"#"}>Shop Now</Link>
            </div>
        </div>
            <div>
                <Image src={"https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jkWowBZIoL3QE889P6PPJBzfqSZ7nwVyxEEGw4LQlGhVvKZy859mLThbCOiEf-V2Mye3Ci27LWe1FSSYRLBJJn31EouEC5RyEeOKwFF1L3d5j4-dRMQ9vlVHqVUQSfPqXzb5pT4jCTc9WpjdEccPUro5adOQrAJwJ6XYPL82q4nW5AYn1ymglIA3kbxLvcAEwEjkdUwT~PXbwN~1fW1pHWSoT~mVcT1Gx-LiWDEZKk92ISdB9lEKSdV7iCI9G3o7f53-KKvCxlr1eIcBvclXUD1X-KbTgZYcVa02WwmZABiN7dkWysIC4fOs29E8DfwD5Cc1VUWalTIWG2dilMHR6A__"} width={400} height={400} alt='hero'/>
            </div>

        </div>
      </section> */