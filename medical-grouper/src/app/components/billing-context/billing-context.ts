import { Component, EventEmitter, Output, Input, inject, OnInit } from '@angular/core'; // Input 추가
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing-context',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './billing-context.html',
})
export class BillingContext implements OnInit {
  private fb = inject(FormBuilder);

  // 부모(GrouperContainer)로부터 전달받는 전체 유효성 상태
  @Input() isValidOverride: boolean = false; 

  billingForm!: FormGroup;

  @Output() group = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  ngOnInit() {
    this.billingForm = this.fb.group({
      // 기본값 설정 요구사항 반영
      baseRate: [4464.53, [Validators.required, Validators.min(0)]],
      careRate: [250, [Validators.required, Validators.min(0)]],
      drgVersion: ['2025', Validators.required]
    });
  }

  // 자기 자신의 폼과 부모가 전달한 외부 유효성을 모두 만족해야 함
  isFormValid(): boolean {
    return this.billingForm.valid && this.isValidOverride;
  }

  resetForm() {
    this.billingForm.reset({
      baseRate: 4464.53,
      careRate: 250,
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