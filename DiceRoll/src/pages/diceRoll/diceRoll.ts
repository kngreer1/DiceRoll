import { Component } from '@angular/core';


@Component({
  selector: 'page-diceRoll',
  templateUrl: 'diceRoll.html'
})
export class DiceRoll {
  number1: string;
  number2: string;

  numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
  ]

 roll(){
   this.number1 = this.numbers[Math.floor(Math.random() * this.numbers.length)];

   this.number2 = this.numbers[Math.floor(Math.random() * this.numbers.length)];

 }

}
