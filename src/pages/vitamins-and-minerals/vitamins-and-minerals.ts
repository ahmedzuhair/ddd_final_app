import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-vitamins-and-minerals',
  templateUrl: 'vitamins-and-minerals.html'
})
export class VitaminsAndMineralsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
