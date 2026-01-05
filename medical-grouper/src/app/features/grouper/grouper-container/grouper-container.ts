import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IcdCodeList } from '../../../components/icd-code-list/icd-code-list'; 
import { OpsCodeList } from '../../../components/ops-code-list/ops-code-list';

import { PatientForm } from '../../../components/patient-form/patient-form'; 
import { BillingContext } from "../../../components/billing-context/billing-context";
import { ResultView } from '../../../components/result-view/result-view';

@Component({
  selector: 'app-grouper-container',
  standalone: true,
  imports: [IcdCodeList, OpsCodeList, PatientForm, ResultView, CommonModule, BillingContext],
  templateUrl: './grouper-container.html',
})
export class GrouperContainer {
  @ViewChild(PatientForm) patientSection!: PatientForm;
  
  @ViewChild('icdList') icdSection!: IcdCodeList;
  @ViewChild('opsList') opsSection!: OpsCodeList;

  @ViewChild(BillingContext) billingSection!: BillingContext;
  
  @ViewChild('resultRef', { read: ElementRef }) resultRef?: ElementRef;

  showResult = false;
  resultData: any = null;

  get isAllValid(): boolean {
    if (!this.patientSection?.patientForm || !this.icdSection?.formArray || !this.opsSection?.formArray) {
      return false;
    }

    const patientValid = this.patientSection.patientForm.valid;
    const icdValid = this.icdSection.formArray.valid && this.icdSection.formArray.length >= 1; 
    const opsValid = this.opsSection.formArray.valid; 

    return patientValid && icdValid && opsValid; 
  }

  handleGroup() {
    if (this.isAllValid) {
      this.resultData = {
        patient: this.patientSection.patientForm.getRawValue(),
        icd: this.icdSection.formArray.controls
              .map(c => c.value)
              .filter(v => !!v), 
        ops: this.opsSection.formArray.controls
              .map(g => g.getRawValue())
              .filter(v => !!v.code),
        billing: this.billingSection.billingForm.getRawValue()
      };

      this.showResult = true;
    } else {
      this.showResult = false;
    }
  }

  private scrollToResult() {
    if (this.resultRef?.nativeElement) {
      this.resultRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  handleReset() {
    this.showResult = false;
    this.resultData = null;
    
    this.patientSection.reset();
    this.icdSection.reset();
    this.opsSection.reset();
  }
}