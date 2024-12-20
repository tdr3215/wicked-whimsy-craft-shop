import { getProductBySlug } from "@/wix-api/products";
import { notFound } from "next/navigation";

interface ProductDetailsPageProps {
  params: { slug: string };
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = async ({
  params: { slug },
}) => {
  const product = await getProductBySlug(slug);

  if (!product?._id) {
    notFound();
  }
  return (
    <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </main>
  );
};

export default ProductDetailsPage;
