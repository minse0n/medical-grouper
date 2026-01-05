export interface PatientData {
  gender: 'male' | 'female' | 'divers';
  age: number;
  weight: number;
  lengthOfStay: number;
  ventilationHours: number;
  department: string;
  admissionReason: string;
  dischargeType: string;
}

export interface MedicalCode {
  code: string;
  date?: Date; 
}

export interface GrouperCase {
  patient: PatientData;
  icdCodes: MedicalCode[];
  opsCodes: MedicalCode[];
  context: {
    baseValue: number;
    careValue: number;
  };
}