import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ICD_DATA, MedicalCode } from '../../core/models/medical-data';

@Component({
  selector: 'app-code-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './code-input.html',
})
export class CodeInput implements OnInit {
  
  myControl = new FormControl<string | MedicalCode>('');

  options: MedicalCode[] = ICD_DATA;
  
  filteredOptions!: Observable<MedicalCode[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        if (typeof value === 'string') {
          return value ? this._filter(value) : this.options.slice();
        } 
        
        else {
          return this.options.slice(); 
        }
      }),
    );
  }

  displayFn(code: MedicalCode): string {
    return code && code.code ? `${code.code} : ${code.description}` : '';
  }

  private _filter(value: string): MedicalCode[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => 
      option.code.toLowerCase().includes(filterValue) || 
      option.description.toLowerCase().includes(filterValue)
    );
  }
}