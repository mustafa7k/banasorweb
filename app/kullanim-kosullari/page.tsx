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
                            Son güncelleme: 16 Kasım 2025
                        </p>

                        <p>Lütfen bu Kullanım Koşullarını ("Koşullar") dikkatlice okuyun. Bu Koşullar, BanaSor mobil uygulamanızı ("Uygulama" veya "Hizmet") kullanmanızı yönetir.</p>
                        <p>Uygulamayı indirerek, erişerek veya kullanarak, bu Koşullar ve referans verdiğimiz <strong>Gizlilik Politikası</strong>'na yasal olarak bağlı olmayı kabul edersiniz. Bu şartları kabul etmiyorsanız, lütfen Uygulamayı kullanmayın.</p>

                        <section id="tos-1">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Hizmet Tanımı</h2>
                            <p>BanaSor, öğrencilere yönelik eğitim platformudur. Hizmetlerimiz şunları içerir:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Kullanıcıların gönderdiği sorular için yapay zeka (Google Gemini) tarafından oluşturulan çözümler sağlamak.</li>
                                <li>Kullanıcıların sağladığı bilgilere (sınav hedefleri, sınıf düzeyi, akademik yön) dayalı kişiselleştirilmiş haftalık çalışma planları oluşturmak.</li>
                                <li>Kullanıcıların uygulama sınav sonuçlarını ve konu tamamlama ilerlemesini takip etmeleri için araçlar.</li>
                            </ul>
                        </section>

                        <section id="tos-2">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Kullanıcı Hesapları</h2>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Hesap Oluşturma:</strong> Hizmetimizin belirli özelliklerini kullanmak için Apple veya Google kimliğinizle hesap oluşturmanız gerekir.</li>
                                <li><strong>Bilgilerin Doğruluğu:</strong> Hesabınız ve kişiselleştirilmiş planlar oluşturmak için sağladığınız bilgilerin (sınıf düzeyi, sınav hedefi vb.) doğru, güncel ve eksiksiz olduğunu kabul edersiniz.</li>
                                <li><strong>Hesap Güvenliği:</strong> Hesap kimlik bilgilerinizin gizliliğini korumaktan ve hesabınız altında gerçekleşen tüm aktivitelerden sorumlu olmaktan sorumlusunuz.</li>
                                <li><strong>Yaş Sınırı:</strong> Hizmetimiz 13 yaş ve üstü kullanıcılara yöneliktir. 13 yaş altındaysanız, Uygulamayı sadece bir ebeveyn veya vasinin onayı ve gözetimi altında kullanabilirsiniz.</li>
                            </ul>
                        </section>

                        <section id="tos-3">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Abonelikler ve Ödemeler</h2>
                            <p>Uygulamamız, belirli özelliklere erişim için otomatik yenilenen abonelikler ("Premium Özellikler") sunabilir.</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Ödeme İşlemcileri:</strong> Tüm abonelik ödemeleri ve işlemler doğrudan <strong>Apple App Store</strong> veya <strong>Google Play Store</strong> ("Mağazalar") üzerinden işlenir. BanaSor, ödeme bilgileriniz veya kredi kartı detaylarınızı toplamaz, saklamaz veya işlemez.</li>
                                <li><strong>Otomatik Yenileme:</strong> Aboneliğiniz, mevcut abonelik döneminin sonundan en az 24 saat önce iptal edilmediği sürece otomatik olarak yenilenir. Yenileme ücreti, geçerli dönemin sonundan 24 saat önce Mağaza hesabınıza tahsil edilecektir.</li>
                                <li><strong>Abonelik Yönetimi ve İptal:</strong> Aboneliklerinizi yönetmek ve otomatik yenilemeyi kapatmak için satın alma işleminden sonra doğrudan Mağaza hesabınızın (App Store veya Google Play Store) ayarlarına gidin.</li>
                                <li><strong>Ücretler:</strong> Abonelik ücretlerini değiştirme hakkını saklı tutarız. Herhangi bir fiyat değişikliği, mevcut aboneliğinizin sonundan sonra geçerli olacaktır.</li>
                            </ul>
                        </section>

                        <section id="tos-4">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Kullanıcı Tarafından Oluşturulan İçerik</h2>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>İçerik Sahipliği:</strong> Yüklediğiniz soru görüntüleri, girdiğiniz sınav sonuçları ve oluşturduğunuz planlar ("Kullanıcı İçeriği") size aittir.</li>
                                <li><strong>BanaSor'a Lisans Verme:</strong> Kullanıcı İçeriği yükleyerek, BanaSor'a Hizmeti sağlamak, sürdürmek ve iyileştirmek amacıyla bu içeriği kullanmak için dünya çapında, münhasır olmayan, telifsiz lisans verirsiniz (örneğin, bir soru görüntüsünü işleme için bir AI sağlayıcısına göndermek).</li>
                                <li><strong>Sorumluluk:</strong> Yüklediğiniz Kullanıcı İçeriğinden tamamen sorumlu olursunuz ve bunun herhangi bir telif hakkı veya üçüncü taraf haklarını ihlal etmediğinden emin olursunuz.</li>
                            </ul>
                        </section>

                        <section id="tos-5">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Yapay Zeka Kullanımı ve Sorumluluk Reddi</h2>
                            <p>Uygulamamız, Google Gemini gibi üçüncü taraf AI modellerini kullanır.</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Akademik Garanti Yok:</strong> AI tarafından oluşturulan çözümler ve öneriler <strong>eğitim ve rehberlik amaçlıdır sadece.</strong> Çözümlerin doğruluğu, eksiksizliği veya güvenilirliği konusunda hiçbir garanti vermeyiz.</li>
                                <li><strong>Hata Payı:</strong> AI sistemleri hatalar veya yanlışlıklar içerebilir. Sağlanan bilgiyi her zaman doğrulamaya ve sadece bir çalışma yardımı olarak kullanmaya teşvik edilirsiniz.</li>
                                <li><strong>Sorumluluk:</strong> BanaSor, AI tarafından sağlanan bilgiye güvenmenizden kaynaklanan herhangi bir akademik sonuç, hata veya zarardan sorumlu tutulamaz.</li>
                            </ul>
                        </section>

                        <section id="tos-6">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Kabul Edilebilir Kullanım</h2>
                            <p>Uygulamayı kullanarak, aşağıdakileri yapmamayı kabul edersiniz:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Herhangi bir yasa veya düzenlemeyi ihlal etmek.</li>
                                <li>Zanlı, aldatıcı, tehditkar veya taciz edici içerik yüklemek.</li>
                                <li>Hizmetin güvenliğini ihlal etmeye, tersine mühendislik yapmaya veya kaynak kodunu çıkarmaya çalışmak.</li>
                                <li>Başka kullanıcıların hesaplarına yetkisiz erişim elde etmeye çalışmak.</li>
                                <li>Hizmeti amaçlanan amacı dışında kullanmak (örneğin, ticari kullanım için).</li>
                            </ul>
                        </section>

                        <section id="tos-7">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Fikri Mülkiyet</h2>
                            <p>Kullanıcı İçeriğiniz dışında, Uygulamanın kendisi, arayüzü, markası, logoları, özellikleri ve işlevselliği ("BanaSor Mülkiyeti") BanaSor'a aittir ve telif hakkı, ticari marka ve diğer fikri mülkiyet yasalarıyla korunur.</p>
                        </section>

                        <section id="tos-8">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Fesih</h2>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Kullanıcı Tarafından:</strong> Üyeliğinizi istediğiniz zaman <a href="mailto:banasor.development@gmail.com" className="text-blue-400 hover:text-blue-300">banasor.development@gmail.com</a> adresinden bize ulaşarak hesabınızı silerek sonlandırabilirsiniz.</li>
                                <li><strong>BanaSor Tarafından:</strong> Bu Koşulları ihlal etmeniz durumunda veya herhangi bir nedenle hesabınızı askıya alma veya kalıcı olarak sonlandırma hakkını saklı tutarız.</li>
                            </ul>
                        </section>

                        <section id="tos-9">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Garanti Sorumluluk Reddi</h2>
                            <p>HİZMET SİZE "OLDUĞU GİBİ" VE "MEVCUT OLDUĞU GİBİ" SAĞLANIR. BANASOR, HİZMETİN KESİNTİSİZ, HATA SIZ, GÜVENLİ VEYA TÜM İHTİYAÇLARINIZI KARŞILAYACAĞINI İFADE EDEN VEYA ZIMNİ HİÇBİR GARANTİ VERMEZ.</p>
                        </section>

                        <section id="tos-10">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Sorumluluk Sınırlaması</h2>
                            <p>YASAL OLARAK İZİN VERİLEN AZAMİ ÖLÇÜDE, BANASOR (VEYA YÖNETİCİLERİ, ÇALIŞANLARI) UYGULAMAYI KULLANMANIZDAN VEYA KULLANAMAMANIZDAN KAYNAKLANAN DOLAYLI, ARIZİ, ÖZEL, SONUÇSAL VEYA CEZAİ ZARARLARDAN (VERİ KAYBI, KAR KAYBI VEYA AKADEMİK BAŞARISIZLIK DAHİL) SORUMLU OLMAZ.</p>
                        </section>

                        <section id="tos-11">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Koşullarda Değişiklikler</h2>
                            <p>Bu Koşulları zaman zaman güncelleme hakkını saklı tutarız. Değişiklik yaptığımızda, sayfanın üstündeki "Son Güncelleme" tarihini güncelleyeceğiz ve/veya Uygulama içinde size bildireceğiz. Değişikliklerin yürürlüğe girmesinden sonra Uygulamayı kullanmaya devam etmeniz, güncellenmiş Koşulları kabul ettiğinizi gösterir.</p>
                        </section>

                        <section id="tos-12">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">12. Bizimle İletişim</h2>
                            <p>Bu Kullanım Koşulları hakkında sorularınız varsa, lütfen bize ulaşın:</p>
                            <p><strong>E-posta:</strong> <a href="mailto:banasor.development@gmail.com" className="text-blue-400 hover:text-blue-300">banasor.development@gmail.com</a></p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

