"use client";

import { CategoryProduct } from "@/components/CategoryProduct";
import { FilterSidebar } from "@/components/FilterSidebar";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

const page = () => {
  const [tagsData, setTagsData] = useState([]);
  const [allData, setallData] = useState([]);

  const query_1 = `*[_type == "product" ]{
  tags
}
`;
  const query_2 = `*[_type == "product"]{
  tags,
  _id,
  name,
  image,
  rating,
  price,
}
`;
  useEffect(() => {
    const getTags = async () => {
      try {
        const res = await client.fetch(query_1);
        setTagsData(res);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getTags();
  }, []);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await client.fetch(query_2);
        setallData(res);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <>
     
      <div className="flex flex-col gap-6 p-4 md:flex-row">
        {tagsData.length > 0 && allData.length > 0 && (
          <>
            <FilterSidebar tags={(tagsData as string[]) || []} />
            <CategoryProduct data={allData as any} />
          </>
        )}
      </div>
    </>
  );
};

export default page;
