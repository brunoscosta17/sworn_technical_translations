import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessagesService {

  getErrorMessage(errorType: string, errorValue?: any): string {
    switch (errorType) {
      case 'required':
        return 'Este campo é obrigatório.';
      case 'min':
        return `O valor mínimo é de ${errorValue.min}.`;
      case 'max':
        return `O valor máximo é de ${errorValue.max}.`;
      case 'minlength':
        return `O comprimento mínimo é de ${errorValue.requiredLength} caracteres.`;
      case 'maxlength':
        return `O comprimento máximo é de ${errorValue.requiredLength} caracteres.`;
      case 'requiredTrue':
        return 'Este campo deve ser verdadeiro.';
      case 'email':
        return 'Endereço de e-mail inválido.';
      case 'pattern':
        return `O padrão requerido não foi atendido.`;
      case 'nullValidator':
        return 'Este campo não pode ser nulo.';
      // Add here your custom error messages
      default:
        return 'Campo inválido.';
    }
}


}
