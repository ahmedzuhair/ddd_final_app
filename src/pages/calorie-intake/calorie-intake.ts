import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CaloriesTrendPage } from '../calories-trend/calories-trend';

@Component({
  selector: 'page-calorie-intake',
  templateUrl: 'calorie-intake.html'
})
export class CalorieIntakePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCaloriesTrend(params){
    if (!params) params = {};
    this.navCtrl.push(CaloriesTrendPage);
  }
}
