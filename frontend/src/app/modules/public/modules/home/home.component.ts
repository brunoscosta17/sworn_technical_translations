import { Component } from '@angular/core';
import { FileUploadComponent } from 'src/app/shared/components/file-upload/file-upload.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FileUploadComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
