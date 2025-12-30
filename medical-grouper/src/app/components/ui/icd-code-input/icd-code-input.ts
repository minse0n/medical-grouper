import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, map, startWith } from 'rxjs';
import { MedicalCode, ICD_DATA } from '../../../core/models/medical-data';

@Component({
  selector: 'app-icd-code-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './icd-code-input.html',
})
export class IcdCodeInput implements OnInit {
  @Input({ required: true }) codeCtrl!: FormControl;

  options: MedicalCode[] = ICD_DATA;
  filteredOptions!: Observable<MedicalCode[]>;
  
  isDropdownOpen = false;

  constructor(private eRef: ElementRef) {}

  ngOnInit() {
    this.filteredOptions = this.codeCtrl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
        return this.options.filter(option => 
          option.code.toLowerCase().includes(filterValue) || 
          option.description.toLowerCase().includes(filterValue)
        );
      })
    );
  }
  selectOption(option: MedicalCode) {
  const displayString = `${option.code} : ${option.description}`;
  this.codeCtrl.setValue(displayString); 
  this.isDropdownOpen = false;
}

  get displayValue(): string {
    const val = this.codeCtrl.value;
    return val && val.code ? `${val.code} : ${val.description}` : val || '';
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }
}