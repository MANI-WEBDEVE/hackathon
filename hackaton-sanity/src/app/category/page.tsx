"use client";

import { FilterSidebar } from "@/components/FilterSidebar";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const page = () => {
  const [tagsData, setTagsData] = useState([]);
  const [allData, setallData] = useState([]);

  const query_1 = `*[_type == "product" ]{
  tags
}
`;
  const query_2 = `*[_type == "product" ]{
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
      <div className="flex items-center justify-center">
        {tagsData.length > 0 && allData.length > 0 && (
          <>
            <FilterSidebar
              tags={(tagsData as string[]) || []}
              data={(allData as { tags: string[] }[]) || []}
            />
            {/* <CategoryProduct data={allData as any} /> */}
          </>
        )}
      </div>
    </>
  );
};

export default page;
