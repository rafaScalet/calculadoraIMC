import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  peso: any;
  altura: any;
  result: number = 0;
  state: string = "";
  aux: boolean = false;
  txt: string = "insira os valores acima";
  img: string = ""

  calc(){
    this.result = this.peso / (this.altura)**2;

    if(this.result <= 18.5){
      this.state = "magreza";
      this.img = "assets/magreza.png";
    }
    else if(this.result <= 24.9){
      this.state = "uma pessoa normal";
      this.img = "assets/normal.png";
    }
    else if(this.result <= 29.9){
      this.state = "sobrepeso";
      this.img = "assets/sobrepeso.png";
    }
    else if(this.result <= 39.9){
      this.state = "obesidade"
      this.img = "assets/obesidade.png";
    }
    else if(this.result >= 40){
      this.state = "obesidade grave"
      this.img = "assets/obesidade_grave.png";
    }
    this.aux = !this.aux;

    this.txt = "seu estado é de " + this.state + " e seu IMC é: " + this.result.toFixed(2);
  }
}
