"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  items: any;
}

const ProductImages = ({ items }: ProductImagesProps) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="sticky">
      <div className="relative h-[450px]">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="40vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-start gap-4 cursor-pointer">
        {items.map((item: any, i: number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
