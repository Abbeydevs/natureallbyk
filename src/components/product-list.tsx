import Image from "next/image";
import Link from "next/link";

import productImg from "../../public/images/img1.jpg";
import productImg2 from "../../public/images/img2.jpg";
import productImg3 from "../../public/images/img3.jpg";
import productImg4 from "../../public/images/img4.jpg";
import { Button } from "./ui/button";

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      <Link href="/test" className="w-full flex flex-col gap-4">
        <div className="relative w-full h-72">
          <Image
            src={productImg}
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-lg z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />
          <Image
            src={productImg2}
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Product Name</span>
          <span>$50</span>
        </div>
        <div className="text-sm text-muted-foreground ">
          This is my product description and I will need this so I can explain
          what the product is about to my user.
        </div>
        <Button
          variant="outline"
          className="rounded-lg hover:bg-slate-900 hover:text-white flex items-center justify-center w-full mt-6"
        >
          Add to Cart
        </Button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4">
        <div className="relative w-full h-72">
          <Image
            src={productImg3}
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-lg z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />
          <Image
            src={productImg4}
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Product Name</span>
          <span>$50</span>
        </div>
        <div className="text-sm text-muted-foreground ">
          This is my product description and I will need this so I can explain
          what the product is about to my user.
        </div>
        <Button
          variant="outline"
          className="rounded-lg hover:bg-slate-900 hover:text-white flex items-center justify-center w-full mt-6"
        >
          Add to Cart
        </Button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4">
        <div className="relative w-full h-72">
          <Image
            src={productImg}
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-lg z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />
          <Image
            src={productImg2}
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Product Name</span>
          <span>$50</span>
        </div>
        <div className="text-sm text-muted-foreground ">
          This is my product description and I will need this so I can explain
          what the product is about to my user.
        </div>
        <Button
          variant="outline"
          className="rounded-lg hover:bg-slate-900 hover:text-white flex items-center justify-center w-full mt-6"
        >
          Add to Cart
        </Button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4">
        <div className="relative w-full h-72">
          <Image
            src={productImg3}
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-lg z-10 hover:opacity-0 transition-opacity ease-in duration-500"
          />
          <Image
            src={productImg4}
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-lg"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Product Name</span>
          <span>$50</span>
        </div>
        <div className="text-sm text-muted-foreground ">
          This is my product description and I will need this so I can explain
          what the product is about to my user.
        </div>
        <Button
          variant="outline"
          className="rounded-lg hover:bg-slate-900 hover:text-white flex items-center justify-center w-full mt-6"
        >
          Add to Cart
        </Button>
      </Link>
    </div>
  );
};

export default ProductList;
