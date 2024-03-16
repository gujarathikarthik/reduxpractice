"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { addedProduct, productsType } from "../types/type";
import { remove } from "@/redux/slice";

export default function Page() {
  const data = useSelector((item: RootState) => item.productsCart);
  console.log("data", data);

  const dispatch = useDispatch();
  // const handleDelete = (id: number) => {
  //   // dispatch(remove(id));
  //   console.log("remove", dispatch(remove(id)));

  //   console.log("id", id);
  // };
  return (
    <div>
      <Link href={"/"}>back</Link>
      <h1>cart items</h1>
      <div>
        {data.map((item: addedProduct) => {
          // console.log("id", item.title);
          const { id, title, brand, count } = item;

          // console.log(id);
          return (
            <div className="border border-black p-5" key={id}>
              <h1>{title}</h1>
              <h1>{brand}</h1>
              <h1>{count}</h1>
              <button>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
