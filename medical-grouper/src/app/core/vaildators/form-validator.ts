import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FormValidator {
  private patientValid$ = new BehaviorSubject<boolean>(false);
  private icdValid$ = new BehaviorSubject<boolean>(false);
  private opsValid$ = new BehaviorSubject<boolean>(false);
  private _triggerValidation = new Subject<void>();
  triggerValidation$ = this._triggerValidation.asObservable();

  triggerAllValidationMessages() {
    this._triggerValidation.next();
  }

  readonly isGlobalValid$ = combineLatest([
    this.patientValid$,
    this.icdValid$,
    this.opsValid$
  ]).pipe(
    map(([p, i, o]) => p && i && o)
  );

  updatePatientStatus(isValid: boolean) {
    this.patientValid$.next(isValid);
  }

  updateIcdStatus(isValid: boolean, count: number) {
    const isMet = isValid && count >= 1; 
    this.icdValid$.next(isMet);
  }

  updateOpsStatus(isValid: boolean, count: number) {
    const isMet = isValid && count >= 1;
    this.opsValid$.next(isMet);
  }
  
}