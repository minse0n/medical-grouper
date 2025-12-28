
// medical-data.ts (또는 컴포넌트 파일 상단)

export interface MedicalCode {
  code: string;
  description: string;
}

export interface MedicalCodeGroup {
  letter: string;
  codes: MedicalCode[];
}

export const ICD_DATA: MedicalCode[] = [
  { code: 'A09.0', description: 'Gastroenteritis/Kolitis infektiösen Ursprungs' },
  { code: 'B34.9', description: 'Virusinfektion, nicht näher bezeichnet' },
  { code: 'C34.1', description: 'Bösartige Neubildung des Oberlappens (Bronchus/Lunge)' },
  { code: 'C50.9', description: 'Bösartige Neubildung der Brustdrüse' },
  { code: 'D50.9', description: 'Eisenmangelanämie' },
  { code: 'E11.90', description: 'Diabetes mellitus Typ 2, ohne Komplikationen' },
  { code: 'E78.0', description: 'Reine Hypercholesterinämie' },
  { code: 'F10.2', description: 'Alkoholabhängigkeit' },
  { code: 'F32.1', description: 'Mittelgradige depressive Episode' },
  { code: 'G43.9', description: 'Migräne, nicht näher bezeichnet' },
  { code: 'G47.31', description: 'Obstruktives Schlafapnoe-Syndrom' },
  { code: 'H25.9', description: 'Senile Katarakt' },
  { code: 'I10.00', description: 'Benigne essentielle Hypertonie' },
  { code: 'I21.0', description: 'Akuter transmuraler Myokardinfarkt der Vorderwand' },
  { code: 'I25.11', description: 'Atherosklerotische Herzkrankheit (Ein-Gefäß-Erkrankung)' },
  { code: 'I48.0', description: 'Vorhofflimmern, paroxysmal' },
  { code: 'I50.13', description: 'Linksherzinsuffizienz, NYHA III' },
  { code: 'I63.3', description: 'Hirninfarkt durch Thrombose zerebraler Arterien' },
  { code: 'J06.9', description: 'Akute Infektion der oberen Atemwege' },
  { code: 'J18.9', description: 'Pneumonie, nicht näher bezeichnet' },
  { code: 'J44.10', description: 'COPD, FEV1 < 35%' },
  { code: 'J45.9', description: 'Asthma bronchiale' },
  { code: 'K21.0', description: 'Gastroösophageale Refluxkrankheit mit Ösophagitis' },
  { code: 'K29.5', description: 'Chronische Gastritis' },
  { code: 'K35.80', description: 'Akute Appendizitis' },
  { code: 'K40.90', description: 'Hernia inguinalis, einseitig' },
  { code: 'K80.10', description: 'Gallenblasenstein mit Cholezystitis' },
  { code: 'L40.0', description: 'Psoriasis vulgaris' },
  { code: 'M16.1', description: 'Primäre Koxarthrose, einseitig' },
  { code: 'M17.1', description: 'Primäre Gonarthrose, einseitig' },
  { code: 'M54.5', description: 'Kreuzschmerz' },
  { code: 'N18.5', description: 'Chronische Nierenkrankheit, Stadium 5' },
  { code: 'N20.0', description: 'Nierenstein' },
  { code: 'N39.0', description: 'Harnwegsinfektion' },
  { code: 'R10.4', description: 'Sonstige Bauchschmerzen' },
  { code: 'S06.0', description: 'Gehirnerschütterung' },
  { code: 'S72.00', description: 'Schenkelhalsfraktur' },
  { code: 'T81.0', description: 'Blutung und Hämatom als Komplikation' },
  { code: 'Z38.0', description: 'Einling, Geburt im Krankenhaus' },
  { code: 'Z96.64', description: 'Vorhandensein einer Hüftgelenk-Endoprothese' },
];
