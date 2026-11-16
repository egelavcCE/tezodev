import type { QuestionItem, QuestionOption } from '../types/experience';
import { UI_TEXT } from '../constants/uiText';
import { APP_CONFIG } from '../constants/config';

/**
 * 7'li Likert Seçenekleri (Psikolojik İyi Oluş Ölçeği)
 */
export const wellBeingLikertOptions: QuestionOption[] = [
  { id: 'wb-1', value: 1, text: '1 - Kesinlikle katılmıyorum' },
  { id: 'wb-2', value: 2, text: '2 - Katılmıyorum' },
  { id: 'wb-3', value: 3, text: '3 - Biraz katılmıyorum' },
  { id: 'wb-4', value: 4, text: '4 - Kararsızım' },
  { id: 'wb-5', value: 5, text: '5 - Biraz katılıyorum' },
  { id: 'wb-6', value: 6, text: '6 - Katılıyorum' },
  { id: 'wb-7', value: 7, text: '7 - Kesinlikle katılıyorum' },
];

/**
 * 5'li Likert Seçenekleri (Kişisel Nostalji Ölçeği)
 */
export const nostalgiaLikertOptions: QuestionOption[] = [
  { id: 'nos-1', value: 1, text: '1 - Kesinlikle Katılmıyorum' },
  { id: 'nos-2', value: 2, text: '2 - Katılmıyorum' },
  { id: 'nos-3', value: 3, text: '3 - Kararsızım' },
  { id: 'nos-4', value: 4, text: '4 - Katılıyorum' },
  { id: 'nos-5', value: 5, text: '5 - Kesinlikle Katılıyorum' },
];

/**
 * 1'den 10'a Anlık Duygu Durumu Seçenekleri
 */
export const emotionOptions: QuestionOption[] = [
  { id: 'em-1', value: 1, text: '1 - Hiç iyi hissetmiyorum' },
  { id: 'em-2', value: 2, text: '2 - Çok kötü hissediyorum' },
  { id: 'em-3', value: 3, text: '3 - Kötü hissediyorum' },
  { id: 'em-4', value: 4, text: '4 - Biraz kötü hissediyorum' },
  { id: 'em-5', value: 5, text: '5 - Ne iyi ne kötü / Orta' },
  { id: 'em-6', value: 6, text: '6 - Biraz iyi hissediyorum' },
  { id: 'em-7', value: 7, text: '7 - İyi hissediyorum' },
  { id: 'em-8', value: 8, text: '8 - Oldukça iyi hissediyorum' },
  { id: 'em-9', value: 9, text: '9 - Çok iyi hissediyorum' },
  { id: 'em-10', value: 10, text: '10 - Mükemmel hissediyorum' },
];

/**
 * Bölüm Geçiş Mesajları (Merkezi UI_TEXT üzerinden)
 */
export const sectionTransitions = {
  toSection2: {
    title: UI_TEXT.TRANSITIONS.TO_SECTION_2.TITLE,
    message: UI_TEXT.TRANSITIONS.TO_SECTION_2.MESSAGE,
  },
  toSection3: {
    title: UI_TEXT.TRANSITIONS.TO_SECTION_3.TITLE,
    message: UI_TEXT.TRANSITIONS.TO_SECTION_3.MESSAGE,
  },
  toSection4: {
    title: UI_TEXT.TRANSITIONS.TO_SECTION_4.TITLE,
    message: UI_TEXT.TRANSITIONS.TO_SECTION_4.MESSAGE,
  },
  toVideoPrep: {
    title: UI_TEXT.TRANSITIONS.TO_VIDEO_PREP.TITLE,
    message: UI_TEXT.TRANSITIONS.TO_VIDEO_PREP.MESSAGE,
  },
};

/**
 * Araştırmanın Tüm 34 Maddelik Soru Havuzu
 */
