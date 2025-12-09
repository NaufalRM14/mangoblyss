import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/menu";
import Button from "@/components/ui/Button";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 flex flex-col h-full group">
            <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-mango-orange">
                    {product.category}
                </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-gray mb-2 line-clamp-1 group-hover:text-mango-orange transition-colors">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
                    {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-mango-orange">
                        Rp {product.price.toLocaleString("id-ID")}
                    </span>
                    <Link
                        href="https://instagram.com/mangoblyss"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="sm" className="px-4 py-2 text-sm">
                            Order
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
