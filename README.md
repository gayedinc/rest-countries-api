# 🌍 Rest Countries Uygulaması

> Dünyadaki ülkeleri arayabileceğiniz, filtreleyebileceğiniz ve detaylı bilgilere ulaşabileceğiniz, sade ve duyarlı (responsive) tasarıma sahip modern bir React uygulaması.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5)

## 🔍 Proje Özeti

**Rest Countries App**, **[Rest Countries API](https://restcountries.com/)** kullanılarak geliştirilen ve ülkelerle ilgili bilgileri dinamik olarak sunan bir React uygulamasıdır.  
Kullanıcılar ülke adına göre arama yapabilir, bölgelere göre filtreleme gerçekleştirebilir ve seçtikleri ülkenin detaylarına ulaşabilir.

![image](https://github.com/user-attachments/assets/d797e4f5-f10a-4b38-94fd-06dd40b5c515)

## 🚀 Özellikler

### 🔎 Ülke Arama ve Filtreleme
- Gerçek zamanlı olarak ülke adına göre arama yapılabilir.
- Dropdown menü ile kıta veya bölge bazlı filtreleme gerçekleştirilebilir.

![image](https://github.com/user-attachments/assets/3110be63-531a-4f78-9540-33aa87441f21)

### 📄 Ülke Detay Sayfası
- Ülke adı, nüfusu, bölgesi, başkenti, dilleri, para birimi, internet alan adı, komşu ülkeleri gibi birçok bilgiye erişim sağlanır.
- Detay sayfasında **ülke adı animasyonla** ekrana gelir.

![image](https://github.com/user-attachments/assets/02036592-dbb4-4ee4-a6ce-fc6f7e2e0947)

### 🌙 Karanlık Mod Desteği
- Açık ve koyu tema arasında geçiş yapılabilir.
- Seçilen tema `localStorage`’a kaydedilerek oturumlar arasında kalıcılık sağlanır.

![Karanlık Mod](/img/rest-countries-darkmode.png)

### 📱 Responsive Tasarım
- Mobil öncelikli yapı ile tüm ekran boyutlarına uyum sağlar.

### 🔗 HashRouter ile Yönlendirme
- Sayfa geçişleri hash tabanlı URL yapısı (`#`) ile gerçekleştirilir.  
  Bu sayede sayfalar arasında gezinme ve doğrudan bağlantı verme sağlanır.

### 🧠 Global Tema Yönetimi (Context API ile)
- `useContext` kullanılarak tema kontrolü ve bileşenler arası veri paylaşımı kolaylaştırılmıştır.
- Prop drilling problemi ortadan kaldırılmıştır.

## 🌐 Canlı Demo

🔗 [https://rest-countries-api-taupe-rho.vercel.app](https://rest-countries-api-taupe-rho.vercel.app)

## 📂 Proje Dosya Yapısı

```bash
📦 public
 ┗ 📂 img

📦 src
 ┣ 📂 assets
 ┃ ┗ 📂 css
 ┃   ┣ 📄 darkMode.css           # Karanlık tema stilleri
 ┃   ┣ 📄 main.css               # Genel stiller
 ┃   ┗ 📄 reset.css              # Tarayıcı varsayılanlarını sıfırlar
 ┣ 📂 components
 ┃ ┣ 📄 CountryContent.jsx      # Ülkelerin listelendiği ana bileşen
 ┃ ┣ 📄 CountryDetails.jsx      # Detay sayfası bileşeni
 ┃ ┗ 📄 Header.jsx              # Uygulama üst çubuğu ve filtre alanı
 ┣ 📄 App.jsx                   # Ana uygulama bileşeni
 ┣ 📄 main.jsx                  # React DOM giriş noktası
┗ 📄 index.html                 # HTML şablonu
