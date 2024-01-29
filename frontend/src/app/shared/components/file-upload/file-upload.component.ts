import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import Tesseract from 'tesseract.js';
import * as Tesseract from 'tesseract.js';

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
  wordCount = 0;
  ocrText = '';
  ocrInProgress = false;

  async onFileSelected(event: Event, fileInput: HTMLInputElement) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
  
    const file = input.files[0];
    if (!file.type.startsWith('image/')) {
      alert('Please, select an image file.');
      fileInput.value = '';
      return;
    }
    this.isImageFile = true;
    this.ocrText = '';
    this.wordCount = 0;
    const reader = new FileReader();
    reader.onload = async () => {
      this.fileData = reader.result;
      await this.performOCR(reader.result as string);
    };
    reader.readAsDataURL(file);
  }
  

  async performOCR(imageData: string) {
    this.ocrInProgress = true;

    try {
      const result = await (Tesseract as any).default.recognize(
        imageData,
        'eng',
        {
          logger: (m: any) => m
        }
      );
      this.ocrText = result.data.text;
      this.countWords(this.ocrText);
    } catch (error) {
      console.error('OCR Error:', error);
      this.ocrText = 'Falha na leitura OCR.';
    }

    this.ocrInProgress = false;
  }

  private countWords(text: string) {
    const words = text.match(/\b(\w+)\b/g);
    this.wordCount = words ? words.length : 0;
  }

}
