import React from "react";
import Button from "./components/Button";
import { product, productsType } from "./types/type";
import Home from "./components/Home";

async function fetchData() {
  let res = await fetch("https://dummyjson.com/products", {
    cache: "no-cache",
  });
  const dataFetched: product = await res.json();
  // console.log(dataFetched.products[0].brand);

  return dataFetched;
}

const page: React.FC = async () => {
  const data: product = await fetchData();
  // console.log(data.products[0].brand);

  const productsData = data.products;
  // console.log(productsData);

  return (
    <div>
      <h1>page</h1>
      <Home product={productsData} />
    </div>
  );
};

export default page;
