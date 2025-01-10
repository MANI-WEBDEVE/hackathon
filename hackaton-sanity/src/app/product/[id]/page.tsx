import ProductPage from '@/components/ProductPage'
import { client } from '@/sanity/lib/client';
import React from 'react'

export const generateStaticParams = async () => {
  const query = `*[_type=="product"]{_id}`;
  const ids = await client.fetch(query); // Fetch products' IDs from the database
  return ids.map(({ _id }: { _id: string }) => ({ id: _id })); // Return an array of objects containing IDs
};





const Page = ({params:{id}}:any) => {
  return (
    <main>
      <ProductPage id={id}/>
    </main>
  )
}

export default Page
