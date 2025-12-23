import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
    title: "Kullanım Koşulları - BanaSor",
    description: "BanaSor kullanım koşulları ve şartları",
};

export default function KullanimKosullari() {
    return (
        <main className="relative bg-stitch-navy min-h-screen text-white">
            <Header />
            <div className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                        Kullanım Koşulları
                    </h1>
                    <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
                        <p className="text-lg">
                            Son güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Genel Koşullar</h2>
                            <p>
                                BanaSor uygulamasını kullanarak, bu kullanım koşullarını kabul etmiş sayılırsınız. 
                                Bu koşulları kabul etmiyorsanız, lütfen uygulamayı kullanmayın.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Hizmet Tanımı</h2>
                            <p>
                                BanaSor, öğrencilere yapay zeka destekli eğitim koçluğu hizmeti sunan bir platformdur. 
                                Uygulama, soru çözümü, ders programı oluşturma, deneme analizi ve konu takibi gibi 
                                özellikler sunmaktadır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Kullanıcı Yükümlülükleri</h2>
                            <p>Kullanıcılar olarak aşağıdaki yükümlülüklere uymanız gerekmektedir:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Doğru ve güncel bilgiler sağlamak</li>
                                <li>Hesap güvenliğini korumak</li>
                                <li>Uygulamayı yasalara aykırı amaçlarla kullanmamak</li>
                                <li>Başkalarının haklarına saygı göstermek</li>
                                <li>Telif haklarına uymak</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Fikri Mülkiyet Hakları</h2>
                            <p>
                                BanaSor uygulaması ve içeriği, BanaSor Teknoloji'nin fikri mülkiyetidir. 
                                İçeriği izinsiz kopyalamak, dağıtmak veya kullanmak yasaktır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Hizmet Kesintileri</h2>
                            <p>
                                Bakım, güncelleme veya teknik sorunlar nedeniyle hizmetlerimizde geçici kesintiler 
                                olabilir. Bu durumlardan sorumlu tutulamayız.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Sorumluluk Sınırlaması</h2>
                            <p>
                                BanaSor, uygulama içeriğinin doğruluğu veya eksiksizliği konusunda garanti vermez. 
                                Kullanıcılar, uygulamayı kendi sorumluluklarında kullanırlar.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Değişiklikler</h2>
                            <p>
                                Bu kullanım koşullarını istediğimiz zaman değiştirme hakkını saklı tutarız. 
                                Önemli değişiklikler kullanıcılara bildirilecektir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. İletişim</h2>
                            <p>
                                Kullanım koşulları hakkında sorularınız için bizimle iletişime geçebilirsiniz.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

