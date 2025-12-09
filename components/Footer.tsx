import Link from "next/link";
import { Instagram, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-mango-cream pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-mango-orange">Mangoblyss</h2>
                        <p className="text-text-gray/80 leading-relaxed max-w-xs transition-colors hover:text-text-gray">
                            Menghadirkan kesegaran mangga asli dan pudding creamy untuk menemani harimu. Fresh, Tropical, & Delicious.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-text-gray mb-4">Explore</h3>
                        <ul className="space-y-3">
                            {[
                                ["Home", "/"],
                                ["Our Menu", "/menu"],
                                ["About Us", "/about"],
                                ["Order Info", "/order-info"],
                            ].map(([name, href]) => (
                                <li key={name}>
                                    <Link
                                        href={href}
                                        className="text-text-gray/70 hover:text-mango-orange transition-colors"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-text-gray mb-4">Visit Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-text-gray/80">
                                <MapPin className="w-5 h-5 text-mango-orange shrink-0 mt-1" />
                                <span>
                                    Sawojajar, Kota Malang<br />
                                    Jawa Timur, Indonesia
                                </span>
                            </li>
                            <li>
                                <Link
                                    href="https://instagram.com/mangoblyss"
                                    target="_blank"
                                    className="flex items-center gap-3 text-text-gray/80 hover:text-mango-orange transition-colors"
                                >
                                    <Instagram className="w-5 h-5 text-mango-orange" />
                                    <span>@mangoblyss</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-mango-orange/20 pt-8 text-center text-text-gray/60 text-sm">
                    <p>&copy; {new Date().getFullYear()} Mangoblyss. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
