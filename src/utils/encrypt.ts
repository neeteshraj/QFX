import CryptoJs from 'crypto-js';
import {SECRET_KEY} from '@constants/secrets';
//Encrypts a string using AES-256-CBC
export function encrypt(text: string): string {
  const cipher = CryptoJs.AES.encrypt(text, `${SECRET_KEY}`).toString();
  return cipher;
}
//Decrypts a string using AES-256-CBC
export function decrypt(text: string): string {
  const plaintext = CryptoJs.AES.decrypt(text, `${SECRET_KEY}`).toString(
    CryptoJs.enc.Utf8,
  );
  return plaintext;
}
