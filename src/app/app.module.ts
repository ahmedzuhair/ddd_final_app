import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MonitorPage } from '../pages/monitor/monitor';
import { AboutPage } from '../pages/about/about';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { VitaminsAndMineralsPage } from '../pages/vitamins-and-minerals/vitamins-and-minerals';
import { EnzymesPage } from '../pages/enzymes/enzymes';
import { CaloriesPage } from '../pages/calories/calories';
import { BodyMassIndexBMIPage } from '../pages/body-mass-index-bmi/body-mass-index-bmi';
import { CalorieIntakePage } from '../pages/calorie-intake/calorie-intake';
import { ForcedExpiratoryVolumeFEV1Page } from '../pages/forced-expiratory-volume-fev1/forced-expiratory-volume-fev1';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { BMITrendPage } from '../pages/b-mitrend/b-mitrend';
import { FEV1TrendPage } from '../pages/f-ev1trend/f-ev1trend';
import { CaloriesTrendPage } from '../pages/calories-trend/calories-trend';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MonitorPage,
    AboutPage,
    TabsControllerPage,
    VitaminsAndMineralsPage,
    EnzymesPage,
    CaloriesPage,
    BodyMassIndexBMIPage,
    CalorieIntakePage,
    ForcedExpiratoryVolumeFEV1Page,
    LoginPage,
    SignupPage,
    BMITrendPage,
    FEV1TrendPage,
    CaloriesTrendPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MonitorPage,
    AboutPage,
    TabsControllerPage,
    VitaminsAndMineralsPage,
    EnzymesPage,
    CaloriesPage,
    BodyMassIndexBMIPage,
    CalorieIntakePage,
    ForcedExpiratoryVolumeFEV1Page,
    LoginPage,
    SignupPage,
    BMITrendPage,
    FEV1TrendPage,
    CaloriesTrendPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}