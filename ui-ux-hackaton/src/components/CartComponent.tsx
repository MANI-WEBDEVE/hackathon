"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Minus, Plus, ArrowRight } from "lucide-react";
import { MdDelete } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";
interface CartItem {
  id: number;
  name: string;
  details: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartComponent() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      details: "Size: Large",
      color: "Color: White",
      price: 145,
      quantity: 1,
      image:
        "https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdXM50mhn6bTCgy5ZIKXsA-QjkRV4OaWX-Cnze9In8KoiidKM66~GMFQpGbd092AChJXdOH87aE7q6hd4B1aki0Zz21BapPXWfD-ZAzl0lGNR~NulEIkdSnE0jX-oJqDrfSsv-jSbNtcdHYlXxSvFTZm-AB00loKN8T-Mhiy9cl866BvdooVFZzcYdQ~1RiMRLltq2fST3WpaC9SBLc~x-TGafP45Zx4drobNz~D3j59Pp9iOCBHkQ9haqy425Ct361dCDYxZr626Le81QLSCBQRdkwfU1Z2aniwh1PeZn~oL6HzotM1wzQDPrdZkY~jkuEs62dpjO-DdRcUCOah6Q__",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      details: "Size: Large",
      color: "Color: Red",
      price: 180,
      quantity: 1,
      image:
        "https://s3-alpha-sig.figma.com/img/aecd/8196/485b30fd30b3226e09bb8f8e494c260b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E00uJe4ScIJlOs2OZBX804wKT5KHfRmXE85TrrOIBj2NsxTb9e-AI9Nz8BCZEjDXtB8GAh48M9m-2EpjFkQLUSO3oCc~OvsDJ241EMvsgtWKA4GDflZnmiEmXSqt~YLnZcnYLExdaZfQM51bJj3utafVWSBuNNIswABuvWmVBt1vMvveA~ua9KLPgdOoE2NjV3zhFFkwQ~OabH2NUXvySpDPyVzjMZRkpoCPjme~cSwNI2LZuBmnCei1MvoGRGuVUe6E6rQtwtcMjMBOPhcrpNgtx0IDmSX4SiGizGiDq-MpJuBZiM2qyX1lfFbuHR5iH4YW31927b~7rI7BC6c4wQ__",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      details: "Size: 32",
      color: "Color: Blue",
      price: 240,
      quantity: 1,
      image:
        "https://s3-alpha-sig.figma.com/img/6115/920b/12942762aefb7c7ac954e78b76284504?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GnB39R0poDoKWZVk7khTTTmcfh5KU-cvHy2m~8vJJhQFe6ExdCS-E70jqpei5gUbnr5nF9r2LTQ~09rrJsvnc4hbQztpuXBRvAMSxTmaDs~wB9EmwmTorwsWKBEMLHByHOcpL7mtAIxtXGltw5a1IlZfiHNzYcXE8azIvDc0WPCiwSa5H0Qgd3KFSHL9E65QbQG9uReF9mC1Fp5ZMsC8h~2f3bNgm4YiE6Z3MHMFgQyJqsgT1ulE4ldMv2CTwjXP9f5paEg2SgC55wX0xdJClZLS5s1PnKkyW7jot0U1TMd5J1g5T5CMv8Cxq17p1HfZB19f06~rwrhW4393RyMIWQ__",
    },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 113;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen  p-4  md:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-8 flex items-center gap-2 text-sm">
          <span className="text-gray-500">Home</span>
          <span className="text-gray-500">/</span>
          <span>Cart</span>
        </nav>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <h1 className="mb-6 text-2xl font-extrabold">YOUR CART</h1>
            <div className="space-y-6 border-[1px] border-gray-400/30 rounded-lg p-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 border-b border-gray-400/30 pb-6 "
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <MdDelete className="h-5 w-5" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500">{item.details}</p>
                    <p className="text-sm text-gray-500">{item.color}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="font-medium text-xl">${item.price}</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="rounded-full border border-gray-600 p-1 hover:bg-gray-800"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="rounded-full border border-gray-600 p-1 hover:bg-gray-800"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <h2 className="mb-6 text-2xl font-medium">Order Summary</h2>
            <div className="rounded-xl bg-neutral-300/20   p-6 border-[1px] border-gray-400/30">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount (20%)</span>
                  <span className="text-red-500">-${discount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>${deliveryFee}</span>
                </div>
                <div className="border-t border-gray-400/30 pt-4">
                  <div className="flex justify-between">
                    <span>Total</span>
                    <span className="text-xl font-medium">${total}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Input
                      placeholder="Add promo code"
                      className="flex-1 bg-transparent rounded-full border border-gray-600 pl-[1.75rem] pr-[5.75rem] py-2 text-sm placeholder:text-gray-600 focus:outline-none "
                    />
                    <IoIosPricetag className="absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                  <Button
                    variant="outline"
                    className="bg-black text-white rounded-full px-5 py-3"
                    size="sm"
                  >
                    Apply
                  </Button>
                </div>
                <Button className="w-full bg-black text-white rounded-full py-3  hover:bg-gray-200 hover:text-black">
                  Go to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
