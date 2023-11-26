import { Component } from '@angular/core';
import { AffineService } from 'src/app/services/affine.service';

@Component({
  selector: 'app-decryptage-affine',
  templateUrl: './decryptage-affine.component.html',
  styleUrls: ['./decryptage-affine.component.scss']
})
export class DecryptageAffineComponent {
  crypte_key: string = '';
  response: string = '';
  key_a!: number;
  key_b!: number;

  copySuccessMessage = '';

  constructor(private cryptageService: AffineService) {}

  process() {
    this.response = this.cryptageService.decrypt(this.crypte_key, this.key_a, this.key_b);
  }

  copyToClipboard() {
    const textarea = document.getElementById('response') as HTMLTextAreaElement;

    if (textarea) {
      textarea.select();
      document.execCommand('copy');
      this.copySuccessMessage = 'Texte copié dans le presse-papiers !';
      setTimeout(() => {
        this.copySuccessMessage = '';
      }, 3000);
    }
  }
}
