"use client";
import React from "react";
import products, { CatalogProduct } from "@/Data/products";
import ProducData from "@/components/productDetails/producData";

export default interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating?: { rate: number; count: number };
}
interface ProductID {
  id: number;
}

// Looks the product up in the bundled catalog instead of calling an
// external API (fakestoreapi.com is dead).
export const ApiData: React.FC<ProductID> = ({ id }) => {
  const productDetails: CatalogProduct | undefined = products.find(
    (product) => product.id === id
  );

  return (
    <div>
      {productDetails ? (
        <ProducData productDetails={productDetails} />
      ) : (
        <div className="p-10 text-center text-lg text-gray-600">
          Product not found.
        </div>
      )}
    </div>
  );
};
