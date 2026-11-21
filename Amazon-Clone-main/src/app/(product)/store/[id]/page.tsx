import React from "react";
import { ApiData } from "@/Data/ApiData/productDetails";
import CustomerReviews from "@/components/productDetails/productRevews";

interface ProductDetailsProps {
  params: Promise<{ id: string }>;
}

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { id } = await params;
  return (
    <div className=" bg-white">
      {/* top section  */}
      <section className=" p-5">
        <div>
          <ApiData id={parseInt(id)} />
        </div>
        <div className=" w-[100%] my-3 opacity-25 h-[1px] bg-[var(--gray-light)]"></div>

        <div className="pt-3">
          <CustomerReviews />
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
