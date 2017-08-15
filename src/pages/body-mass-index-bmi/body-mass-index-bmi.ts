import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BMITrendPage } from '../b-mitrend/b-mitrend';

@Component({
  selector: 'page-body-mass-index-bmi',
  templateUrl: 'body-mass-index-bmi.html'
})
export class BodyMassIndexBMIPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToBMITrend(params){
    if (!params) params = {};
    this.navCtrl.push(BMITrendPage);
  }
}
