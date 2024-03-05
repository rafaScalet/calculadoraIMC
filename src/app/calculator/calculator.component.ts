import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  peso: any;
  altura: any;
  result: any

  calc(){
    this.result = this.peso / (this.altura)**2;
  }
}
