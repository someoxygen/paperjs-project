
# 📌 Paper.js Angular Projesi

Bu proje, **Angular** ve **Paper.js** kullanarak dinamik bir çizim arayüzü sağlar. Kullanıcılar, genişlik, yükseklik, dikey/yatay kayıt sayısı ve profil genişliği gibi parametreleri girerek **çizimi anında güncelleyebilir**.

---

## 🚀 **Kurulum ve Çalıştırma Adımları**

### **1️⃣ Bağımlılıkları Kurun**
Öncelikle, projenin çalışması için **Node.js** ve **Angular CLI**'ın yüklü olması gerekir.

#### **🔹 Node.js Kontrolü**
Node.js yüklü olup olmadığını kontrol etmek için terminale şunu yazın:
sh
node -v

Eğer yüklü değilse, [Node.js resmi web sitesinden](https://nodejs.org/) en güncel sürümü indirip yükleyin.

#### **🔹 Angular CLI Kurulumu**
Angular CLI yüklü olup olmadığını kontrol etmek için:
sh
ng version

Eğer Angular CLI yüklü değilse, şu komutla yükleyebilirsiniz:
sh
npm install -g @angular/cli

---

### **2️⃣ Projeyi Klonlayın**
GitHub'daki projeyi yerel makinenize indirmek için:
sh
git clone https://github.com/KULLANICI_ADINIZ/paperjs-project.git

Ardından proje klasörüne girin:
sh
cd paperjs-project

---

### **3️⃣ Bağımlılıkları Yükleyin**
Projenin bağımlılıklarını yüklemek için aşağıdaki komutu çalıştırın:

sh
npm install

Bu işlem, `package.json` içinde belirtilen tüm bağımlılıkları yükleyecektir.

---

### **4️⃣ Projeyi Çalıştırın**
Geliştirme ortamında projeyi başlatmak için:

sh
ng serve

Tarayıcıda aşağıdaki adrese giderek projeyi görebilirsiniz:

sh
http://localhost:4200/

---

## 🔧 **Proje Yapısı**

paperjs-project
│── src/
│   ├── app/
│   │   ├── components/drawing/      # Paper.js çizim bileşeni
│   │   │   ├── drawing.component.ts  # Ana bileşen
│   │   │   ├── drawing.component.html # Çizim arayüzü
│   │   │   ├── drawing.component.css  # Stil dosyası
│   │── app.component.ts         # Ana Angular bileşeni
│   │── app.module.ts            # Angular modülü
│── assets/                      # Statik dosyalar
│── package.json                  # Bağımlılıkları içerir
│── angular.json                   # Angular yapılandırma dosyası
│── README.md                      # Bu doküman


---

## 📦 **Bağımlılıklar**
Bu proje aşağıdaki kütüphaneleri kullanır:

| Bağımlılık | Açıklama |
|------------|----------|
| **Angular** | Web uygulamaları geliştirmek için framework |
| **Paper.js** | Canvas üzerinde vektörel çizim yapmak için kütüphane |
| **TypeScript** | JavaScript'in güçlü bir superset versiyonu |
| **Bootstrap** | Daha iyi stil için |

Paper.js’yi projeye eklemek için:
sh
npm install paper


Eğer Paper.js import hatası alırsanız, şu şekilde import ettiğinizden emin olun:

ts
import paper from 'paper';


---

## 💡 **Özellikler**
✅ Kullanıcı dostu **kontroller** ile parametre girişi  
✅ **Paper.js entegrasyonu** sayesinde anlık çizim güncellenmesi  
✅ **Dikey ve yatay kayıt ekleme** seçenekleri  
✅ **Angular Standalone Components** kullanımı  
✅ Responsive tasarım  

---


🚀 **Şimdi projeyi çalıştırabilir ve Paper.js ile interaktif çizimler yapabilirsiniz!**  
Eğer sorularınız varsa, GitHub **Issues** sekmesinden veya buradan bana yazabilirsiniz. 😊


---

## **📌 README.md Dosyasını Projeye Ekleme**
Eğer dosyayı manuel olarak oluşturmak istersen:

1. **Proje klasörüne gidin** (`cd paperjs-project`).
2. **Yeni bir `README.md` dosyası oluşturun:**
   sh
   touch README.md
   
   _(Windows için: `echo > README.md` komutunu kullanabilirsiniz.)_
3. **Dosyanın içine yukarıdaki metni yapıştırın.**
4. **GitHub’a yüklemek için:**
   sh
   git add README.md
   git commit -m "README.md eklendi"
   git push origin main
   

---
