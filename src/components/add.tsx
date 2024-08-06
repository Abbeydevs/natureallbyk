"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Minus, Plus, ShoppingBag } from "lucide-react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  const stock = 10;

  const handleQuantity = (type: "plus" | "minus") => {
    if (type === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else if (type === "plus" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h1>Choose a Quantity</h1>
      <div className="flex justify-between">
        <div className="flex items-center justify-start gap-4">
          <div className="rounded-3xl flex items-center justify-between gap-4">
            <Button
              variant="outline"
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("minus")}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <p>{quantity}</p>
            <Button
              variant="outline"
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("plus")}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            Only 4 items left! Don't miss it
          </div>
        </div>
        <Button className="disabled:cursor-not-allowed">
          <ShoppingBag className="w-4 h-4 mr-2" /> Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Add;
