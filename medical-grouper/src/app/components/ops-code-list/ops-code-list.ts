import { Component, Input, OnInit, inject, ElementRef, HostListener, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormBuilder, FormGroup, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'; // ValidatorFn 등 추가
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, map, startWith } from 'rxjs';
import { MedicalCode, OPS_DATA } from '../../core/models/medical-data';
import { FormValidator } from '../../core/vaildators/form-validator';

interface OpsRow {
  group: FormGroup;
  filteredOptions: Observable<MedicalCode[]>;
}

export function atLeastOneOpsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formArray = control as FormArray;
    const hasAtLeastOne = formArray.controls.some(group => !!group.get('code')?.value);
    return hasAtLeastOne ? null : { required: true };
  };
}

@Component({
  selector: 'app-ops-code-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ops-code-list.html',
})
export class OpsCodeList implements OnInit {
  @Input() title = 'Prozeduren (OPS)';

  formArray = new FormArray<any>([], atLeastOneOpsValidator());
  
  rows: OpsRow[] = [];
  activeDropdownIndex: number | null = null;

  private fb = inject(FormBuilder);
  private formValidator = inject(FormValidator);
  private destroyRef = inject(DestroyRef);
  private eRef = inject(ElementRef);

  showError = false;
  
  ngOnInit() {
    this.addItem();

    this.formValidator.triggerValidation$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.showError = true;
        this.formArray.markAllAsTouched();

      });
  }

  addItem() {
      const group = this.fb.group({
        code: ['', (control: AbstractControl) => {
          const val = control.value;
          if (!val) return null;

          const exists = OPS_DATA.some(o => `${o.code} : ${o.description}` === val);
          return exists ? null : { invalidSelection: true };
        }], 
        date: [new Date().toISOString().split('T')[0]] 
      });

      this.formArray.push(group);
    
    this.rows.push({
      group,
      filteredOptions: group.get('code')!.valueChanges.pipe(
        startWith(''),
        map(val => this._filter(val || ''))
      )
    });
  }

  removeItem(index: number) {
    if (this.rows.length > 1) {
      this.formArray.removeAt(index);
      this.rows.splice(index, 1);
      this.activeDropdownIndex = null;
    }
  }

  openDropdown(index: number) { this.activeDropdownIndex = index; }

  selectOption(row: OpsRow, option: MedicalCode) {
    row.group.patchValue({ code: `${option.code} : ${option.description}` });
    this.activeDropdownIndex = null;
  }

  private _filter(val: string): MedicalCode[] {
    const filterValue = val.toLowerCase();
    return OPS_DATA.filter(o => o.code.toLowerCase().includes(filterValue) || o.description.toLowerCase().includes(filterValue));
  }

  reset() {
    this.formArray.clear();
    this.rows = [];
    this.activeDropdownIndex = null;
    this.showError = false;

    this.addItem();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) this.activeDropdownIndex = null;
  }
}