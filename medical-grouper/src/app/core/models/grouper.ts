export interface PatientData {
  gender: 'male' | 'female' | 'divers'; // Geschlecht (Dropdown)
  age: number;                          // Alter (in Jahren, schritt in integer)
  weight: number;                       // Aufnahmegewicht (gramm)
  ventilationHours: number;             // Beatmungszeit
  lengthOfStay: number;                 // Verweildauer (Tage)
  department: string;                   // Abteilungstyp (Dropdown)
  admissionType: string;                // Aufnahmeart (Dropdown)
  admissionReason: string;              // Aufnahmeanlass (Dropdown)
  dischargeType: string;                // Entlassungsart (Dropdown)
}

export interface MedicalCode {
  code: string;       
  description: string;
}

export interface DiagnosisEntry {
  code: string;
}

export interface ProcedureEntry {
  code: string;
  date: string; // dd.MM.yyyy
}

export interface GrouperCaseData {
  patient: PatientData;
  diagnoses: DiagnosisEntry[];   // mind. 2
  procedures: ProcedureEntry[];  // mind. 2
  baseRate: number;             // Basisfallwert
  careRate: number;             // Pflegeentgeltwert
  groupDrg: string;           // Gruppierungs-DRG
}

export interface GrouperResult {
  drgCode: string;        // 960Z
  drgDescription: string; // Nicht gruppierbar...
  revenue: number;        // (Euro)
  // ... weitere Felder nach Bedarf
}