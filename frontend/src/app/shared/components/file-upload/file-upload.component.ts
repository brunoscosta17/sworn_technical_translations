import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  fileData: string | ArrayBuffer | null = null;
  isImageFile = false;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    this.isImageFile = file.type.startsWith('image/');

    const reader = new FileReader();
    reader.onload = () => {
      this.fileData = reader.result;
    };
    if (this.isImageFile) {
      reader.readAsDataURL(file);
    } else {
      reader.readAsText(file);
    }
  }

}
