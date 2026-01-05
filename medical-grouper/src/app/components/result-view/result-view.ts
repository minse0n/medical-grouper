import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-view.html',
  styleUrl: './result-view.css',
})
export class ResultView {
  @Input() data: any; 
}