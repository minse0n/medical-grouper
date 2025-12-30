import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { genders, ageUnits, departments, admissionTypes, admissionReasons, dischargeTypes } from '../../core/models/medical-data';
import { FormValidator } from '../../core/vaildators/form-validator';

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

  constructor(private fb: FormBuilder, private formValidator: FormValidator) {}

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      gender: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(0)]],
      ageUnit: ['years', Validators.required],
      weight: [null, [Validators.required, Validators.min(0)]],
      lengthOfStay: [null, [Validators.required, Validators.min(0)]],
      ventilationHours: [0, [Validators.min(0)]],
      department: ['', Validators.required],
      admissionType: ['', Validators.required],
      admissionReason: ['', Validators.required],
      dischargeType: ['', Validators.required]
    });

    this.patientForm.statusChanges.subscribe(status => {
      const isValid = (status === 'VALID');
      this.formValidator.updatePatientStatus(isValid);
    });
  }
}