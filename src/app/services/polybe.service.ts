import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PolybeService {
  private polybeSquare!: string[][];

  constructor() {
    this.setKey('');
  }

  setKey(key: string): void {
    key = key.toUpperCase().replace(/J/g, 'I');
    const uniqueChars = Array.from(new Set(key));
    const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'.split('');

    while (uniqueChars.length < 25) {
      const missingChar = alphabet.find((char) => !uniqueChars.includes(char));
      uniqueChars.push(missingChar || '');
    }

    this.polybeSquare = [];
    for (let i = 0; i < uniqueChars.length; i += 5) {
      this.polybeSquare.push(uniqueChars.slice(i, i + 5));
    }
  }

  encrypt(message: string, key?: string): string {
    key && key?.trim() !== '' ? this.setKey(key.toUpperCase()) : null;
    message = message.trim();
    let encryptedText = '';

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (char == ' ') {
        encryptedText += ' ';
      } else {
        const coordinates = this.findCoordinates(char.toUpperCase());
        encryptedText +=
          coordinates.row.toString() + coordinates.column.toString();
      }
    }

    return encryptedText;
  }

  decrypt(ciphertext: string, key?: string): string {
    key && key?.trim() !== '' ? this.setKey(key.toUpperCase()) : null;
    ciphertext = ciphertext.trim();
    let decryptedText = '';

    for (let i = 0; i < ciphertext.length; i += 2) {
      if (ciphertext[i] == ' ') {
        decryptedText += ' ';
        i--;
      } else {
        const row = parseInt(ciphertext[i], 10);
        const col = parseInt(ciphertext[i + 1], 10);
        decryptedText += this.polybeSquare[row - 1][col - 1];
      }
    }

    return decryptedText;
  }

  private findCoordinates(char: string): { row: number; column: number } {
    for (let i = 0; i < this.polybeSquare.length; i++) {
      for (let j = 0; j < this.polybeSquare[i].length; j++) {
        if (this.polybeSquare[i][j] === char) {
          return { row: i + 1, column: j + 1 };
        }
      }
    }
    return { row: 0, column: 0 };
  }
}
