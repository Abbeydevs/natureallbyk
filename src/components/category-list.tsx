import Image from "next/image";
import Link from "next/link";

import catImg from "../../public/images/img9.jpg";
import { wixClientServer } from "@/lib/wix-client-server";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const categories = await wixClient.collections.queryCollections().find();

  return (
    <div className="overflow-x-scroll scroll-bar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.items.map((item) => (
          <Link
            href={`/list?category=${item.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={item._id}
          >
            <div className="relative bg-slate-100 w-full h-64">
              <Image
                src={item.media?.mainMedia?.image?.url || catImg}
                alt="categories"
                fill
                sizes="20vw"
                className="object-cover rounded-xl"
              />
            </div>
            <h1 className="mt-8 font-semibold text-md tracking-wide">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