export const questions: QuestionItem[] = [
  // ==========================================
  // BÖLÜM 1: DEMOGRAFİK BİLGİ FORMU (5 SORU)
  // ==========================================
  {
    id: 'demo_age',
    section: 1,
    sectionTitle: 'Bölüm 1: Demografik Bilgiler',
    questionNumber: 1,
    title: 'Yaşınız',
    question: 'Lütfen yaşınızı belirtiniz:',
    instruction: 'VR kumandası veya ekran kontrolleriyle yaşınızı ayarlayabilirsiniz.',
    type: 'number-counter',
    min: APP_CONFIG.MIN_AGE,
    max: APP_CONFIG.MAX_AGE,
    defaultValue: APP_CONFIG.DEFAULT_AGE,
    step: 1,
  },
  {
    id: 'demo_gender',
    section: 1,
    sectionTitle: 'Bölüm 1: Demografik Bilgiler',
    questionNumber: 2,
    title: 'Cinsiyetiniz',
    question: 'Lütfen cinsiyetinizi belirtiniz:',
    type: 'single-choice',
    options: [
      { id: 'g_female', value: 'Kadın', text: 'Kadın' },
      { id: 'g_male', value: 'Erkek', text: 'Erkek' },
      { id: 'g_other', value: 'Diğer / Belirtmek istemiyorum', text: 'Diğer / Belirtmek istemiyorum' },
    ],
  },
  {
    id: 'demo_education',
    section: 1,
    sectionTitle: 'Bölüm 1: Demografik Bilgiler',
    questionNumber: 3,
    title: 'Eğitim Düzeyiniz',
    question: 'Tamamladığınız veya halen devam ettiğiniz en yüksek eğitim düzeyi nedir?',
    type: 'single-choice',
    options: [
      { id: 'edu_primary', value: 'İlköğretim', text: 'İlköğretim' },
      { id: 'edu_high', value: 'Lise', text: 'Lise' },
      { id: 'edu_assoc', value: 'Ön Lisans', text: 'Ön Lisans' },
      { id: 'edu_bachelor', value: 'Lisans', text: 'Lisans' },
      { id: 'edu_grad', value: 'Lisansüstü (Yüksek Lisans / Doktora)', text: 'Lisansüstü (Yüksek Lisans / Doktora)' },
    ],
  },
  {
    id: 'demo_grade',
    section: 1,
    sectionTitle: 'Bölüm 1: Demografik Bilgiler',
    questionNumber: 4,
    title: 'Sınıf Düzeyiniz',
    question: 'Üniversite öğrencisi iseniz kaçıncı sınıftasınız?',
    type: 'single-choice',
    options: [
      { id: 'gr_prep', value: 'Hazırlık', text: 'Hazırlık' },
      { id: 'gr_1', value: '1. Sınıf', text: '1. Sınıf' },
      { id: 'gr_2', value: '2. Sınıf', text: '2. Sınıf' },
      { id: 'gr_3', value: '3. Sınıf', text: '3. Sınıf' },
      { id: 'gr_4', value: '4. Sınıf', text: '4. Sınıf' },
      { id: 'gr_none', value: 'Öğrenci değilim', text: 'Öğrenci değilim' },
    ],
  },
  {
    id: 'demo_ses',
    section: 1,
    sectionTitle: 'Bölüm 1: Demografik Bilgiler',
    questionNumber: 5,
    title: 'Sosyo-Ekonomik Düzey',
    question: 'Ailenizin ve kendinizin algılanan sosyo-ekonomik düzeyini nasıl tanımlarsınız?',
    type: 'single-choice',
    options: [
      { id: 'ses_low', value: 'Düşük', text: 'Düşük' },
      { id: 'ses_mid_low', value: 'Orta-Düşük', text: 'Orta-Düşük' },
      { id: 'ses_mid', value: 'Orta', text: 'Orta' },
      { id: 'ses_mid_high', value: 'Orta-Yüksek', text: 'Orta-Yüksek' },
      { id: 'ses_high', value: 'Yüksek', text: 'Yüksek' },
    ],
  },

  // =======================================================
  // BÖLÜM 2: ANLIK DUYGU DURUMU DEĞERLENDİRMESİ (1 MADDE)
  // =======================================================
  {
    id: 'emotion_state',
    section: 2,
    sectionTitle: 'Bölüm 2: Anlık Duygu Durumu',
    questionNumber: 6,
    title: 'Anlık Duygu Durumu Değerlendirmesi',
    question: 'Şu anki hissettiğiniz duygu yoğunluğu nedir?',
    instruction:
      'Aşağıda anlık duygu durumunuzu değerlendirmeniz için 1\'den 10\'a kadar derecelendirilmiş bir ölçek bulunmaktadır. Lütfen şu anki hissettiğiniz duygu yoğunluğuna en uygun olan rakamı seçiniz.',
    type: 'likert',
    options: emotionOptions,
  },

  // =====================================================
  // BÖLÜM 3: PSİKOLOJİK İYİ OLUŞ ÖLÇEĞİ (8 MADDE - 7'Lİ)
  // =====================================================
  {
    id: 'wb_1',
    section: 3,
    sectionTitle: 'Bölüm 3: Psikolojik İyi Oluş',
    questionNumber: 7,
    title: 'Madde 1',
    question: 'Amaçlı ve anlamlı bir yaşam sürdürüyorum.',
    type: 'likert',
    options: wellBeingLikertOptions,
  },
  {
    id: 'wb_2',
    section: 3,
    sectionTitle: 'Bölüm 3: Psikolojik İyi Oluş',
    questionNumber: 8,
    title: 'Madde 2',
    question: 'Sosyal ilişkilerim destekleyici ve tatmin edicidir.',
    type: 'likert',
    options: wellBeingLikertOptions,
  },
  {
    id: 'wb_3',
    section: 3,
    sectionTitle: 'Bölüm 3: Psikolojik İyi Oluş',
    questionNumber: 9,
    title: 'Madde 3',
    question: 'Günlük aktivitelerime bağlı ve ilgiliyim.',
    type: 'likert',
    options: wellBeingLikertOptions,
  },
  {
    id: 'wb_4',
    section: 3,
    sectionTitle: 'Bölüm 3: Psikolojik İyi Oluş',
    questionNumber: 10,
    title: 'Madde 4',
    question: 'Başkalarının mutlu ve iyi olmasına aktif olarak katkıda bulunurum.',
    type: 'likert',
    options: wellBeingLikertOptions,
  },
  {
    id: 'wb_5',
    section: 3,
    sectionTitle: 'Bölüm 3: Psikolojik İyi Oluş',
    questionNumber: 11,
    title: 'Madde 5',
    question: 'Benim için önemli olan etkinliklerde yetenekli ve yeterliyim.',
    type: 'likert',
    options: wellBeingLikertOptions,
  },
  {
    id: 'wb_6',
    section: 3,
    sectionTitle: 'Bölüm 3: Psikolojik İyi Oluş',
    questionNumber: 12,
    title: 'Madde 6',
    question: 'Ben iyi bir insanım ve iyi bir hayat yaşıyorum.',
    type: 'likert',
    options: wellBeingLikertOptions,
  },
  {
    id: 'wb_7',
    section: 3,
    sectionTitle: 'Bölüm 3: Psikolojik İyi Oluş',
    questionNumber: 13,
    title: 'Madde 7',
    question: 'Geleceğim hakkında iyimserim.',
    type: 'likert',
    options: wellBeingLikertOptions,
  },
  {
    id: 'wb_8',
    section: 3,
    sectionTitle: 'Bölüm 3: Psikolojik İyi Oluş',
    questionNumber: 14,
    title: 'Madde 8',
    question: 'İnsanlar bana saygı duyar.',
    type: 'likert',
    options: wellBeingLikertOptions,
  },

  // ====================================================
  // BÖLÜM 4: KİŞİSEL NOSTALJİ ÖLÇEĞİ (20 MADDE - 5'Lİ)
  // ====================================================
  {
    id: 'nos_1',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 15,
    title: 'Madde 1',
    question: 'Sık sık çocukluğumdaki olayları hatırlarım.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_2',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 16,
    title: 'Madde 2',
    question: '"Eski güzel günleri" özlerim.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_3',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 17,
    title: 'Madde 3',
    question: 'Geçmişten gelen insanlar ve yerler benim için önemlidir.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_4',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 18,
    title: 'Madde 4',
    question: 'Eski televizyon ve radyo programlarından yenilerine göre daha fazla zevk alırım.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_5',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 19,
    title: 'Madde 5',
    question: 'Çocukken yediğim yiyecekleri yemekten hoşlanırım.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_6',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 20,
    title: 'Madde 6',
    question: 'Eski okul arkadaşlarımı çok sık düşünmem.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: true, // Ters Madde
  },
  {
    id: 'nos_7',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 21,
    title: 'Madde 7',
    question: 'Eskiden filmlerin daha iyi olduğunu düşünürüm.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_8',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 22,
    title: 'Madde 8',
    question: 'Ailem ya da arkadaşlarımla eski günlerden söz etmekten hoşlanırım.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_9',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 23,
    title: 'Madde 9',
    question: 'Eskiden dinlediğimden farklı müzikleri dinlemeyi tercih ederim.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: true, // Ters Madde
  },
  {
    id: 'nos_10',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 24,
    title: 'Madde 10',
    question: 'Kendimi doğduğum değil, şu anda yaşamakta olduğum yere ait hissederim.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: true, // Ters Madde
  },
  {
    id: 'nos_11',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 25,
    title: 'Madde 11',
    question: 'Tatil günlerimi ailem veya eski arkadaşlarım yerine yeni arkadaşlarımla geçirmeyi tercih ederim.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: true, // Ters Madde
  },
  {
    id: 'nos_12',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 26,
    title: 'Madde 12',
    question: 'Çektiğim fotoğraflara bakmaktan hoşlanırım.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_13',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 27,
    title: 'Madde 13',
    question: 'Geçmişte yapmış olduğum şeyler hakkında hayal kurmaktan hoşlanırım.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_14',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 28,
    title: 'Madde 14',
    question: 'Karşılaştığım olaylarla başa çıkmak için geçmişten faydalanmam.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: true, // Ters Madde
  },
  {
    id: 'nos_15',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 29,
    title: 'Madde 15',
    question: 'Geçmişimdeki mutlu anlarımı üzgün anlarımdan daha fazla hatırlama eğilimindeyim.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_16',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 30,
    title: 'Madde 16',
    question: 'Geçmişte sahip olduğum duyguları yeniden hissetmeyi arzularım.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_17',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 31,
    title: 'Madde 17',
    question: 'Ziyaret ettiğim ya da yaşadığım yerleri hatırlamaktan zevk alırım.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_18',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 32,
    title: 'Madde 18',
    question: 'Bazen geçmişe dönebilmeyi istediğim olur.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_19',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 33,
    title: 'Madde 19',
    question: 'Anılarımı anlatmaktan hoşlanırım.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
  {
    id: 'nos_20',
    section: 4,
    sectionTitle: 'Bölüm 4: Kişisel Nostalji',
    questionNumber: 34,
    title: 'Madde 20',
    question: 'Üzgün hissettiğimde kendimi neşelendirmek için sık sık geçmişi düşünürüm.',
    type: 'likert',
    options: nostalgiaLikertOptions,
    isReversed: false,
  },
];
