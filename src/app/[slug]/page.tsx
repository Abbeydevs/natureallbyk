import Add from "@/components/add";
import CustomizeProducts from "@/components/customize-products";
import ProductImages from "@/components/product-images";
import { Separator } from "@/components/ui/separator";
import { wixClientServer } from "@/lib/wix-client-server";
import { notFound } from "next/navigation";

interface SinglePageProps {
  params: {
    slug: string;
  };
}

const SinglePage = async ({ params }: SinglePageProps) => {
  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <div className="px-4 py-28 md:px-8 lg:px-16 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <p className="text-muted-foreground">{product.description}</p>
        <Separator />
        {product.priceData?.formatted?.price ===
        product.priceData?.formatted?.discountedPrice ? (
          <h2 className="text-xl font-bold">
            {product.priceData?.formatted?.discountedPrice}
          </h2>
        ) : (
          <div className="flex items-end justify-start gap-4">
            <h3 className="font-semibold text-lg text-muted-foreground line-through">
              {product.priceData?.formatted?.price}
            </h3>
            <h2 className="text-xl font-bold">
              {product.priceData?.formatted?.discountedPrice}
            </h2>
          </div>
        )}
        <Separator />
        {product.variants && product.productOptions && (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        )}
        <Add />
        <Separator />
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-bold">{section.title}</h4>
            <p className="text-muted-foreground">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
