import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FEV1TrendPage } from '../f-ev1trend/f-ev1trend';

@Component({
  selector: 'page-forced-expiratory-volume-fev1',
  templateUrl: 'forced-expiratory-volume-fev1.html'
})
export class ForcedExpiratoryVolumeFEV1Page {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToFEV1Trend(params){
    if (!params) params = {};
    this.navCtrl.push(FEV1TrendPage);
  }
}
