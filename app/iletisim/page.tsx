"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Mail, MessageSquare, Send, Instagram } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Iletisim() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // EmailJS servis bilgileri - Bu değerleri EmailJS dashboard'unuzdan alacaksınız
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

            // EmailJS ile e-posta gönder
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: "info@banasorai.com",
                },
                publicKey
            );

            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } catch (error) {
            console.error("Email gönderim hatası:", error);
            setIsSubmitting(false);
            setSubmitStatus("error");
            
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }
    };

    return (
        <main className="relative bg-stitch-navy min-h-screen text-white">
            <Header />
            <div className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            İletişim
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Sorularınız, önerileriniz veya destek talepleriniz için bizimle iletişime geçin.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 group cursor-pointer"
                        >
                            <Link href="https://www.instagram.com/banasorai" target="_blank" rel="noopener noreferrer" className="block">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                                        <Instagram className="w-6 h-6 text-pink-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">Instagram</h3>
                                        <p className="text-gray-400 text-sm group-hover:text-pink-300 transition-colors">@banasorai</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-xs">Takip etmek için tıklayın →</p>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                        >
                            <Link href="https://www.tiktok.com/@banasorai" target="_blank" rel="noopener noreferrer" className="block">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                                        <svg className="w-6 h-6 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">TikTok</h3>
                                        <p className="text-gray-400 text-sm group-hover:text-cyan-300 transition-colors">@banasorai</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-xs">Takip etmek için tıklayın →</p>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-bansor-orange/50 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-bansor-orange/20 flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-bansor-orange" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">E-posta</h3>
                                    <p className="text-gray-400 text-sm">info@banasorai.com</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-bansor-turquoise/50 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-bansor-turquoise/20 flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-bansor-turquoise" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Yanıt Süresi</h3>
                                    <p className="text-gray-400 text-sm">24 saat içinde yanıtlanır</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/5 rounded-3xl p-8 border border-white/10"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Bize Ulaşın</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Ad Soyad
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-bansor-orange transition-colors"
                                        placeholder="Adınız ve soyadınız"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        E-posta
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-bansor-orange transition-colors"
                                        placeholder="ornek@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Konu
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-bansor-orange transition-colors"
                                    placeholder="Mesaj konusu"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Mesaj
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-bansor-orange transition-colors resize-none"
                                    placeholder="Mesajınızı buraya yazın..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-2xl font-bold transition-all duration-300 bg-gradient-to-r from-bansor-orange to-bansor-purple text-white shadow-xl shadow-bansor-orange/20 hover:shadow-bansor-orange/40 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    "Gönderiliyor..."
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Gönder
                                    </>
                                )}
                            </button>
                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center"
                                >
                                    Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                                </motion.div>
                            )}
                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center"
                                >
                                    Bir hata oluştu. Lütfen tekrar deneyin.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

