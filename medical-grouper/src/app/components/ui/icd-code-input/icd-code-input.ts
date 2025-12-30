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
  
  // 드롭다운 표시 여부 상태
  isDropdownOpen = false;

  constructor(private eRef: ElementRef) {}

  ngOnInit() {
    // 입력값 변경에 따른 필터링 로직
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

  // 옵션 선택 시 실행
  selectOption(option: MedicalCode) {
    this.codeCtrl.setValue(option); // 객체 전체를 저장하거나 필요에 따라 코드만 저장
    this.isDropdownOpen = false;
  }

  // 선택된 객체를 화면에 어떻게 보여줄지 정의
  get displayValue(): string {
    const val = this.codeCtrl.value;
    return val && val.code ? `${val.code} : ${val.description}` : val || '';
  }

  // 컴포넌트 외부 클릭 시 드롭다운 닫기
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }
}