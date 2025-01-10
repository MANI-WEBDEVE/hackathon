import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductByName = async (searchParam: string) => {
    const PRODUCT_SEARCH_BY_NAME = defineQuery(`
        *[_type == "product" && name match "${searchParam}"] | order(name asc) 
        `)
        try {
            const products = await sanityFetch({
                query: PRODUCT_SEARCH_BY_NAME,
                params: {
                    searchParam: `${searchParam}*` // append wildcard to search for partial matches
                }
            })
    
            return products.data || []
        } catch (error) {
            console.log("Error fetching products by name", error);
            return [];
    
        }
}