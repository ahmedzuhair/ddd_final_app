import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MonitorPage } from '../monitor/monitor';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = MonitorPage;
  tab3Root: any = AboutPage;
  constructor(public navCtrl: NavController) {
  }
  
}
