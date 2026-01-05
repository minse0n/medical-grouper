import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { genders, ageUnits, departments, admissionTypes, admissionReasons, dischargeTypes } from '../../core/models/medical-data';
import { FormValidator } from '../../core/vaildators/form-validator';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient-form.html',
})
export class PatientForm implements OnInit {

  readonly genders = genders;
  readonly ageUnits = ageUnits;
  readonly departments = departments;
  readonly admissionTypes = admissionTypes;
  readonly admissionReasons = admissionReasons;
  readonly dischargeTypes = dischargeTypes;

  private fb = inject(FormBuilder);
  private validator = inject(FormValidator);
  private destroyRef = inject(DestroyRef);

  showError = false;

  patientForm = this.fb.group({
    gender: ['', Validators.required],
    age: [null, [Validators.required, Validators.min(0)]],
    ageUnit: ['years', Validators.required],
    weight: [null, [Validators.required, Validators.min(0)]],
    lengthOfStay: [null, [Validators.required, Validators.min(0)]],
    ventilationHours: [null, [Validators.min(0), Validators.pattern("^[0-9]*$")]], 
    department: ['', Validators.required],
    admissionType: ['', Validators.required],
    admissionReason: ['', Validators.required],
    dischargeType: ['', Validators.required]
  });

  ngOnInit(): void {
    this.validator.triggerValidation$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.showError = true;
        this.patientForm.markAllAsTouched();
        
      });
  }
  
  isInvalid(fieldName: string): boolean {
    const control = this.patientForm.get(fieldName);
    return !!(control && control.invalid && this.showError);
  }

  reset() {
    this.patientForm.reset({
      gender: '',
      age: null,
      ageUnit: 'years',
      weight: null,
      lengthOfStay: null,
      ventilationHours: null,
      department: '',
      admissionType: '',
      admissionReason: '',
      dischargeType: ''
    });
    this.showError = false;
  }
}