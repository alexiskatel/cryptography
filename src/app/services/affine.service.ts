import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffineService {

  ALPHABET_SIZE: number = 26;

  public encrypt(text: string, keyA: number, keyB: number): string {
    let result = '';
    if (this.gcd(keyA, this.ALPHABET_SIZE) !== 1) {
       return result = 'Clé invalide. la valeur de a doit être premier avec 26.';
    }

    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);

      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        const asciiOffset = isUpperCase ? 65 : 97;
        const x = char.charCodeAt(0) - asciiOffset;
        const encryptedChar = String.fromCharCode(((keyA * x + keyB) % this.ALPHABET_SIZE) + asciiOffset);

        result += isUpperCase ? encryptedChar.toUpperCase() : encryptedChar;
      } else {
        result += char;
      }
    }

    return result;
  }

  public decrypt(text: string, keyA: number, keyB: number): string {
    let result = '';
    if (this.gcd(keyA, this.ALPHABET_SIZE) !== 1) {
      return result = 'Clé invalide. la valeur de a doit être premier avec 26.';
    }

    const modInverse = this.moduloInverse(keyA, this.ALPHABET_SIZE);

    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);

      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        const asciiOffset = isUpperCase ? 65 : 97;
        const x = char.charCodeAt(0) - asciiOffset;
        const decryptedChar = String.fromCharCode((modInverse * (x - keyB + this.ALPHABET_SIZE)) % this.ALPHABET_SIZE + asciiOffset);

        result += isUpperCase ? decryptedChar.toUpperCase() : decryptedChar;
      } else {
        result += char;
      }
    }

    return result;
  }

  private gcd(a: number, b: number): number {
    return b === 0 ? a : this.gcd(b, a % b);
  }

  private moduloInverse(a: number, m: number): number {
    for (let i = 1; i < m; i++) {
      if ((a * i) % m === 1) {
        return i;
      }
    }
    throw new Error('Inverse modulo non trouvé.');
  }
  
}