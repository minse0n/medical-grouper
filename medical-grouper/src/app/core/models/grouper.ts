// 섹션 1: 환자 기초 데이터
export interface PatientData {
  gender: 'male' | 'female' | 'divers'; // 성별
  age: number; // 연령
  weight: number; // 입원 체중 (g)
  lengthOfStay: number; // 재원 기간 (일)
  ventilationHours: number; // 인공호흡 시간 (옵션, 0 가능)
  department: string; // 진료과
  admissionReason: string; // 입원 사유
  dischargeType: string; // 퇴원 유형
}

export interface MedicalCode {
  code: string; // 예: J10.2 또는 6-001.2
  date?: Date; 
}

// 전체 폼 데이터 구조
export interface GrouperCase {
  patient: PatientData;
  icdCodes: MedicalCode[]; // 최소 2개
  opsCodes: MedicalCode[]; // 최소 1개
  context: {
    // 섹션 4: 추가 정보 (기본값 활용)
    baseValue: number;
    careValue: number;
  };
}