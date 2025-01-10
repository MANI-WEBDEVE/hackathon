"use client";
import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MdArrowForwardIos } from "react-icons/md";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { GiSettingsKnobs } from "react-icons/gi";
import { CategoryProduct } from "./CategoryProduct";
import { Label } from "./ui/label";



interface FilterSidebarProps {
  tags: string[]; // Define the 'tags' prop to receive the tag data
  data: { tags: string[] }[];

}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ tags, data }) => {
  const [filterProductCheck, setFilterProductCheck] = React.useState<{
    TShirt: boolean,
    Short: boolean,
    Hoodie: boolean,
    Jeans: boolean,
    Shirt: boolean,
  }>({
    TShirt: false,
    Short: false,
    Hoodie: false,
    Jeans: false,
    Shirt: false,
  });

  const [filteredData, setFilteredData] = React.useState<{ tags: string[] }[]>(data);

  // Update the filtered data whenever filters changeReact.
  React.useEffect(() => {
    const selectedTags = Object.keys(filterProductCheck).filter(
      (key) => filterProductCheck[key as keyof typeof filterProductCheck]
    );

    if (selectedTags.length > 0) {
      const filtered = data.filter((product) =>
        selectedTags.some((tag) => product.tags.includes(tag))
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // If no tags are selected, show all data
    }
  }, [filterProductCheck, data]);


  const FilterContent = () => (
    <>
      <section className="sticky top-0 rounded-md border-[1px] border-black/20 px-2 md:h-1/2 md:border-none">
        <div className="flex items-center justify-between rounded-t-md border-b px-4 py-5">
          <h3>Filter</h3> <GiSettingsKnobs size={20} className="h-6 w-6" />
        </div>
        <ScrollArea className="h-full">
          <div className="space-y-4 border-b py-4">
            <div className="flex flex-col justify-center gap-3 rounded-md px-4 py-4">
              <div className="flex items-center justify-between">
                <Checkbox
                  id="tshirt"
                  checked={filterProductCheck.TShirt}
                  onCheckedChange={(checked) =>
                    setFilterProductCheck((prevState) => ({
                      ...prevState,
                      TShirt: checked as boolean,
                    }))
                  }
                />
                <Label htmlFor="tshirt">T-Shirt</Label>
                <MdArrowForwardIos />
              </div>
              <div className="flex items-center justify-between">
                <Checkbox
                  id="short"
                  checked={filterProductCheck.Short} 
                  onCheckedChange={(checked) =>
                    setFilterProductCheck((prevState) => ({
                      ...prevState,
                      Short: checked as boolean,
                    }))
                  }
                />
                <Label htmlFor="short">Short</Label>
                <MdArrowForwardIos />
              </div>
              <div className="flex items-center justify-between">
                <Checkbox
                  id="hoodie"
                  checked={filterProductCheck.Hoodie}
                  onCheckedChange={(checked) =>
                    setFilterProductCheck((prevState) => ({
                      ...prevState,
                      Hoodie: checked as boolean,
                    }))
                  }
                />
                <Label htmlFor="hoodie">Hoodie</Label>
                <MdArrowForwardIos />
              </div>
              <div className="flex items-center justify-between">
                <Checkbox
                  id="Jeans"
                  checked={filterProductCheck.Jeans}
                  onCheckedChange={(checked) =>
                    setFilterProductCheck((prevState) => ({
                      ...prevState,
                      Jeans: checked as boolean,
                    }))
                  }
                />
                <Label htmlFor="jeans">Jeans</Label>
                <MdArrowForwardIos />
              </div>
              <div className="flex items-center justify-between">
                <Checkbox
                  id="shirt"
                  checked={filterProductCheck.Shirt}
                  onCheckedChange={(checked) =>
                    setFilterProductCheck((prevState) => ({
                      ...prevState,
                      Shirt: checked as boolean,
                    }))
                  }
                />
                <Label htmlFor="shirt">Shirt</Label>
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
            
          </div>
        </ScrollArea>
      </section>
    </>
  );

  return (
    <>
      <div className="flex justify-center">
        <div className="hidden w-64 flex-col gap-6 border-r p-4 pr-4 md:flex md:flex-row lg:block">
          <FilterContent />
        </div>
        <CategoryProduct data={filteredData} />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="fixed bottom-4 left-4 z-50 lg:hidden"
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
};
