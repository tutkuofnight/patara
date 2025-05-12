### Patara Mulakat

Bu mülakat projesi aşağıdaki teknolojiler kullanılarak geliştirildi:

- Nextjs ~ Page Router
- Shadcn UI
- TypeScript
- TailwindCSS
- Framer Motion

### Projeyi Çalıştırın

```bash
git clone https://github.com/tutkuofnight/patara.git
```


Bu proje Nodejs `v22.14.0` sürümü ile geliştirildi. Dolayısıla buna uyumlu bir sürüm kullanıyorsanız aşağıdaki komutları takip edin:

```bash
npm install
npm run dev
```
Eğer Nodejs sürümünüz farklı ise Docker ile aşağıdaki komutları takip ederek container içerisinde çalıştırabilirsiniz:

```bash
docker build -t patara .
docker run -p 3000:3000 patara
```

### Notlar
- Proje üzerinde en çok yoğunlaştığım konu shadcn üzerine ekstradan tailwind yazmak yerine shadcn komponentlerini figma'daki tasarım elementlerine ve renklerine tailwind aracılığı ile implemente edip direkt olarak Design System'ı konfigüre ettim. Bu sayede shadcn komponentlerini kullandığım herhangi bir yerde stil yazmadım.
