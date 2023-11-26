import { Component } from '@angular/core';
import { AffineService } from 'src/app/services/affine.service';

@Component({
  selector: 'app-cryptage-affine',
  templateUrl: './cryptage-affine.component.html',
  styleUrls: ['./cryptage-affine.component.scss']
})
export class CryptageAffineComponent {
  original: string = '';
  response: string = '';
  key_a!: number;
  key_b!: number;

  copySuccessMessage = '';

  constructor(private cryptageService: AffineService) {}

  process() {
    if (this.original.trim() !== '') {
      this.response = this.cryptageService.encrypt(this.original, this.key_a, this.key_b);
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
