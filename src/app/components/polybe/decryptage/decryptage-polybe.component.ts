import { Component } from '@angular/core';
import { PolybeService } from 'src/app/services/polybe.service';

@Component({
  selector: 'app-decryptage-polybe',
  templateUrl: './decryptage-polybe.component.html',
  styleUrls: ['./decryptage-polybe.component.scss'],
})
export class DecryptagePolybeComponent {
  crypte_key: string = '';
  response: string = '';
  key!: string;

  copySuccessMessage = '';

  constructor(private cryptageService: PolybeService) {}

  process() {
    this.response = this.cryptageService.decrypt(this.crypte_key, this.key);
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
