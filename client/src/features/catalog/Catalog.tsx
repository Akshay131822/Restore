
import { useEffect, useState } from "react";
import type { Product } from "../../app/model/Product"
import ProductList from "./ProductList"

export default function Catalog() {
  const [product,setProduct]= useState<Product[]>([]);
useEffect(()=>{fetch('https://localhost:5001/api/product/').then(response  =>response.json()).then(data =>setProduct(data))}
,[]);

  return (
    <>
    <ProductList products={product}/>

    
    </>
  )
}
