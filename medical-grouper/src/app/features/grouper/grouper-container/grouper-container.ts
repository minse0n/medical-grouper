import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeList } from '../../../components/code-list/code-list';
import { PatientForm } from '../../../components/patient-form/patient-form';
import { BillingContext } from "../../../components/billing-context/billing-context";
import { ResultView } from '../../../components/result-view/result-view';

@Component({
  selector: 'app-grouper-container',
  standalone: true,
  imports: [CodeList, PatientForm, ResultView, CommonModule, BillingContext],
  templateUrl: './grouper-container.html',
})
export class GrouperContainer {
  @ViewChild(PatientForm) patientSection!: PatientForm;
  @ViewChild('icdList') icdSection!: CodeList;
  @ViewChild('opsList') opsSection!: CodeList;

  showResult = false;

  get isAllValid(): boolean {

    if (!this.patientSection?.patientForm || !this.icdSection?.formArray || !this.opsSection?.formArray) {
      return false;
    }

    const patientValid = this.patientSection.patientForm.valid; // 환자 데이터 필수
    const icdValid = this.icdSection.formArray.valid && this.icdSection.formArray.length >= 1; // ICD 최소 1개
    const opsValid = this.opsSection.formArray.valid && this.opsSection.formArray.length >= 1; // OPS 최소 1개

    return patientValid && icdValid && opsValid;
  }

  handleGroup() {
    this.showResult = true; // 결과 표시 (하드코딩 데이터 전환)
  }

  handleReset() {
    this.showResult = false;
    // reset logic
  }
}