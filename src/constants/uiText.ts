/**
 * Uygulama genelindeki tüm arayüz metinleri, başlıklar ve etiketler
 * Katı Clean Code / Separation of Concerns: Sıfır Hardcoded Metin
 */
export const UI_TEXT = {
  APP: {
    TITLE: 'Psikolojik Araştırma & Nostalji Deneyimi',
    SUBTITLE: 'WebXR 360° Sürükleyici Deney',
    COMPATIBILITY_BADGE: 'Meta Quest & WebXR Uyumlu',
    FOOTER: 'Psikolojik Araştırma Platformu • WebXR 360° Video ve Ölçek Sistemi',
  },
  WELCOME: {
    BADGE: 'Araştırma Katılımcı Formu',
    TITLE: 'Hoş Geldiniz',
    DESCRIPTION:
      'Bu araştırma, sanal gerçeklik (VR) ortamında 360° video deneyimi ile duygu durumu, psikolojik iyi oluş ve kişisel nostalji arasındaki etkileşimi incelemektedir. Çalışma 4 kısa değerlendirme bölümü ve ardından sürükleyici bir 360° video gösteriminden oluşmaktadır.',
    SECTIONS: [
      {
        TITLE: '1. Demografik Bilgiler',
        SUBTITLE: '5 kısa soru',
      },
      {
        TITLE: '2. Anlık Duygu Durumu',
        SUBTITLE: "1'den 10'a derecelendirme",
      },
      {
        TITLE: '3. Psikolojik İyi Oluş',
        SUBTITLE: '8 Likert maddesi',
      },
      {
        TITLE: '4. Kişisel Nostalji Ölçeği',
        SUBTITLE: '20 nostalji maddesi',
      },
    ],
    ESTIMATED_TIME: 'Toplam süre: ~4-5 dakika',
    START_BUTTON: 'Değerlendirmeye Başla',
  },
  PROGRESS: {
    GENERAL_LABEL: 'Genel Araştırma İlerlemesi',
    SECTION_LABEL: 'Bölüm İlerlemesi',
    QUESTION_PREFIX: 'Soru',
  },
  QUESTION: {
    AGE_LABEL: 'Yaş',
    AGE_DECREASE_ARIA: 'Yaşı Azalt',
    AGE_INCREASE_ARIA: 'Yaşı Artır',
    QUICK_SELECT_LABEL: 'Hızlı Seç:',
    NO_OPTIONS_PLACEHOLDER: 'Henüz seçenek eklenmedi.',
    NAV_PREV: 'Geri',
    NAV_NEXT: 'Sonraki Soru',
    NAV_FINISH: 'Ölçeği Tamamla',
  },
  TRANSITIONS: {
    TO_SECTION_2: {
      TITLE: 'İçsel Odaklanma',
      MESSAGE:
        'Demografik bilgileriniz kaydedildi. Şimdi odağınızı şu anki iç dünyanıza ve duygularınıza yöneltin...',
    },
    TO_SECTION_3: {
      TITLE: 'Psikolojik Değerlendirme',
      MESSAGE:
        'Duygu durumunuz kaydedildi. Yaşam doyumu ve psikolojik iyi oluş değerlendirmesine geçiliyor...',
    },
    TO_SECTION_4: {
      TITLE: 'Hafıza ve Anılar',
      MESSAGE:
        'İyi oluş değerlendirmesi tamamlandı. Şimdi anılarınıza ve geçmiş deneyimlerinize doğru kısa bir yolculuğa çıkıyoruz...',
    },
    TO_VIDEO_PREP: {
      TITLE: 'Deneyim Hazırlığı',
      MESSAGE:
        'Tüm ölçekler tamamlandı. Yanıtlarınız kaydedildi, 360° görsel deneyime hazırlanıyorsunuz...',
    },
  },
  VIDEO_READY: {
    SUCCESS_BADGE: 'Ölçekler Başarıyla Tamamlandı',
    TITLE: '360° Deneyime Hazırsınız',
    DESCRIPTION:
      '34 maddenin tamamına verdiğiniz yanıtlar kaydedilmiştir. Şimdi 360° VR video deneyimine hazırsınız. Dilerseniz araştırma verilerinizi CSV olarak indirebilirsiniz.',
    WELL_BEING_LABEL: 'İyi Oluş Toplam Puanı',
    WELL_BEING_MAX: '/ 56',
    NOSTALGIA_LABEL: 'Nostalji Toplam Puanı',
    NOSTALGIA_MAX: '/ 100',
    PROCEED_BUTTON: 'Videoya Geçelim (360° VR)',
    DOWNLOAD_BUTTON: 'Yanıtları CSV İndir',
    DOWNLOADED_BUTTON: 'CSV Yanıtları İndirildi (Tekrar İndir)',
  },
  VR_SCENE: {
    LOADING: 'WebXR / A-Frame 360° Sahnesi Yükleniyor...',
    PLAY_TOOLTIP: 'Oynat',
    PAUSE_TOOLTIP: 'Duraklat',
    REWIND_TOOLTIP: 'Başa Sar',
    MUTE_TOOLTIP: 'Sesi Kapat',
    UNMUTE_TOOLTIP: 'Sesi Aç',
    FLIP_BUTTON_PREFIX: 'Yön Düzelt',
    FLIP_UPRIGHT: 'Dik 180°',
    FLIP_ORIGINAL: 'Orijinal',
    COMPLETION: {
      TITLE: 'Deneyim Tamamlandı',
      MESSAGE:
        'Psikolojik araştırma deneyimimize değerli vaktinizi ayırarak katkıda bulunduğunuz için içtenlikle teşekkür ederiz. Tüm yanıtlarınız güvenle kaydedilmiş ve arşivlenmiştir.',
      DOWNLOAD_CSV_BUTTON: 'CSV Dosyasını Tekrar İndir',
      REPLAY_BUTTON: 'Videoyu Tekrar İzle',
      RESTART_BUTTON: 'Başa Dön',
    },
  },
  CSV: {
    FILE_NAME_PREFIX: 'psikolojik_arastirma_yanitlari',
    HEADERS: [
      'Katilimci_ID',
      'Tarih_Saat',
      'Yas',
      'Cinsiyet',
      'Egitim_Duzeyi',
      'Sinif_Duzeyi',
      'Sosyo_Ekonomik_Duzey',
      'Anlik_Duygu_Durumu_1_10',
      'Iyi_Olus_M1',
      'Iyi_Olus_M2',
      'Iyi_Olus_M3',
      'Iyi_Olus_M4',
      'Iyi_Olus_M5',
      'Iyi_Olus_M6',
      'Iyi_Olus_M7',
      'Iyi_Olus_M8',
      'Iyi_Olus_Toplam_Puani',
      'Nostalji_M1_Ham',
      'Nostalji_M2_Ham',
      'Nostalji_M3_Ham',
      'Nostalji_M4_Ham',
      'Nostalji_M5_Ham',
      'Nostalji_M6_Ham',
      'Nostalji_M7_Ham',
      'Nostalji_M8_Ham',
      'Nostalji_M9_Ham',
      'Nostalji_M10_Ham',
      'Nostalji_M11_Ham',
      'Nostalji_M12_Ham',
      'Nostalji_M13_Ham',
      'Nostalji_M14_Ham',
      'Nostalji_M15_Ham',
      'Nostalji_M16_Ham',
      'Nostalji_M17_Ham',
      'Nostalji_M18_Ham',
      'Nostalji_M19_Ham',
      'Nostalji_M20_Ham',
      'Nostalji_M6_Ters_Puan',
      'Nostalji_M9_Ters_Puan',
      'Nostalji_M10_Ters_Puan',
      'Nostalji_M11_Ters_Puan',
      'Nostalji_M14_Ters_Puan',
      'Nostalji_Toplam_Puani',
    ] as const,
  },
} as const;
