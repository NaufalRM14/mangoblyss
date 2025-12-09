import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";
import { menuData } from "@/data/menu";
import { ArrowRight, Star, Leaf, Heart } from "lucide-react";

export default function Home() {
  const bestSellers = menuData.filter((item) =>
    ["msr-1", "pcc-1", "psf-1"].includes(item.id)
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-gradient-to-br from-mango-cream/50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-mango-yellow/10 rounded-l-full blur-3xl opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-6 animate-fade-in-up">
            <span className="bg-mango-orange/10 text-mango-orange px-4 py-2 rounded-full font-bold text-sm tracking-wide">
              #1 Mango Dessert in Malang
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-text-gray">
              Sweeten Your Day with <span className="text-mango-orange">Mangoblyss</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Nikmati kesegaran Mango Sticky Rice dan kelembutan Homemade Pudding yang dibuat dengan cinta. Tropical & Fresh!
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com/mangoblyss" target="_blank">
                <Button size="lg" className="shadow-mango-orange/30 shadow-xl">
                  Order Now
                </Button>
              </Link>
              <Link href="/menu">
                <Button variant="outline" size="lg">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full hidden md:block flex justify-center items-center">
            {/* Hero Image */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-mango-yellow/20 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-blob filter blur-xl"></div>
              <div className="relative w-full h-full overflow-hidden rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-4 border-white/50 shadow-2xl">
                <Image
                  src="/images/hero-mascot.jpg"
                  alt="Mangoblyss Mascot"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <SectionWrapper background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-gray mb-4">Why Mangoblyss?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Kami berkomitmen memberikan kualitas terbaik di setiap suapan.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Star, title: "Premium Quality", desc: "Menggunakan mangga pilihan dan bahan-bahan premium." },
            { icon: Leaf, title: "Freshly Made", desc: "Dibuat setiap hari untuk menjamin kesegaran produk." },
            { icon: Heart, title: "Made with Love", desc: "Resep homemade autentik yang bikin nagih." },
          ].map((feature, idx) => (
            <div key={idx} className="bg-mango-cream/30 p-8 rounded-3xl flex flex-col items-center text-center hover:bg-mango-cream/60 transition-colors">
              <div className="bg-white p-4 rounded-full mb-6 shadow-sm">
                <feature.icon className="w-8 h-8 text-mango-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-gray">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Best Seller */}
      <SectionWrapper background="cream">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-gray mb-2">Best Sellers</h2>
            <p className="text-gray-600">Favorit pelanggan yang wajib kamu coba!</p>
          </div>
          <Link href="/menu" className="hidden md:flex items-center gap-2 text-mango-orange font-bold hover:gap-3 transition-all">
            See All Menu <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/menu">
            <Button variant="outline">See All Menu</Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="py-24 bg-mango-orange relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Taste the Blyss?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Pesan sekarang dan rasakan kenikmatan dessert premium dari Mangoblyss.
          </p>
          <Link href="https://instagram.com/mangoblyss" target="_blank">
            <Button size="lg" className="bg-white text-mango-orange hover:bg-gray-100 border-none">
              Order via Instagram
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
