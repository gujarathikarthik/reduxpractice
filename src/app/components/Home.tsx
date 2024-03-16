"use client";
import React from "react";
import { product, productsType } from "../types/type";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slice";
import Link from "next/link";

interface props {
  product: productsType[];
}

const Home: React.FC<props> = ({ product }) => {
  // console.log(product);

  const disptch = useDispatch();
  const handleAdd = (item: productsType) => {
    // console.log(item);

    disptch(add(item));
    // console.log(item);
  };
  return (
    <div>
      <h1 className="font-extrabold">products list</h1>
      <Link href="/productcart">productCart</Link>
      <div>
        {product.map((item) => {
          // console.log(item);

          return (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <button onClick={() => handleAdd(item)}>add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
