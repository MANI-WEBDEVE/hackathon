import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 155,
    rating: 4.5,
    image:
      "https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdXM50mhn6bTCgy5ZIKXsA-QjkRV4OaWX-Cnze9In8KoiidKM66~GMFQpGbd092AChJXdOH87aE7q6hd4B1aki0Zz21BapPXWfD-ZAzl0lGNR~NulEIkdSnE0jX-oJqDrfSsv-jSbNtcdHYlXxSvFTZm-AB00loKN8T-Mhiy9cl866BvdooVFZzcYdQ~1RiMRLltq2fST3WpaC9SBLc~x-TGafP45Zx4drobNz~D3j59Pp9iOCBHkQ9haqy425Ct361dCDYxZr626Le81QLSCBQRdkwfU1Z2aniwh1PeZn~oL6HzotM1wzQDPrdZkY~jkuEs62dpjO-DdRcUCOah6Q__",
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.2,
    image:
      "https://s3-alpha-sig.figma.com/img/aecd/8196/485b30fd30b3226e09bb8f8e494c260b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E00uJe4ScIJlOs2OZBX804wKT5KHfRmXE85TrrOIBj2NsxTb9e-AI9Nz8BCZEjDXtB8GAh48M9m-2EpjFkQLUSO3oCc~OvsDJ241EMvsgtWKA4GDflZnmiEmXSqt~YLnZcnYLExdaZfQM51bJj3utafVWSBuNNIswABuvWmVBt1vMvveA~ua9KLPgdOoE2NjV3zhFFkwQ~OabH2NUXvySpDPyVzjMZRkpoCPjme~cSwNI2LZuBmnCei1MvoGRGuVUe6E6rQtwtcMjMBOPhcrpNgtx0IDmSX4SiGizGiDq-MpJuBZiM2qyX1lfFbuHR5iH4YW31927b~7rI7BC6c4wQ__",
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 160,
    rating: 4.8,
    image:
      "https://s3-alpha-sig.figma.com/img/6115/920b/12942762aefb7c7ac954e78b76284504?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GnB39R0poDoKWZVk7khTTTmcfh5KU-cvHy2m~8vJJhQFe6ExdCS-E70jqpei5gUbnr5nF9r2LTQ~09rrJsvnc4hbQztpuXBRvAMSxTmaDs~wB9EmwmTorwsWKBEMLHByHOcpL7mtAIxtXGltw5a1IlZfiHNzYcXE8azIvDc0WPCiwSa5H0Qgd3KFSHL9E65QbQG9uReF9mC1Fp5ZMsC8h~2f3bNgm4YiE6Z3MHMFgQyJqsgT1ulE4ldMv2CTwjXP9f5paEg2SgC55wX0xdJClZLS5s1PnKkyW7jot0U1TMd5J1g5T5CMv8Cxq17p1HfZB19f06~rwrhW4393RyMIWQ__",
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    rating: 4.6,
    image:
      "https://s3-alpha-sig.figma.com/img/769b/9d60/ff941dde9bc0e54431b8d8fe3182f5e9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqcLL5UmMTnyPt9DvALODCglbRkma8WTB8Wb2rSdpGwQgz1oRRxOHRn2a62WzfL6OZj-qqVtbbo3w~4L5zhulyuteZnnG~A0KlNk-SdSHYnPBDaU877kleeDQY2W7rKbK-bTuxi1wKKOYGtYGvBWQyKCkL8UcarLoe2mdZoDGeqx5W~EwlPeCPHh2cb9R9KHpZ2eSBRZQVI1t8fjGnT~s6G2QtgQM6U3KibhoZkasMAQDjX8PavjtMny7hsBRTGanVyprSXELRnwaPDwFBxNcc8y2tZ~IEm9ljqsr1wSaYyv2xxtIpCvpe~NEBbZ1w1Yt2sMM02fqNHbYyWuwlGIyA__",
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.3,
    image:
      "https://s3-alpha-sig.figma.com/img/769b/9d60/ff941dde9bc0e54431b8d8fe3182f5e9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqcLL5UmMTnyPt9DvALODCglbRkma8WTB8Wb2rSdpGwQgz1oRRxOHRn2a62WzfL6OZj-qqVtbbo3w~4L5zhulyuteZnnG~A0KlNk-SdSHYnPBDaU877kleeDQY2W7rKbK-bTuxi1wKKOYGtYGvBWQyKCkL8UcarLoe2mdZoDGeqx5W~EwlPeCPHh2cb9R9KHpZ2eSBRZQVI1t8fjGnT~s6G2QtgQM6U3KibhoZkasMAQDjX8PavjtMny7hsBRTGanVyprSXELRnwaPDwFBxNcc8y2tZ~IEm9ljqsr1wSaYyv2xxtIpCvpe~NEBbZ1w1Yt2sMM02fqNHbYyWuwlGIyA__",
  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    rating: 4.7,
    image:
      "https://s3-alpha-sig.figma.com/img/aecd/8196/485b30fd30b3226e09bb8f8e494c260b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E00uJe4ScIJlOs2OZBX804wKT5KHfRmXE85TrrOIBj2NsxTb9e-AI9Nz8BCZEjDXtB8GAh48M9m-2EpjFkQLUSO3oCc~OvsDJ241EMvsgtWKA4GDflZnmiEmXSqt~YLnZcnYLExdaZfQM51bJj3utafVWSBuNNIswABuvWmVBt1vMvveA~ua9KLPgdOoE2NjV3zhFFkwQ~OabH2NUXvySpDPyVzjMZRkpoCPjme~cSwNI2LZuBmnCei1MvoGRGuVUe6E6rQtwtcMjMBOPhcrpNgtx0IDmSX4SiGizGiDq-MpJuBZiM2qyX1lfFbuHR5iH4YW31927b~7rI7BC6c4wQ__",
  },
  {
    id: 7,
    name: "Checkered T-shirt",
    price: 130,
    originalPrice: 160,
    rating: 4.7,
    image:
      "https://s3-alpha-sig.figma.com/img/bbf4/11c2/5fc84f87eeac1062fbe47f49c192d4f2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j2zRJvvq9tM5IRPO74vJiPhtF6BOd5s0Ee3Tjh2MTz0N3-TFTRXDwXN2BbT8QXDf9mZeNYmStRD8tz5FJucFT-FSQfEPxGc09FJQRoLwRCGaFBB1LeLgUJVcrIRfZ3VH11QygxPv~Ihy~NAsplH7zOS7ctbN0F-YOTi7PiYM20RW6Z0dxEvMb-hX3fLiU0rCrASgKvYJ4jo~HYur0O4HfeQZJWCIwep~Rhjuq92NffqcGAZZl30rb-gFn5SQXQSMUfBQSvgeG3UFOrdQrHBX8ADmEB8Fw47vMdZzNmqd1UavVZ7htorOdB4SsccWqo2fc~DXzlAOqpsTMfYf9FIOJw__ ",
  },
  {
    id: 8,
    name: "COURAGE GRAPHIC T-SHIRT",
    price: 130,
    originalPrice: 160,
    rating: 4.7,
    image:
      "https://s3-alpha-sig.figma.com/img/5723/4b01/d5fcac5632cf6823570ca2d1d53d7d73?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9Wr9HtnDWeGaQudQyHB7mjjfkAjuWvJdTPQCyNh6Kh1LyyV5tWyN0~FvrnNZibnzhwc1IWNi6EI2xgnnmq-v6eRRzUV3ScZuYzcPEyaYuIuEsv4cMbhPLn9wYu5lxDOtuWZkUNo3hcO4VDOCEoa8UIF6WXdINnCH9XPlwi5IlBtTrmYGeMcokvZAGJ93nEjS7cUctEf-9vyT8POmrUEKnC-2HDS25dcFlfKowt80D5Mi338FrcXxmAtyi9Ut7Pmm9sKQNgGhOV~LcENR0TvCEE--wLSGQ6BiO6k4h3i9WQOjjKwKEskEXE6J~PINniTbldzmUZp25H0iC9ud6Lp7A__",
  },
  {
    id: 9,
    name: "LOOSE FIT BERMUDA SHORTS",
    price: 130,
    originalPrice: 160,
    rating: 4.7,
    image:
      "https://s3-alpha-sig.figma.com/img/8951/5d71/4a66d9ca1401101dee4cc689f8bb5ad2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsTpGVGo3iiHrKUtY-SniBMxRhG2oU5H7NBAuSM-vdr85to8XkEUsa-6odPRuPYkxzS6hBAdwFfqK8TFLtZByuV-J9auXa0OoYjkAeVTjSFNnsjjkUkXybByJXKnfuU3FF8BXEQcclLcpk0~le4sdqBK8rmUvUUj0TWmAdDYTYBHfqBGxKmqNpXhP2YAGkiPgF~IJllRrfNH7tQSU5TMjsRX2Tg4FsNis0cNx4CUUGfvUssidiB-EHt-hC38kpF38ZLlydYC3vZGcbXEztfV-iXJQg3IeXmLAWeJliQ8dOT5em~OY2cBKQpaBtKUIYx6YZ1xWIStnUAZO6tM3MbanA__",
  },
];
interface CategoryProductProps {
    data: any[]; // Define the 'data' prop to receive product data
}



export const CategoryProduct: React.FC<CategoryProductProps> = ({data}) =>  {
  console.log(data)
  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-semibold mb-4 sm:mb-0">Casual</h2>
        <Select defaultValue="popular">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group rounded-lg border bg-card text-card-foreground shadow-sm "
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-[200px] sm:h-[210px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{product.name}</h3>
              <div className="mt-2 flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-500">
                  ({product.rating})
                </span>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <span className="font-semibold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-10 flex items-center justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
