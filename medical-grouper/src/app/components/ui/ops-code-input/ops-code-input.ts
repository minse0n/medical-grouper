import { Component, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, map, startWith } from 'rxjs';
import { MedicalCode, OPS_DATA } from '../../../core/models/medical-data';

@Component({
  selector: 'app-ops-code-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ops-code-input.html',
})
export class OpsCodeInput implements OnInit {
  @Input({ required: true }) group!: FormGroup;

  options: MedicalCode[] = OPS_DATA;
  filteredOptions!: Observable<MedicalCode[]>;
  isDropdownOpen = false;

  constructor(private eRef: ElementRef) {}

  get codeControl(): FormControl {
    return this.group.get('code') as FormControl;
  }

  ngOnInit() {
    this.filteredOptions = this.codeControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.code;
        const filterValue = (name || '').toLowerCase();
        return this.options.filter(opt => 
          opt.code.toLowerCase().includes(filterValue) || 
          opt.description.toLowerCase().includes(filterValue)
        );
        
      })
    );
  }

  selectOption(option: MedicalCode) {
  this.codeControl.setValue(option.code+' : '+option.description);
  this.isDropdownOpen = false;
}
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }
}