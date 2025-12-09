import { menuData, Category } from "@/data/menu";
import ProductCard from "@/components/ProductCard";
import SectionWrapper from "@/components/SectionWrapper";

export default function MenuPage() {
    return (
        <SectionWrapper className="pt-24 min-h-screen">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-text-gray mb-4">Our Menu</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Temukan favoritmu dari berbagai pilihan dessert segar kami.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {menuData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </SectionWrapper>
    );
}
