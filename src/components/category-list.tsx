import Image from "next/image";
import Link from "next/link";

import catImg from "../../public/images/img9.jpg";

const CategoryList = () => {
  return (
    <div className="overflow-x-scroll scroll-bar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link
          href="/list?categories=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-64">
            <Image
              src={catImg}
              alt="categories"
              fill
              sizes="20vw"
              className="object-cover rounded-xl"
            />
          </div>
          <h1 className="mt-8 font-semibold text-md tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?categories=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-64">
            <Image
              src={catImg}
              alt="categories"
              fill
              sizes="20vw"
              className="object-cover rounded-xl"
            />
          </div>
          <h1 className="mt-8 font-semibold text-md tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?categories=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-64">
            <Image
              src={catImg}
              alt="categories"
              fill
              sizes="20vw"
              className="object-cover rounded-xl"
            />
          </div>
          <h1 className="mt-8 font-semibold text-md tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?categories=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-64">
            <Image
              src={catImg}
              alt="categories"
              fill
              sizes="20vw"
              className="object-cover rounded-xl"
            />
          </div>
          <h1 className="mt-8 font-semibold text-md tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?categories=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-64">
            <Image
              src={catImg}
              alt="categories"
              fill
              sizes="20vw"
              className="object-cover rounded-xl"
            />
          </div>
          <h1 className="mt-8 font-semibold text-md tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?categories=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-64">
            <Image
              src={catImg}
              alt="categories"
              fill
              sizes="20vw"
              className="object-cover rounded-xl"
            />
          </div>
          <h1 className="mt-8 font-semibold text-md tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?categories=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-64">
            <Image
              src={catImg}
              alt="categories"
              fill
              sizes="20vw"
              className="object-cover rounded-xl"
            />
          </div>
          <h1 className="mt-8 font-semibold text-md tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?categories=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-64">
            <Image
              src={catImg}
              alt="categories"
              fill
              sizes="20vw"
              className="object-cover rounded-xl"
            />
          </div>
          <h1 className="mt-8 font-semibold text-md tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?categories=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-64">
            <Image
              src={catImg}
              alt="categories"
              fill
              sizes="20vw"
              className="object-cover rounded-xl"
            />
          </div>
          <h1 className="mt-8 font-semibold text-md tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?categories=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-64">
            <Image
              src={catImg}
              alt="categories"
              fill
              sizes="20vw"
              className="object-cover rounded-xl"
            />
          </div>
          <h1 className="mt-8 font-semibold text-md tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
