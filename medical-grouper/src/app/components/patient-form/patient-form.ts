import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { genders, ageUnits, departments, admissionTypes, admissionReasons, dischargeTypes } from '../../core/models/medical-data';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient-form.html',
})
export class PatientForm implements OnInit {
  patientForm!: FormGroup;

  readonly genders = genders;
  readonly ageUnits = ageUnits;
  readonly departments = departments;
  readonly admissionTypes = admissionTypes;
  readonly admissionReasons = admissionReasons;
  readonly dischargeTypes = dischargeTypes;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      gender: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(0)]],
      ageUnit: ['years', Validators.required],
      weight: [null, [Validators.required, Validators.min(0)]], // 누락되었던 필드 추가
      lengthOfStay: [null, [Validators.required, Validators.min(1)]],
      ventilationHours: [0, [Validators.min(0)]], // 기본값 0 설정
      department: ['', Validators.required],
      admissionType: ['', Validators.required],
      admissionReason: ['', Validators.required],
      dischargeType: ['', Validators.required]
    });
  }
}