import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';

  passwordLength = 0;
  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;

  onChangeLength(e: any) {
    const parsedValue = parseInt(e.target.value);

    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    } else {
      this.passwordLength = 0;
    }
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*+';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  getPassword() {
    return this.password;
  }
}
