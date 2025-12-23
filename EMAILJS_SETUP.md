# EmailJS Kurulum Talimatları

İletişim formunun çalışması için EmailJS kurulumu yapmanız gerekmektedir.

## Adımlar:

### 1. EmailJS Hesabı Oluşturun
- https://dashboard.emailjs.com/ adresine gidin
- Ücretsiz hesap oluşturun

### 2. Email Servisi Ekleyin
- Dashboard'da "Email Services" bölümüne gidin
- "Add New Service" butonuna tıklayın
- Gmail, Outlook veya başka bir e-posta servisi seçin
- Servis ID'yi not edin (örn: `service_xxxxx`)

### 3. E-posta Template Oluşturun
- "Email Templates" bölümüne gidin
- "Create New Template" butonuna tıklayın
- Template içeriğini şu şekilde ayarlayın:

```
Konu: {{subject}}

Gönderen: {{from_name}}
E-posta: {{from_email}}

Mesaj:
{{message}}

---
Bu mesaj BanaSor iletişim formundan gönderilmiştir.
```

- Template ID'yi not edin (örn: `template_xxxxx`)

### 4. Public Key Alın
- "Account" > "General" bölümüne gidin
- "Public Key" değerini kopyalayın

### 5. Environment Variables Ayarlayın
Proje kök dizininde `.env.local` dosyası oluşturun:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Uygulamayı Yeniden Başlatın
```bash
npm run dev
```

## Notlar:
- `.env.local` dosyası `.gitignore` içinde olduğu için Git'e commit edilmeyecektir
- EmailJS ücretsiz planında ayda 200 e-posta gönderme limiti vardır
- Production'da environment variables'ları hosting sağlayıcınızın panelinden ayarlayın

