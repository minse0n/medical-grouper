import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormValidator } from '../../core/vaildators/form-validator';

@Component({
  selector: 'app-billing-context',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './billing-context.html',
})
export class BillingContext {
  @Input() isValidOverride = false; 
  @Output() group = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private validator = inject(FormValidator);

  showError = false;

  billingForm = this.fb.group({
    baseRate: [null as number | null, [Validators.required, Validators.min(0)]],
    careRate: [null as number | null, [Validators.required, Validators.min(0)]],
    drgVersion: ['2025', Validators.required]
  });

  onGroup() {

    this.validator.triggerAllValidationMessages();

    this.showError = true;
    this.billingForm.markAllAsTouched();

    if (this.billingForm.valid && this.isValidOverride) {
      this.group.emit();
    }
  }

  resetForm() {
    if (confirm('Möchten Sie wirklich einen neuen Fall anlegen? Alle eingegebenen Daten gehen verloren.')) {
      this.billingForm.reset({ baseRate: null, careRate: null, drgVersion: '2025' });
      this.reset.emit();
    }
  }

  isInvalid(field: string) {
    const control = this.billingForm.get(field);
    return !!(control && control.invalid && this.showError);
  }
}