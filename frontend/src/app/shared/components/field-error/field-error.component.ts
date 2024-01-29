import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss']
})
export class FieldErrorComponent {

  @Input() errors: Array<string> = [];

}
