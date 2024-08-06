"use client";

import { products } from "@wix/stores";
import { useState } from "react";
import { Button } from "../components/ui/button";

interface CustomizeProductsProps {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: CustomizeProductsProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h1>Choose a {option.name}</h1>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });

              const selected =
                selectedOptions[option.name!] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () => handleOptionSelect(option.name!, choice.description!);

              return option.name === "Color" ? (
                <li
                  className="w-6 h-6 rounded-full ring-1 ring-muted-foreground cursor-pointer relative"
                  style={{
                    backgroundColor: choice.description,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute w-8 h-8 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                  {disabled && (
                    <div className="absolute w-8 h-[2px] bg-red-500 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  )}
                </li>
              ) : (
                <Button
                  className="rounded-md px-5"
                  variant="outline"
                  style={{
                    backgroundColor: selected
                      ? "#86EFAC"
                      : disabled
                      ? "#cccccc"
                      : "transparent",
                    color: selected || disabled ? "white" : "black",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                </Button>
              );
            })}
          </ul>
        </div>
      ))}

      {/* <div
              className=""
              key={choice.value}
              onClick={() =>
                handleOptionSelect(option.name!, choice.description!)
              }
            >
             
                <li className="w-6 h-6 rounded-full ring-1 ring-muted-foreground cursor-pointer relative bg-red-500">
                  <div className="absolute w-8 h-8 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </li>
                <li className="w-6 h-6 rounded-full ring-1 ring-muted-foreground cursor-pointer relative bg-blue-500"></li>
                <li className="w-6 h-6 rounded-full ring-1 ring-muted-foreground cursor-not-allowed relative bg-green-500">
                  <div className="absolute w-8 h-[2px] bg-red-500 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </li>
              </ul>
            </div> */}
      {/* <h1>Choose a Size</h1> */}
      {/* <ul className="flex items-center gap-3">
        
        <Button className="rounded-md ring-green-500 px-10" variant="outline">
          Medium
        </Button>
        <Button className="rounded-md bg-green-500 hover:bg-green-700 px-10">
          Large
        </Button>
      </ul> */}
    </div>
  );
};

export default CustomizeProducts;
