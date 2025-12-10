"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/ui/Button";
import { Mail, Instagram, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <SectionWrapper className="pt-24 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-text-gray mb-12 text-center">Get in Touch</h1>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-mango-orange">Contact Information</h2>
                        <p className="text-gray-600">
                            Ada pertanyaan atau saran? Hubungi kami melalui channel berikut.
                        </p>

                        <div className="space-y-6">
                            <Link href="https://instagram.com/mangoblyss" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-mango-cream/30 transition-colors group">
                                <div className="bg-mango-cream p-3 rounded-full text-mango-orange group-hover:bg-white transition-colors">
                                    <Instagram size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-gray">Instagram</h4>
                                    <p className="text-gray-500">@mangoblyss</p>
                                </div>
                            </Link>



                            <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-mango-cream/30 transition-colors group">
                                <div className="bg-mango-cream p-3 rounded-full text-mango-orange group-hover:bg-white transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-gray">Address</h4>
                                    <p className="text-gray-500">Sawojajar, Kota Malang</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-text-gray mb-6">Send us a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault();
                            window.open('https://ig.me/m/mangoblyss', '_blank');
                        }}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</label>
                                    <input type="text" id="name" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-mango-orange focus:ring-2 focus:ring-mango-orange/20 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="instagram" className="text-sm font-semibold text-gray-700">Instagram Username</label>
                                    <input type="text" id="instagram" placeholder="@username" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-mango-orange focus:ring-2 focus:ring-mango-orange/20 outline-none transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                                <input type="text" id="subject" placeholder="What is this about?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-mango-orange focus:ring-2 focus:ring-mango-orange/20 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                                <textarea id="message" rows={4} placeholder="Type your message here..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-mango-orange focus:ring-2 focus:ring-mango-orange/20 outline-none transition-all resize-none"></textarea>
                            </div>

                            <Button className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
