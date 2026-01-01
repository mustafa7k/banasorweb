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
                            Son güncelleme: 24 Ekim 2025
                        </p>

                        <section id="intro">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Giriş</h2>
                            <p>
                                BanaSor'a ("biz," "bize," veya "bizim") hoş geldiniz. Kullanıcı gizliliğini korumaya kararlıyız. Bu Gizlilik Politikası, mobil uygulamanızı ("Uygulama") kullanırken bilgilerinizi nasıl topladığımızı, kullandığımızı, açıkladığımızı ve koruduğumuzu açıklar.
                            </p>
                            <p>Uygulamayı kullanarak, bu politikaya göre bilgilerin toplanmasına ve kullanımına izin vermiş olursunuz.</p>
                        </section>

                        <section id="info">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Topladığımız Bilgiler</h2>
                            <p>Sizin için Hizmetimizi sağlamak ve iyileştirmek için çeşitli bilgi türlerini toplarız.</p>

                            <h3 className="text-xl font-bold text-white mt-6 mb-2">A. Sizden Sağladığınız Bilgiler</h3>
                            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 mt-4">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Hesap ve Profil Bilgileri:</strong> Hesap oluştururken kişisel bilgiler toplarız. Bunlar şunları içerir: <strong>Tam Adınız</strong>, <strong>E-posta Adresiniz</strong> ve Apple Sign-In veya Google Sign-In aracılığıyla kimlik doğrulama verileri.</li>
                                    <li><strong>Eğitim Bilgileri:</strong> Öğrenme deneyiminizi kişiselleştirmek için şunları toplarız: <strong>Sınıf Düzeyiniz</strong>, <strong>Sınav Hedefiniz</strong>, <strong>Akademik Yönünüz</strong> ve seçilen <strong>YDT Dili</strong> (varsa).</li>
                                    <li><strong>Kullanıcı Tarafından Oluşturulan İçerik:</strong> Oluşturduğunuz verileri depolarız, bunlar çalışma planlarınızı, planlanan günlük aktivitelerinizi, uygulama sınav detaylarınızı, sınav sonuçlarınızı ve konu tamamlama ilerlemenizi içerir.</li>
                                    <li><strong>Çözülen Sorular:</strong> Bir soru gönderdiğinizde, <strong>soru görüntüsünü</strong> ve AI tarafından oluşturulan <strong>çözüm metnini</strong> çözülen sorular günlüğünüzde depolarız.</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-bold text-white mt-6 mb-2">B. Otomatik Olarak Toplanan Bilgiler</h3>
                            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 mt-4">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Abonelik Bilgileri:</strong> Abonelikleri yönetmek için <strong>RevenueCat</strong>'i kullanırız. Abonelik kayıtlarımızdan veri toplarız, bunlar <strong>Abonelik Durumunuzu</strong>, <strong>Ürün Kimliğinizi</strong>, abonelik tarihlerini (örneğin, sona erme ve satın alma tarihleri) ve <strong>Mağazayı</strong> (App Store veya Play Store) içerir.</li>
                                    <li><strong>Ödeme bilgileriniz veya kredi kartı detaylarınızı toplamadığımızı, saklamadığımızı veya işlemediğimizi unutmayın.</strong> Tüm ödemeler Apple App Store veya Google Play Store tarafından güvenli bir şekilde işlenir.</li>
                                    <li><strong>Kullanım ve Cihaz Verileri:</strong> Arka uç sağlayıcımız (Supabase) güvenlik, analitik ve hata ayıklama için standart günlük bilgileri (IP adresi, cihaz türü, OS sürümü, zaman damgaları) otomatik olarak toplayabilir.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="use">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Bilgilerimizi Nasıl Kullanıyoruz</h2>
                            <p>Toplanan verileri aşağıdaki amaçlarla kullanırız:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Hizmetimizi Sağlamak ve Bakımını Yapmak İçin:</strong> Hesabınızı oluşturmak, kişiselleştirilmiş çalışma planları sağlamak, ilerlemenizi takip etmek ve çözülen soruları günlüğe kaydetmek için.</li>
                                <li><strong>AI Güçlü Özellikleri Sağlamak İçin:</strong>
                                    <ul className="list-disc pl-6 space-y-2 mt-2">
                                        <li>Soru görüntünüzü analiz etmek ve bir <strong>çözüm metni</strong> oluşturmak için AI hizmet sağlayıcımıza (Google Gemini) göndeririz.</li>
                                        <li>Kişiselleştirilmiş haftalık çalışma planları oluşturmak için <strong>sınav hedefinizi, sınıfınızı</strong> ve <strong>akademik yönünüzü</strong> kullanırız.</li>
                                    </ul>
                                </li>
                                <li><strong>Aboneliğinizi Yönetmek İçin:</strong> <strong>RevenueCat</strong> ile satın alma işleminizi doğrulamak, premium özellikleri açmak ve abonelik durumunuzu yönetmek için.</li>
                                <li><strong>Sizinle İletişim Kurmak İçin:</strong> Hesabınızla ilgili e-postalar veya anlık bildirimler göndermek, çalışma hatırlatıcıları veya hizmet güncellemeleri için.</li>
                                <li><strong>Uygulamamızı İyileştirmek İçin:</strong> Kullanım kalıplarını analiz etmek, teknik sorunları teşhis etmek ve işlevselliği iyileştirmek için.</li>
                            </ul>
                        </section>

                        <section id="share">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Bilgilerimizi Nasıl Paylaşıyoruz</h2>
                            <p>Kişisel verilerinizi satmayız. Uygulamamızı işletmek için gerekli olan aşağıdaki üçüncü taraf hizmet sağlayıcılarıyla sadece paylaşırız:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Supabase (Veritabanı ve Arka Uç):</strong> Tüm verileriniz Supabase sunucularında güvenli bir şekilde depolanır.</li>
                                <li><strong>Google (Gemini AI):</strong> AI sağlayıcımız. Bir soru gönderdiğinizde, görüntü işleme için Google'ın AI platformuna gönderilir.</li>
                                <li><strong>RevenueCat (Abonelik Yönetimi):</strong> Abonelik durumunuzu doğrulamak ve yönetmek için benzersiz bir kullanıcı kimliği ve satın alma makbuzlarını RevenueCat ile paylaşırız.</li>
                                <li><strong>Apple App Store ve Google Play Store:</strong> Abonelik satın alma işlemlerinizi işlemek ve onaylamak için API'lerine bağlanırız.</li>
                            </ul>
                            <p>Yasal gereklilikler veya geçerli kamu otoritelerinin talepleri (örneğin, bir mahkeme veya hükümet ajansı) durumunda bilgilerinizi de açıklayabiliriz.</p>
                        </section>

                        <section id="security">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Veri Güvenliği</h2>
                            <p>Verilerinizi korumak için endüstri standardı teknik ve organizasyonel önlemler kullanırız. Tüm veri iletimi SSL/TLS ile şifrelenir. Ancak, İnternet üzerinden iletim veya elektronik depolama yönteminin %100 güvenli olmadığını unutmayın.</p>
                        </section>

                        <section id="retention">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Veri Saklama ve Silme</h2>
                            <p>Hesabınız aktif olduğu sürece kişisel verilerinizi saklarız. Hesabınızı istediğiniz zaman silme hakkınız vardır.</p>
                            <p>Hesabınızın silinmesini ve tüm ilişkili kişisel verilerin silinmesini talep etmek için <a href="mailto:banasor.development@gmail.com" className="text-blue-400 hover:text-blue-300">banasor.development@gmail.com</a> adresinden bize ulaşabilirsiniz. Talebinizi aldıktan sonra, verilerinizi sistemlerimizden kalıcı olarak sileceğiz.</p>
                        </section>

                        <section id="rights">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Gizlilik Haklarınız</h2>
                            <p>Konumunuza bağlı olarak, kişisel verilerinizle ilgili haklara sahip olabilirsiniz, bunlar şunları içerir:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Kişisel verilerinizin kopyalarına erişim hakkı.</li>
                                <li>Hatalı bilgileri düzeltme hakkı.</li>
                                <li>Kişisel verilerinizin silinmesini talep etme hakkı.</li>
                                <li>İşlemi kısıtlama hakkı.</li>
                            </ul>
                            <p>Bu haklardan herhangi birini kullanmak için lütfen bize ulaşın.</p>
                        </section>

                        <section id="children">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Çocukların Gizliliği</h2>
                            <p>Hizmetimiz genel olarak 13 yaş ve üstü öğrencilere yöneliktir. 13 yaş altındaki çocuklardan kişisel olarak tanımlanabilir bilgi toplamıyoruz. Bir ebeveyn olarak çocuğunuzun bize Kişisel Veri sağladığını fark ederseniz, lütfen bize ulaşın. 13 yaş altındaki bir çocuktan Kişisel Veri topladığımızı fark edersek, bu bilgileri kaldırmak için adımlar atacağız.</p>
                        </section>

                        <section id="changes">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Bu Politika'da Değişiklikler</h2>
                            <p>Gizlilik Politikamızı zaman zaman güncelleyebiliriz. Değişiklik yaptığımızda, Uygulama içinde yeni Gizlilik Politikasını yayınlayacağız ve "Son Güncelleme" tarihini güncelleyeceğiz. Değişikliklerin yürürlüğe girmesinden sonra Uygulamayı kullanmaya devam etmeniz, güncellenmiş Politikayı kabul ettiğinizi gösterir.</p>
                        </section>

                        <section id="contact">
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Bizimle İletişim</h2>
                            <p>Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen bize ulaşın:</p>
                            <p><strong>E-posta:</strong> <a href="mailto:banasor.development@gmail.com" className="text-blue-400 hover:text-blue-300">banasor.development@gmail.com</a></p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

