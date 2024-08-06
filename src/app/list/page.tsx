import { Button } from "@/components/ui/button";
import Image from "next/image";
import productImg from "../../../public/images/img8.jpg";
import Filter from "@/components/filter";
import ProductList from "@/components/product-list";
import { wixClientServer } from "@/lib/wix-client-server";

interface ListPageProps {
  searchParams: any;
}

const ListPage = async ({ searchParams }: ListPageProps) => {
  const wixClient = await wixClientServer();
  const category = await wixClient.collections.getCollectionBySlug(
    searchParams.category || "all-products"
  );

  return (
    <div className="px-4 md:px-8 lg:px-16 py-20">
      <div className="space-y-6 h-auto lg:h-screen flex justify-center items-center">
        <div className="flex justify-between items-center bg-green-100 rounded-xl p-20">
          <div className="">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Grab up to 50% off on Selected Products
            </h1>
            <Button className="mt-10 w-28">Buy Now</Button>
          </div>
          <div className="hidden w-1/2 lg:flex justify-end items-center">
            <Image src={productImg} alt="Product image" className="w-2/3" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-10">
        <h1 className="text-xl font-bold">All Products</h1>
        <Filter />
      </div>
      <ProductList
        categoryId={
          category.collection?._id || "00000000-000000-000000-000000000001"
        }
        searchParams={searchParams}
      />
    </div>
  );
};

export default ListPage;
