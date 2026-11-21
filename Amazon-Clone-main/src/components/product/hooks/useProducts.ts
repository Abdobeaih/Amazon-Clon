import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/redux/slices/productSlice";
import { addCartItem } from "@/redux/slices/cartSlice";
import { RootState, AppDispatch } from "@/redux/store";
import { Product } from "../types/product.types";

export const useProducts = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, status, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleAddToCart = useCallback(
    (product: Product) => {
      dispatch(addCartItem(product));
    },
    [dispatch]
  );

  return {
    products,
    status,
    error,
    handleAddToCart,
  };
};
