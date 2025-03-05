
# 📌 Paper.js Angular Projesi

Bu proje, **Angular** ve **Paper.js** kullanarak dinamik bir çizim arayüzü sağlar. Kullanıcılar, genişlik, yükseklik, dikey/yatay kayıt sayısı ve profil genişliği gibi parametreleri girerek **çizimi anında güncelleyebilir**.

---

## 🚀 **Kurulum ve Çalıştırma Adımları**

### **1️⃣ Bağımlılıkları Kurun**
Öncelikle, projenin çalışması için **Node.js** ve **Angular CLI**'ın yüklü olması gerekir.

#### **🔹 Node.js Kontrolü**
Node.js yüklü olup olmadığını kontrol etmek için terminale şunu yazın:

node -v

Eğer yüklü değilse, [Node.js resmi web sitesinden](https://nodejs.org/) en güncel sürümü indirip yükleyin.

#### **🔹 Angular CLI Kurulumu**
Angular CLI yüklü olup olmadığını kontrol etmek için:

ng version

Eğer Angular CLI yüklü değilse, şu komutla yükleyebilirsiniz:

npm install -g @angular/cli

---

### **2️⃣ Projeyi Klonlayın**
GitHub'daki projeyi yerel makinenize indirmek için:
sh
git clone https://github.com/someoxygen/paperjs-project.git

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


http://localhost:4200/

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
✅ Kullanıcı dostu **controller** ile parametre girişi  
✅ **Paper.js entegrasyonu** sayesinde anlık çizim güncellenmesi  
✅ **Dikey ve yatay kayıt ekleme** seçenekleri  
✅ **Angular Standalone Components** kullanımı  
✅ Responsive tasarım  

