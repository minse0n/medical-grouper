import { Component } from '@angular/core';
import { CodeInput } from '../ui/code-input/code-input';
import { Input } from '@angular/core';
import { MedicalCode } from '../../core/models/medical-data';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-code-list',
  imports: [
    CommonModule, 
    ReactiveFormsModule, // formArray 쓰려면 필수!
    CodeInput            // <app-code-input> 쓰려면 필수!
  ],
  templateUrl: './code-list.html',
  styleUrl: './code-list.css',
})
export class CodeList {
  // [핵심] 부모가 "이거 써!" 하고 주는 데이터 리스트
  @Input({ required: true }) codeData: MedicalCode[] = []; 

  // 제목도 부모가 정해줌 ("진단명" or "수술명")
  @Input() title: string = '';

  formArray = new FormArray([new FormControl('')]);
}
