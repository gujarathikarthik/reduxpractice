"use client";
import React from "react";
import { ButtonHTMLAttributes } from "react";
import { productsType } from "../types/type";

interface props {
  children?: string;
  bgColor?: string;
  argument?: string;
  border?: string;
  padding?: string;
  style?: boolean;
  click?: () => void;
  item?: productsType;
}

const Button: React.FC<props> = ({
  children,
  argument,
  bgColor,
  border,
  padding,
  style,
  item,
  click,
}) => {
  const handleClick = (item: productsType) => {};
  return (
    <button
      style={{
        border: style ? border : "none",
        padding: style ? padding : "0px",
      }}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
