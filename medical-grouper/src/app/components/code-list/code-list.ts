import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IcdCodeInput } from '../ui/icd-code-input/icd-code-input';
import { OpsCodeInput } from '../ui/ops-code-input/ops-code-input';

@Component({
  selector: 'app-code-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IcdCodeInput,
    OpsCodeInput
  ],
  templateUrl: './code-list.html',
})
export class CodeList implements OnInit {
  @Input() title: string = '';
  @Input() listType: 'ICD' | 'OPS' = 'ICD';

  formArray: FormArray = new FormArray<any>([]);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // 초기화: ICD는 최소 2개, OPS는 최소 1개 필수
    const initialCount = this.listType === 'ICD' ? 2 : 1;
    for (let i = 0; i < initialCount; i++) {
      this.addItem();
    }
  }

  addItem() {
    if (this.listType === 'ICD') {
      this.formArray.push(new FormControl('', Validators.required));
    } else {
      this.formArray.push(this.fb.group({
        code: ['', Validators.required],
        date: [new Date().toISOString().split('T')[0], Validators.required] // input type="date" 호환용 포맷
      }));
    }
  }

  removeItem(index: number) {
    const minCount = this.listType === 'ICD' ? 1 : 1;
    if (this.formArray.length > minCount) {
      this.formArray.removeAt(index);
    }
  }

  get controls() { return this.formArray.controls; }
  asFormGroup(ctrl: any): FormGroup { return ctrl as FormGroup; }
  asFormControl(ctrl: any): FormControl { return ctrl as FormControl; }
}