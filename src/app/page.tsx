import CategoryList from "@/components/category-list";
import ProductList from "@/components/product-list";
import Slider from "@/components/slider";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <div className="px-4 md:px-8 lg:px-16 py-20 space-y-6">
        <h1 className="text-lg font-bold">Featured Products</h1>
        <ProductList />
      </div>
      <div className="py-20 px-4 lg:px-12">
        <h1 className="text-lg font-bold px-0 py-8">Categories</h1>
        <CategoryList />
      </div>
      <div className="px-4 md:px-8 lg:px-16 py-20 space-y-6">
        <h1 className="text-lg font-bold">New Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
