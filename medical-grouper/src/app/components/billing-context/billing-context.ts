import { Component, EventEmitter, Output, Input, inject, OnInit } from '@angular/core'; // Input 추가
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormValidator } from '../../core/vaildators/form-validator';
@Component({
  selector: 'app-billing-context',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './billing-context.html',
})
export class BillingContext implements OnInit {
  private formValidator = inject(FormValidator);
  private fb = inject(FormBuilder);

  isGlobalValid$ = this.formValidator.isGlobalValid$;
  
  @Input() isValidOverride: boolean = false; 

  billingForm!: FormGroup;

  @Output() group = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  ngOnInit() {
    this.billingForm = this.fb.group({
      baseRate: [0, [Validators.required, Validators.min(0)]],
      careRate: [0, [Validators.required, Validators.min(0)]],
      drgVersion: ['2025', Validators.required]
    });
  }

  isFormValid(): boolean {
    return this.billingForm.valid && this.isValidOverride;
  }

  resetForm() {
    this.billingForm.reset({
      baseRate: 0,
      careRate: 0,
      drgVersion: '2025'
    });
    this.reset.emit();
  }

  onGroup() {
    if (this.isFormValid()) {
      this.group.emit();
    }
  }
}