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

export const OPS_DATA: MedicalCode[] = [
  { code: '1-632', description: 'Diagnostische Ösophagogastroduodenoskopie' },
  { code: '1-650.2', description: 'Diagnostische Koloskopie' },
  { code: '1-710', description: 'Ganzkörperplethysmographie' },
  { code: '3-200', description: 'Native CT des Schädels' },
  { code: '3-222', description: 'CT des Thorax mit Kontrastmittel' },
  { code: '3-802', description: 'Native MRT des Schädels' },
  { code: '3-823', description: 'MRT der Wirbelsäule mit Kontrastmittel' },
  { code: '5-032.00', description: 'Lumbale Laminektomie' },
  { code: '5-144.0', description: 'Kataraktoperation mit Linsenimplantation' },
  { code: '5-469.21', description: 'Laparoskopische Appendektomie' },
  { code: '5-470.11', description: 'Laparoskopische Cholezystektomie' },
  { code: '5-511.11', description: 'Cholezystektomie, einfach' },
  { code: '5-530.31', description: 'Verschluss einer Hernia inguinalis, mit Netz' },
  { code: '5-820.00', description: 'Implantation Hüft-TEP, zementfrei' },
  { code: '5-820.92', description: 'Hüft-TEP Wechsel' },
  { code: '5-822.11', description: 'Implantation Knie-TEP, bikondylär' },
  { code: '5-831.0', description: 'Exzision von Bandscheibengewebe' },
  { code: '5-893.1c', description: 'Chirurgische Wundtoilette, großflächig' },
  { code: '5-916.a0', description: 'Temporäre Weichteildeckung' },
  { code: '8-121', description: 'Darmspülung' },
  { code: '8-144.0', description: 'Therapeutische Drainage der Pleurahöhle' },
  { code: '8-390.0', description: 'Lagerungsbehandlung bei Schwindel' },
  { code: '8-522.c1', description: 'Hochvoltstrahlentherapie' },
  { code: '8-542.11', description: 'Chemotherapie nicht komplex' },
  { code: '8-547.31', description: 'Immuntherapie mit Checkpoint-Inhibitor' },
  { code: '8-550.1', description: 'Geriatrische frührehabilitative Komplexbehandlung' },
  { code: '8-552.8', description: 'Neurologische Komplexbehandlung' },
  { code: '8-559.31', description: 'Fachübergreifende Frührehabilitation' },
  { code: '8-701', description: 'Einfache endotracheale Intubation' },
  { code: '8-706', description: 'Anlegen einer Maske zur maschinellen Beatmung' },
  { code: '8-800.c0', description: 'Transfusion von Erythrozytenkonzentrat' },
  { code: '8-831.0', description: 'Legen eines zentralvenösen Katheters' },
  { code: '8-837.00', description: 'Perkutan-transluminale Gefäßintervention, Koronarien' },
  { code: '8-854.2', description: 'Hämodialyse' },
  { code: '8-918.00', description: 'Multimodale Schmerztherapie' },
  { code: '8-980.10', description: 'Intensivmedizinische Komplexbehandlung, 185-552 Punkte' },
  { code: '8-98b.11', description: 'Andere neurologische Komplexbehandlung' },
  { code: '9-200.6', description: 'Hochaufwendige Pflege von Erwachsenen' },
  { code: '9-401.00', description: 'Psychosomatische Komplexbehandlung' },
  { code: '9-984.8', description: 'Pflegekomplexmaßnahmen-Score' },
  { code: '9-984.8', description: 'ddddddddjioewtjoqwejtrifjwepgfjprifjpiawdjnfiovasdhfvnsdafkjnsdajfvjnasdpfijaiifwejdcdsk-Score' },
];

  export const genders = [
    { value: 'female', viewValue: 'Weiblich' },
    { value: 'male', viewValue: 'Männlich' },
    { value: 'divers', viewValue: 'Divers' },
  ];

  export const ageUnits = [
    { value: 'years', viewValue: 'Jahre' },
    { value: 'days', viewValue: 'Tage' }
  ];

  export const departments = [
  { value: 'hauptabteilung', viewValue: 'Hauptabteilung' },
  { value: 'hauptabteilungMitBeleghebamme', viewValue: 'Hauptabteilung mit Beleghebamme' },
  { value: 'belegoperateur', viewValue: 'Belegoperateur' },
  { value: 'belegoperateurUndBeleganaesthesist', viewValue: 'Belegoperateur und Beleganästhesist' },
  { value: 'belegoperateurUndBeleghebamme', viewValue: 'Belegoperateur und Beleghebamme' },
  { value: 'belegKomplett', viewValue: 'Belegoperateur, Beleganästhesist & Beleghebamme' },
  { value: 'versorgungDurchTeilstationaer', viewValue: 'Versorgung durch teilstationär' },
];

  export const admissionTypes = [
  { value: 'vollstationaer', viewValue: 'Krankenhausbehandlung, vollstationär' },
  { value: 'teilstationaer', viewValue: 'Krankenhausbehandlung, teilstationär' },
  { value: 'hybridDrg', viewValue: 'Behandlung nach § 115f SGB V (Hybrid-DRG)' },
];

  export const admissionReasons = [
  { value: 'einweisung', viewValue: 'Einweisung' },
  { value: 'notfall', viewValue: 'Notfall' },
  { value: 'verlegungLaengerAls24h', viewValue: 'Verlegung mit Behandlungsdauer im verlegenden Krankenhaus länger als 24 Stunden' },
  { value: 'verlegungBisZu24h', viewValue: 'Verlegung mit Behandlungsdauer im verlegenden Krankenhaus bis zu 24 Stunden' },
];

  export const dischargeTypes = [
  { value: 'regulaerBeendet', viewValue: 'Behandlung regulär beendet' },
  { value: 'sonstigeGruende', viewValue: 'Behandlung aus sonstigen Gründen beendet (z.B. Entlassung in Reha, Pflege, Hospiz, gg. ärztlichen Rat, etc.)' },
  { value: 'verlegung', viewValue: 'Verlegung in ein anderes somatisches Akutkrankenhaus' },
  { value: 'tod', viewValue: 'Tod' },
  { value: 'interneVerlegung', viewValue: 'interne Verlegung mit Wechsel zwischen BPflV und KHEntgG' },
];