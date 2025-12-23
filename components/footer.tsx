import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stitch-navy border-t border-white/5 relative overflow-hidden">
            {/* Curved Top (Visual Trick using SVG) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
                <svg className="relative block w-[calc(100%+1.3px)] h-[40px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-stitch-blue opacity-50"></path>
                </svg>
            </div>

            <div className="container mx-auto px-6 pt-24 pb-12">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">BanaSor</h3>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Yeni nesil üniversite hazırlık ve eğitim koçluğu platformu.
                            Hedefini seç, gerisini BanaSor'a bırak.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/banasorai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-bansor-orange hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.tiktok.com/@banasorai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-bansor-blue hover:text-white transition-all">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Ürün</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="#features" className="hover:text-bansor-orange transition-colors">Özellikler</Link></li>
                            <li><Link href="#pricing" className="hover:text-bansor-orange transition-colors">Fiyatlandırma</Link></li>
                            <li><Link href="#download" className="hover:text-bansor-orange transition-colors">İndir</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Yasal</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/gizlilik-politikasi" className="hover:text-bansor-orange transition-colors">Gizlilik Politikası</Link></li>
                            <li><Link href="/kullanim-kosullari" className="hover:text-bansor-orange transition-colors">Kullanım Koşulları</Link></li>
                            <li><Link href="/kvkk" className="hover:text-bansor-orange transition-colors">KVKK</Link></li>
                            <li><Link href="/iletisim" className="hover:text-bansor-orange transition-colors">İletişim</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-500">
                    Telif Hakkı &copy; {new Date().getFullYear()} BanaSor - Tüm Hakları Saklıdır.
                </div>
            </div>
        </footer>
    );
}
