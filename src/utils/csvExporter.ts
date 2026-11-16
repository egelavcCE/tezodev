import type { ScoreSummary } from '../types/experience';
import { UI_TEXT } from '../constants/uiText';

/**
 * Puan özetinden Türkçe Excel ve SPSS uyumlu (BOM + ';') CSV içeriği üretir
 */
export function buildCSVContent(summary: ScoreSummary): string {
  const headers = [...UI_TEXT.CSV.HEADERS];

  const values = [
    summary.participantId,
    `"${summary.completedAt}"`,
    summary.demographics.age,
    `"${summary.demographics.gender}"`,
    `"${summary.demographics.education}"`,
    `"${summary.demographics.grade}"`,
    `"${summary.demographics.socioEconomic}"`,
    summary.momentaryEmotionScore,
    // İyi Oluş Maddeleri (1-8)
    summary.wellBeingScores['wb_1'] ?? 0,
    summary.wellBeingScores['wb_2'] ?? 0,
    summary.wellBeingScores['wb_3'] ?? 0,
    summary.wellBeingScores['wb_4'] ?? 0,
    summary.wellBeingScores['wb_5'] ?? 0,
    summary.wellBeingScores['wb_6'] ?? 0,
    summary.wellBeingScores['wb_7'] ?? 0,
    summary.wellBeingScores['wb_8'] ?? 0,
    summary.wellBeingTotalScore,
    // Nostalji Ham Maddeleri (1-20)
    summary.nostalgiaRawScores['nos_1'] ?? 0,
    summary.nostalgiaRawScores['nos_2'] ?? 0,
    summary.nostalgiaRawScores['nos_3'] ?? 0,
    summary.nostalgiaRawScores['nos_4'] ?? 0,
    summary.nostalgiaRawScores['nos_5'] ?? 0,
    summary.nostalgiaRawScores['nos_6'] ?? 0,
    summary.nostalgiaRawScores['nos_7'] ?? 0,
    summary.nostalgiaRawScores['nos_8'] ?? 0,
    summary.nostalgiaRawScores['nos_9'] ?? 0,
    summary.nostalgiaRawScores['nos_10'] ?? 0,
    summary.nostalgiaRawScores['nos_11'] ?? 0,
    summary.nostalgiaRawScores['nos_12'] ?? 0,
    summary.nostalgiaRawScores['nos_13'] ?? 0,
    summary.nostalgiaRawScores['nos_14'] ?? 0,
    summary.nostalgiaRawScores['nos_15'] ?? 0,
    summary.nostalgiaRawScores['nos_16'] ?? 0,
    summary.nostalgiaRawScores['nos_17'] ?? 0,
    summary.nostalgiaRawScores['nos_18'] ?? 0,
    summary.nostalgiaRawScores['nos_19'] ?? 0,
    summary.nostalgiaRawScores['nos_20'] ?? 0,
    // Nostalji Ters Kodlanmış Maddeler (6, 9, 10, 11, 14)
    summary.nostalgiaRecodedScores['nos_6'] ?? 0,
    summary.nostalgiaRecodedScores['nos_9'] ?? 0,
    summary.nostalgiaRecodedScores['nos_10'] ?? 0,
    summary.nostalgiaRecodedScores['nos_11'] ?? 0,
    summary.nostalgiaRecodedScores['nos_14'] ?? 0,
    // Nostalji Toplam Puanı
    summary.nostalgiaTotalScore,
  ];

  return '\uFEFF' + headers.join(';') + '\r\n' + values.join(';') + '\r\n';
}

/**
 * CSV dosyasını istemci tarafında tetikleyerek indirir
 */
export function downloadCSVFile(summary: ScoreSummary, customFilename?: string): void {
  const content = buildCSVContent(summary);
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const filename = customFilename || `${UI_TEXT.CSV.FILE_NAME_PREFIX}_${timestamp}.csv`;

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
