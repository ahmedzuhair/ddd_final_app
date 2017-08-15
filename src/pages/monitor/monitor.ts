import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BodyMassIndexBMIPage } from '../body-mass-index-bmi/body-mass-index-bmi';
import { BMITrendPage } from '../b-mitrend/b-mitrend';
import { CalorieIntakePage } from '../calorie-intake/calorie-intake';
import { CaloriesTrendPage } from '../calories-trend/calories-trend';
import { ForcedExpiratoryVolumeFEV1Page } from '../forced-expiratory-volume-fev1/forced-expiratory-volume-fev1';
import { FEV1TrendPage } from '../f-ev1trend/f-ev1trend';

@Component({
  selector: 'page-monitor',
  templateUrl: 'monitor.html'
})
export class MonitorPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToBodyMassIndexBMI(params){
    if (!params) params = {};
    this.navCtrl.push(BodyMassIndexBMIPage);
  }goToBMITrend(params){
    if (!params) params = {};
    this.navCtrl.push(BMITrendPage);
  }goToCalorieIntake(params){
    if (!params) params = {};
    this.navCtrl.push(CalorieIntakePage);
  }goToCaloriesTrend(params){
    if (!params) params = {};
    this.navCtrl.push(CaloriesTrendPage);
  }goToForcedExpiratoryVolumeFEV1(params){
    if (!params) params = {};
    this.navCtrl.push(ForcedExpiratoryVolumeFEV1Page);
  }goToFEV1Trend(params){
    if (!params) params = {};
    this.navCtrl.push(FEV1TrendPage);
  }
}
