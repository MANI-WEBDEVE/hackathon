import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MdArrowForwardIos } from "react-icons/md";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { GiSettingsKnobs } from "react-icons/gi";

interface FilterSection {
  title: string;
  items: string[];
}

const filterSections: FilterSection[] = [
  {
    title: "T-shirts",
    items: ["Casual", "Formal", "Party", "Gym"],
  },
  {
    title: "Styles",
    items: ["Classic", "Modern", "Vintage", "Streetwear"],
  },
  {
    title: "Brands",
    items: ["Nike", "Adidas", "Puma", "Reebok"],
  },
  {
    title: "Gender",
    items: ["Men", "Women", "Unisex"],
  },
];

const colors = [
  "bg-red-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-orange-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-black",
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export function FilterSidebar() {
  const FilterContent = () => (
    <>
      <section className=" border-[1px] border-black/20 rounded-md  px-2 ">
        <div className="flex items-center justify-between px-4 py-5 border-b rounded-t-md ">
          <h3>Filter</h3> <GiSettingsKnobs size={20} className=" w-6 h-6" />
        </div>
        <ScrollArea className="h-full ">
          <div className="space-y-4 py-4 border-b">
            <div className=" px-4 py-4 rounded-md">
              <div className="flex items-center justify-between ">
                <p>T-Shirt</p>
                <MdArrowForwardIos />
              </div>
              <div className="flex items-center justify-between ">
                <p>Short</p>
                <MdArrowForwardIos />
              </div>
              <div className="flex items-center justify-between ">
                <p>Hoodie</p>
                <MdArrowForwardIos />
              </div>
              <div className="flex items-center justify-between ">
                <p>Jeans</p>
                <MdArrowForwardIos />
              </div>
              <div className="flex items-center justify-between ">
                <p>Shirt</p>
                <MdArrowForwardIos />
              </div>
            </div>

            <div className="space-y-3 border-b py-4">
              <h3 className="font-semibold">Price</h3>
              <Slider defaultValue={[50]} max={500} step={1} />
              <div className="flex justify-between text-sm">
                <span>$0</span>
                <span>$500</span>
              </div>
            </div>

            <div className="space-y-3 border-b py-4">
              <h3 className="font-semibold">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    className={`h-6 w-6 rounded-full ${color} border border-gray-200`}
                    aria-label={`Select color ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3 border-b py-4">
              <h3 className="font-semibold">Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className="rounded-full border px-3 py-1 text-sm hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className=" px-4 py-4 rounded-md">
              <div className="flex items-center justify-between ">
                <p>T-Shirt</p>
                <MdArrowForwardIos />
              </div>
              <div className="flex items-center justify-between ">
                <p>Short</p>
                <MdArrowForwardIos />
              </div>
              <div className="flex items-center justify-between ">
                <p>Hoodie</p>
                <MdArrowForwardIos />
              </div>
              <div className="flex items-center justify-between ">
                <p>Jeans</p>
                <MdArrowForwardIos />
              </div>
              <div className="flex items-center justify-between ">
                <p>Shirt</p>
                <MdArrowForwardIos />
              </div>
            </div>

            <Button className="w-full">Apply Filter</Button>
          </div>
        </ScrollArea>
      </section>
    </>
  );

  return (
    <>
      <div className="hidden lg:block w-64 border-r pr-4">
        <FilterContent />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="lg:hidden fixed bottom-4 left-4 z-50"
          >
            <Menu className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:w-[400px]">
          <FilterContent />
        </SheetContent>
      </Sheet>
    </>
  );
}
