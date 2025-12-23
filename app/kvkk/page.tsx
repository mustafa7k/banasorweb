import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
    title: "KVKK Aydınlatma Metni - BanaSor",
    description: "BanaSor Kişisel Verilerin Korunması Kanunu aydınlatma metni",
};

export default function KVKK() {
    return (
        <main className="relative bg-stitch-navy min-h-screen text-white">
            <Header />
            <div className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                        KVKK Aydınlatma Metni
                    </h1>
                    <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
                        <p className="text-lg">
                            Son güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Veri Sorumlusu</h2>
                            <p>
                                6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz 
                                BanaSor Teknoloji tarafından veri sorumlusu sıfatıyla işlenmektedir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. İşlenen Kişisel Veriler</h2>
                            <p>Aşağıdaki kişisel verileriniz işlenmektedir:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, e-posta adresi</li>
                                <li><strong>İletişim Bilgileri:</strong> E-posta, telefon numarası</li>
                                <li><strong>Eğitim Bilgileri:</strong> Sınıf, alan, hedef sınav, çözülen sorular, deneme sonuçları</li>
                                <li><strong>Kullanım Bilgileri:</strong> Uygulama kullanım verileri, cihaz bilgileri</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. İşleme Amaçları</h2>
                            <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Eğitim hizmetlerinin sunulması</li>
                                <li>Kişiselleştirilmiş ders programları oluşturulması</li>
                                <li>Kullanıcı deneyiminin iyileştirilmesi</li>
                                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                                <li>İletişim ve bilgilendirme faaliyetleri</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. İşleme Hukuki Sebepleri</h2>
                            <p>Kişisel verileriniz aşağıdaki hukuki sebeplere dayanarak işlenmektedir:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Açık rızanız</li>
                                <li>Sözleşmenin kurulması veya ifası</li>
                                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                                <li>Meşru menfaatlerimiz</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Verilerin Aktarılması</h2>
                            <p>
                                Kişisel verileriniz, hizmet sağlayıcılarımız (bulut depolama, analitik servisler) 
                                ile sınırlı olarak paylaşılabilir. Verileriniz yurt dışına aktarılmamaktadır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Veri Saklama Süresi</h2>
                            <p>
                                Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal saklama 
                                sürelerine uygun olarak saklanmaktadır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Haklarınız</h2>
                            <p>KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                                <li>İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                                <li>İşlenmesini gerektiren sebeplerin ortadan kalkması halinde silinmesini veya yok edilmesini isteme</li>
                                <li>Düzeltme, silme, yok edilme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                                <li>Münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                                <li>Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Başvuru Hakkı</h2>
                            <p>
                                KVKK kapsamındaki haklarınızı kullanmak için başvurularınızı yazılı olarak 
                                iletebilirsiniz. Başvurularınız en geç 30 gün içinde değerlendirilecektir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. İletişim</h2>
                            <p>
                                KVKK kapsamındaki haklarınızı kullanmak veya sorularınız için bizimle iletişime geçebilirsiniz.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

