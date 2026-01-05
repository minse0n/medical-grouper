import { Component, Input, OnInit, inject, ElementRef, HostListener, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormControl, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'; // ValidatorFn, AbstractControl, ValidationErrors 추가
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, map, startWith } from 'rxjs';
import { MedicalCode, ICD_DATA } from '../../core/models/medical-data';
import { FormValidator } from '../../core/vaildators/form-validator';

export function atLeastOneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formArray = control as FormArray;
    const hasAtLeastOne = formArray.controls.some(ctrl => !!ctrl.value);
    return hasAtLeastOne ? null : { required: true };
  };
}

@Component({
  selector: 'app-icd-code-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './icd-code-list.html',
})
export class IcdCodeList implements OnInit {
  @Input() title = 'Diagnosen (ICD-10-GM)';

  formArray = new FormArray<FormControl>([], atLeastOneValidator());
  
  rows: { control: FormControl; filteredOptions: Observable<MedicalCode[]> }[] = [];
  activeDropdownIndex: number | null = null;

  private validator = inject(FormValidator);
  private destroyRef = inject(DestroyRef);
  private eRef = inject(ElementRef);

  showError = false;
 
  ngOnInit() {
    this.addItem();
    this.addItem();

    this.validator.triggerValidation$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.showError = true;
        this.formArray.markAllAsTouched();
      });
  }

  addItem() {
    const control = new FormControl('', (control) => {
      const val = control.value;
      if (!val) return null;
  
      const exists = ICD_DATA.some(d => `${d.code} : ${d.description}` === val);
      return exists ? null : { invalidSelection: true };
    });

    this.formArray.push(control);
    
    this.rows.push({
      control,
      filteredOptions: control.valueChanges.pipe(
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

  selectOption(row: any, option: MedicalCode) {
    row.control.setValue(`${option.code} : ${option.description}`);
    this.activeDropdownIndex = null;
  }

  openDropdown(index: number) { this.activeDropdownIndex = index; }

  private _filter(val: string): MedicalCode[] {
    const filterValue = val.toLowerCase();
    return ICD_DATA.filter(opt => opt.code.toLowerCase().includes(filterValue) || opt.description.toLowerCase().includes(filterValue));
  }

  reset() {
    this.formArray.clear();

    this.rows = []
    this.activeDropdownIndex = null;
    this.showError = false;

    this.addItem();
    this.addItem();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) this.activeDropdownIndex = null;
  }
}