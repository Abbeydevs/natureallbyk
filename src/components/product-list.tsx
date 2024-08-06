import Image from "next/image";
import Link from "next/link";

import productImg from "../../public/images/img1.jpg";
import productImg2 from "../../public/images/img2.jpg";
import { Button } from "./ui/button";
import { wixClientServer } from "@/lib/wix-client-server";
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";

interface ProductListProps {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({ categoryId, limit }: ProductListProps) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {res.items.map((product: products.Product) => (
        <Link
          href={`/${product.slug}`}
          className="w-full flex flex-col gap-4"
          key={product._id}
        >
          <div className="relative w-full h-72">
            <Image
              src={product.media?.mainMedia?.image?.url || productImg}
              alt="product"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-lg z-10 hover:opacity-0 transition-opacity ease-in duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || productImg}
                alt="product"
                fill
                sizes="25vw"
                className="absolute object-cover rounded-lg"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">{product.name}</span>
            <span>{product.price?.formatted?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections?.find(
                    (section: any) => section.title === "shortDesc"
                  )?.description || ""
                ),
              }}
            ></div>
          )}
          <Button
            variant="outline"
            className="rounded-lg hover:bg-slate-900 hover:text-white flex items-center justify-center w-full mt-6"
          >
            Add to Cart
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
