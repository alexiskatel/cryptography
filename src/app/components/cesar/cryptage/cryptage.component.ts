import { Component } from '@angular/core';
import { CryptageService } from '../../../services/cryptage.service';

@Component({
  selector: 'app-cryptage',
  templateUrl: './cryptage.component.html',
  styleUrls: ['./cryptage.component.scss']
})
export class CryptageComponent {
  original: string = '';
  response: string = '';

  copySuccessMessage = ''

  constructor(private cryptageService: CryptageService) {}

  process() {
    if(this.original.trim() !== ''){
      this.response = this.cryptageService.crypt(this.original)
    }
  }

  copyToClipboard() {
    if(this.response.trim() !== ''){
      const textarea = document.getElementById('response') as HTMLTextAreaElement;
      
      if (textarea) {
        textarea.select();
        document.execCommand('copy');
        this.copySuccessMessage = 'Clé copiée dans le presse-papiers !';
        setTimeout(() => {
          this.copySuccessMessage = '';
        }, 3000);
      }
    }
  }
}
