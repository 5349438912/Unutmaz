# 🔄 Yeni Sohbet Başlangıç Promptu

Yeni bir Claude sohbeti/oturumu açtığında (bu depo seçiliyken) aşağıdaki metni
kopyala-yapıştır — Claude tüm kanal hafızasını yükleyip kaldığı yerden devam eder:

---

> Signal Files YouTube Shorts kanalı projesine devam ediyoruz. Şunları yap:
>
> 1. `CLAUDE.md`'deki kalıcı kuralları uygula (beceri kullanımı dahil)
> 2. `Youtube-kanal-2/URETIM-KURALLARI.md` (üretim anayasası, 48 kural),
>    `Youtube-kanal-2/VIDEO-LISTESI.md` (video sırası ve durumları) ve
>    `Youtube-kanal-2/ANALIZ-DEFTERI.md` (performans kayıtları) dosyalarını oku
> 3. Bana güncel durumu özetle: hangi videolar yayında, sırada ne var,
>    bekleyen iş/karar var mı
> 4. Sıradaki adımı öner ve onayımı bekle
>
> Not: ViewMade (video üretimi), vidIQ (analiz) ve Higgsfield (denetim sandbox'ı)
> connector'ları bağlı olmalı — değilse söyle. Ücretli üretimleri onayım olmadan başlatma.

---

## Hatırlatmalar

- **Connector'lar hesabına bağlı** — yeni oturum da ViewMade/vidIQ/Higgsfield'ı görür.
  Oturum başında bağlanmadılarsa claude.ai → Settings → Connectors'tan kontrol et.
- **Zamanlanmış görevler eski oturuma bağlıdır** (ör. Pazartesi haftalık analizi).
  Eski oturumu silme; raporlar oraya düşer. Yeni oturumda yeniden kurdurmak istersen
  "haftalık analiz görevini bu oturuma kur" demen yeterli.
- **Videoların YouTube linklerini** her yayından sonra aktif oturuma yapıştır —
  ANALIZ-DEFTERI kaydı ve K33 takibi için gerekli.
