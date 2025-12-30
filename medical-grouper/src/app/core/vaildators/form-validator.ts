import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormValidator {
  // 1. 각 섹션의 '통과 여부'를 저장하는 변수들입니다. (초기값은 false/실패)
  private patientValid$ = new BehaviorSubject<boolean>(false); // 환자 정보
  private icdValid$ = new BehaviorSubject<boolean>(false);     // 진단명(ICD)
  private opsValid$ = new BehaviorSubject<boolean>(false);     // 수술명(OPS)

  // 2. 위 3개가 모두 'true'일 때만 'true'를 내보내는 최종 신호입니다.
  readonly isGlobalValid$ = combineLatest([
    this.patientValid$, 
    this.icdValid$, 
    this.opsValid$
  ]).pipe(
    // 셋 다 참(true)이어야만 최종 결과도 참(true)
    map(([p, i, o]) => p && i && o) 
  );

  // 3. 환자 폼에서 호출할 함수: "환자 정보 다 채웠나요?"
  updatePatientStatus(isValid: boolean) {
    this.patientValid$.next(isValid);
  }

  // 4. ICD 리스트에서 호출할 함수: "유효하고, 2개 이상인가요?"
  updateIcdStatus(isValid: boolean, count: number) {
    this.icdValid$.next(isValid && count >= 2); 
  }

  // 5. OPS 리스트에서 호출할 함수: "유효하고, 1개 이상인가요?"
  updateOpsStatus(isValid: boolean, count: number) {
    this.opsValid$.next(isValid && count >= 1);
  }
}