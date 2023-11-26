import { Component } from '@angular/core';
import { PolybeService } from 'src/app/services/polybe.service';

@Component({
  selector: 'app-cryptage-polybe',
  templateUrl: './cryptage-polybe.component.html',
  styleUrls: ['./cryptage-polybe.component.scss'],
})
export class CryptagePolybeComponent {
  original: string = '';
  response: string = '';
  key!: string

  copySuccessMessage = '';

  constructor(private cryptageService: PolybeService) {}

  process() {
    if (this.original.trim() !== '') {
      this.response = this.cryptageService.encrypt(this.original, this.key);
    }
  }

  copyToClipboard() {
    if (this.response.trim() !== '') {
      const textarea = document.getElementById(
        'response'
      ) as HTMLTextAreaElement;

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
