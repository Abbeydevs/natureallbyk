import ProductImages from "@/components/product-images";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-16">Just texts</div>
    </div>
  );
};

export default SinglePage;
