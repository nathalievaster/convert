import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {
  // Meter/Feet
  lengthInput: number = 0;
  lengthOutput: number = 0;
  isMeterToFeet: boolean = true;

  // Celsius/Fahrenheit
  tempInput: number = 0;
  tempOutput: number = 0;
  isCelsiusToFahrenheit: boolean = true;

  // Switch between meter <-> feet
  switchLengthConversion() {
    this.isMeterToFeet = !this.isMeterToFeet;
    this.lengthInput = 0;
    this.lengthOutput = 0;
  }

  // Switch between celsius <-> fahrenheit
  switchTempConversion() {
    this.isCelsiusToFahrenheit = !this.isCelsiusToFahrenheit;
    this.tempInput = 0;
    this.tempOutput = 0;
  }

  // Convert length
  convertLength() {
    if (this.isMeterToFeet) {
      this.lengthOutput = this.lengthInput * 3.28084;
    } else {
      this.lengthOutput = this.lengthInput / 3.28084;
    }
  }

  // Convert temperature
  convertTemp() {
    if (this.isCelsiusToFahrenheit) {
      this.tempOutput = (this.tempInput * 9/5) + 32;
    } else {
      this.tempOutput = (this.tempInput - 32) * 5/9;
    }
  }
}