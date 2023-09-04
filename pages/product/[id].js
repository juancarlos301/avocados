import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  return <div>ProductItem {id}</div>;
};

export default ProductItem;
