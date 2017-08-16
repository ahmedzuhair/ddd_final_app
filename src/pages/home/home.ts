import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VitaminsAndMineralsPage } from '../vitamins-and-minerals/vitamins-and-minerals';
import { EnzymesPage } from '../enzymes/enzymes';
import { CaloriesPage } from '../calories/calories';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToVitaminsAndMinerals(params){
    if (!params) params = {};
    this.navCtrl.push(VitaminsAndMineralsPage);
  }goToEnzymes(params){
    if (!params) params = {};
    this.navCtrl.push(EnzymesPage);
  }goToCalories(params){
    if (!params) params = {};
    this.navCtrl.push(CaloriesPage);
  }

}
