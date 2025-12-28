import { Component } from '@angular/core';
import { CodeList } from '../../../components/code-list/code-list';
import { PatientForm } from '../../../components/patient-form/patient-form';
import { ResultView } from '../../../components/result-view/result-view';
import { ICD_DATA, OPS_DATA } from '../../../core/models/medical-data';

@Component({
  selector: 'app-grouper-container',
  imports: [CodeList, PatientForm, ResultView],
  templateUrl: './grouper-container.html',
  styleUrl: './grouper-container.css',
})
export class GrouperContainer {
  icdList = ICD_DATA;
  opsList = OPS_DATA;
}
