import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/ui/Button";
import { Instagram, Clock, MapPin } from "lucide-react";

export default function OrderInfoPage() {
    return (
        <SectionWrapper className="pt-24 min-h-screen bg-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-text-gray mb-8 text-center">How to Order</h1>

                <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                    <div className="space-y-8">
                        <div className="bg-mango-cream/30 p-8 rounded-3xl space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-mango-orange">
                                    <Instagram size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-text-gray">Order via Instagram</h3>
                                    <p className="text-gray-600 mb-4">
                                        Pemesanan dapat dilakukan dengan mudah melalui DM Instagram kami.
                                        Admin kami siap membantu pesananmu.
                                    </p>
                                    <Link href="https://instagram.com/mangoblyss" target="_blank">
                                        <Button>Visit @mangoblyss</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-mango-orange">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-text-gray">Opening Hours</h3>
                                    <p className="text-gray-600">
                                        Jadwal buka mengikuti update di <strong>Instagram Story</strong>.
                                        Pastikan follow untuk info ready stock terbaru!
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm text-mango-orange">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-text-gray">Location</h3>
                                    <p className="text-gray-600">
                                        Sawojajar, Kota Malang. Bisa kirim via kurir ojol lokal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-full min-h-[400px] bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-200">
                        {/* Embed Google Maps Sawojajar */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31613.606778408086!2d112.637318!3d-7.962054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6283893348123%3A0x633e707764d990d0!2sSawojajar%2C%20Kec.%20Kedungkandang%2C%20Kota%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "400px" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="text-center p-8 bg-mango-yellow text-text-gray rounded-3xl">
                    <h3 className="text-2xl font-bold mb-4">Butuh buat acara?</h3>
                    <p className="mb-6 max-w-lg mx-auto">Kami menerima pesanan dalam jumlah besar untuk ulang tahun, arisan, atau hampers.</p>
                    <Link href="https://instagram.com/mangoblyss" target="_blank">
                        <Button variant="outline" className="bg-white hover:bg-white/90 border-none">Chat Admin</Button>
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
}
