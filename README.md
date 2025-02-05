# 🌍 Rest Countries Uygulaması

Bu proje dünya üzerindeki ülkelerle ilgili bilgileri dinamik bir şekilde görüntüleyen bir React uygulamasıdır. Kullanıcılar ülkeleri arayabilir, bölgelere göre filtreleyebilir ve seçtikleri ülkeler hakkında detaylı bilgilere ulaşabilir. Aşağıda projede kullandığım bazı önemli teknikleri ve özellikleri bulabilirsiniz:

## Kullanılan Teknikler ve Özellikler

- **Ülke Arama ve Filtreleme:**  
  Kullanıcılar ülkeler arasında arama yaparak istedikleri ülkeyi hızlıca bulabiliyor. Ayrıca bölgeler arası filtreleme yaparak yalnızca ilgilendikleri bölgedeki ülkeleri görüntüleyebiliyorlar.

- **Kapsamlı Ülke Detayları:**  
  Her ülke seçildiğinde kullanıcılar o ülkenin adı, nüfusu, bölgesi, başkenti gibi bilgilerin yanı sıra dil, para birimi, internet alan adı ve komşu ülkeler gibi daha fazla bilgiye erişebiliyor.

- **Karanlık Mod Desteği:**  
  Kullanıcıların uygulama deneyimini kişiselleştirebilmeleri için karanlık mod desteği ekledim. Tema değişikliği yerel depolama (localStorage) sayesinde sayfa yenilendiğinde bile korunuyor.

- **Responsive Tasarım:**  
  Projeyi mobil öncelikli responsive bir tasarımla geliştirdim. Hem masaüstü hem de mobil cihazlarda kullanıcı dostu bir deneyim sunacak şekilde optimize ettim.

- **Veri Kaynağı:**  
  Ülke verileri **Rest Countries API** üzerinden alındı ve uygulama içerisinde dinamik olarak kullanıldı.

- **Hash Router Yapısı:**  
  Uygulama içerisinde hash tabanlı yönlendirme kullanarak kullanıcıların sayfa geçişlerinde URL'lerin düzgün şekilde yönetilmesini sağladım.

- **useContext ile Tema ve Component Yönetimi:**  
  Tema ve bileşen yönetimini daha verimli ve dinamik bir şekilde yapmak için `useContext` hook'u kullanarak global state yönetimini kolaylaştırdım.

## Hedefler

Bu projede React'in temel özelliklerini kullanarak interaktif ve kullanıcı dostu bir deneyim yaratmayı, dünya ülkelerine dair bilgileri kolayca erişilebilir ve etkileşimli bir şekilde sunmayı hedefledim.
