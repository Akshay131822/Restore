import { Box } from "@mui/material"
import type { Product } from "../../app/model/Product"
import ProductCard from "./ProductCard"

type Pros={
    products :Product[]
}
export default function ProductList({products}:Pros) {
  return (
        <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center">
    {products.map((product )=> 
    <ProductCard  key={product.id} product={product}/>)
  }
    
 
    </Box>
  )
}
