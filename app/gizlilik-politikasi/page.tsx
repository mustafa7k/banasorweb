import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
    title: "Gizlilik Politikası - BanaSor",
    description: "BanaSor gizlilik politikası ve kişisel verilerin korunması",
};

export default function GizlilikPolitikasi() {
    return (
        <main className="relative bg-stitch-navy min-h-screen text-white">
            <Header />
            <div className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                        Gizlilik Politikası
                    </h1>
                    <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
                        <p className="text-lg">
                            Son güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Genel Bilgiler</h2>
                            <p>
                                BanaSor Teknoloji olarak, kullanıcılarımızın gizliliğini korumak bizim için önemlidir. 
                                Bu gizlilik politikası, BanaSor uygulamasını kullanırken topladığımız bilgiler ve bu 
                                bilgilerin nasıl kullanıldığı hakkında sizleri bilgilendirmek amacıyla hazırlanmıştır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Toplanan Bilgiler</h2>
                            <p>Uygulamamızı kullanırken aşağıdaki bilgileri toplayabiliriz:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Hesap bilgileri (e-posta adresi, ad, soyad)</li>
                                <li>Kullanım verileri (çözülen sorular, deneme sonuçları, ilerleme verileri)</li>
                                <li>Cihaz bilgileri (cihaz modeli, işletim sistemi versiyonu)</li>
                                <li>Konum bilgileri (izin verilirse)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Bilgilerin Kullanımı</h2>
                            <p>Topladığımız bilgiler aşağıdaki amaçlarla kullanılır:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Kişiselleştirilmiş eğitim programları oluşturmak</li>
                                <li>Uygulama performansını iyileştirmek</li>
                                <li>Kullanıcı deneyimini geliştirmek</li>
                                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Bilgilerin Paylaşımı</h2>
                            <p>
                                Kişisel bilgileriniz, yasal yükümlülüklerimiz dışında üçüncü taraflarla paylaşılmaz. 
                                Sadece hizmet sağlayıcılarımız (bulut depolama, analitik servisler) ile sınırlı 
                                bilgi paylaşımı yapılabilir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Veri Güvenliği</h2>
                            <p>
                                Verilerinizin güvenliği için endüstri standardı şifreleme ve güvenlik önlemleri 
                                kullanıyoruz. Ancak hiçbir internet iletimi veya elektronik depolama yöntemi 
                                %100 güvenli değildir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Haklarınız</h2>
                            <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Kişisel verilerinize erişim hakkı</li>
                                <li>Düzeltme ve silme hakkı</li>
                                <li>İtiraz etme hakkı</li>
                                <li>Veri taşınabilirliği hakkı</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. İletişim</h2>
                            <p>
                                Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

