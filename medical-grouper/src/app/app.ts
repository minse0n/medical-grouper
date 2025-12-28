import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GrouperContainer } from './features/grouper/grouper-container/grouper-container';
import { CodeInput } from './components/code-input/code-input';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GrouperContainer, CodeInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('medical-grouper');
}
