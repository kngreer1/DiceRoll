import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DiceRoll} from '../diceRoll/diceRoll'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {

  }

itemTapped(){

  this.nav.push(DiceRoll)
}

}
