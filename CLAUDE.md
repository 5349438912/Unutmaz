# Signal Files — YouTube Shorts Kanal Projesi

Bu depo, **Signal Files** YouTube Shorts kanalının (AI + bilim belgesel nişi, İngilizce, ABD hedefli)
üretim üssüdür. Videolar ViewMade MCP ile üretilir, vidIQ ile araştırılır, Higgsfield sandbox ile
denetlenir. Kanal varlıkları ve kurallar `Youtube-kanal-2/` klasöründedir.

## Kalıcı kurallar

1. **Üretim anayasası bağlayıcıdır:** Her video işi (konu seçimi, brief yazımı, senaryo, inceleme,
   paketleme, analitik) `Youtube-kanal-2/URETIM-KURALLARI.md` dosyasındaki kurallara göre yapılır.
   Çelişki durumunda anayasa, genel becerilerden önceliklidir.

2. **Kurulu beceriler ilgili her işte KULLANILIR** (`.claude/skills/`):
   - `reel-script-writer` + `script-writer` + `scriptwriting` → ViewMade'e özel `script` beat'leri
     yazarken, hook/senaryo taslaklarında, senaryo revizyonlarında
   - `youtube-optimizer` → her yükleme paketinde (başlık, açıklama, etiket, SEO)
   - `tiktok-creator` → TikTok/Reels çapraz yayın içeriklerinde
   - `find-skills` → yeni bir yetenek ihtiyacı doğduğunda ekosistemi tara
   - vidIQ skill'leri (packaging-studio, retention-analysis, trend-radar vb.) → ilgili analiz/paketleme
     işlerinde MCP araçlarıyla birlikte
   Beceri kullanmadan senaryo/paket üretme; ilgili beceri varsa önce onu yükle ve uygula.

3. **Ücretli üretim onaysız başlatılmaz:** ViewMade üretimleri (20 kredi/video) kullanıcı onayı ister.
   Ücretsiz araçlar (katalog, durum, brief önerisi, görüntü kontrolü) serbest.

4. **Her video yüklenmeden önce denetlenir:** Higgsfield sandbox ile indir → whisper transkript +
   kare analizi → K11-K14 ve K24-K28 denetimi → Türkçe çeviri + rapor → kullanıcı kararı.

5. **ViewMade internal_error aldatıcıdır:** create çağrısı "internal_error" dönse bile iş çoğu zaman
   oluşmuştur — retry etmeden önce `viewmade_list_videos` ile kontrol et.

6. **Bu konteynerde viewmade.com ve CDN'ler ağ politikasıyla engellidir;** indirme/inceleme işleri
   Higgsfield sandbox üzerinden yapılır (interneti açık, ffmpeg + faster-whisper kurulu).
