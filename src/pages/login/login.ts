import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { VitaminsAndMineralsPage } from '../vitamins-and-minerals/vitamins-and-minerals';
import { EnzymesPage } from '../enzymes/enzymes';
import { CaloriesPage } from '../calories/calories';
import { SignupPage } from '../signup/signup';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }goToVitaminsAndMinerals(params){
    if (!params) params = {};
    this.navCtrl.push(VitaminsAndMineralsPage);
  }goToEnzymes(params){
    if (!params) params = {};
    this.navCtrl.push(EnzymesPage);
  }goToCalories(params){
    if (!params) params = {};
    this.navCtrl.push(CaloriesPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
