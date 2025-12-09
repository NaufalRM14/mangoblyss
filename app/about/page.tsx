import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

export default function AboutPage() {
    return (
        <SectionWrapper className="pt-24 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-gray mb-4">About Mangoblyss</h1>
                    <p className="text-gray-600">Cerita manis di balik setiap suapan.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden bg-gray-100 shadow-lg rotate-2 hover:rotate-0 transition-all duration-500">
                        <Image
                            src="/images/founders.jpg"
                            alt="Mangoblyss Founders"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-mango-orange to-orange-500 mb-6 drop-shadow-sm -rotate-1 inline-block">
                            Berawal dari Iseng...
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Mangoblyss bermula dari cerita dua sahabat yang iseng mencoba membangun usaha kecil-kecilan.
                            Berawal dari kecintaan kami pada Mango Sticky Rice, kami mulai menjajakan racikan kami ke teman-teman terdekat.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Tak disangka, antusiasme pembeli terus bertambah. Dari sekadar iseng, kini Mangoblyss telah dinikmati oleh banyak pelanggan dari berbagai kalangan.
                            <br /><br />
                            <strong>Fresh, Creamy, & Blyssful</strong> tetap menjadi janji kami di setiap suapan.
                        </p>
                    </div>
                </div>

                <div className="bg-mango-cream/40 p-8 rounded-3xl">
                    <h3 className="text-xl font-bold text-center mb-8 text-text-gray">Our Quality Promise</h3>
                    <div className="grid sm:grid-cols-3 gap-6 text-center">
                        <div>
                            <span className="block text-4xl mb-2">🥭</span>
                            <h4 className="font-bold mb-2">100% Fresh Mango</h4>
                            <p className="text-sm text-gray-600">Hanya buah asli, tanpa perasa buatan.</p>
                        </div>
                        <div>
                            <span className="block text-4xl mb-2">🥥</span>
                            <h4 className="font-bold mb-2">Premium Santan</h4>
                            <p className="text-sm text-gray-600">Santan segar pilihan untuk rasa gurih alami.</p>
                        </div>
                        <div>
                            <span className="block text-4xl mb-2">🍯</span>
                            <h4 className="font-bold mb-2">Homemade</h4>
                            <p className="text-sm text-gray-600">Dibuat setiap hari tanpa pengawet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
