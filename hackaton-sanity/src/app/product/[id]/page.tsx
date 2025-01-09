import ProductPage from '@/components/ProductPage'
import React from 'react'

const Page = ({params}:any) => {
  return (
    <main>
      <ProductPage id={params.id}/>
    </main>
  )
}

export default Page
