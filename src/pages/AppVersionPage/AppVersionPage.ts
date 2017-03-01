import { Component } from '@angular/core';

import { AppVersion } from 'ionic-native';

import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-AppVersion',
  templateUrl: 'AppVersionPage.html'
})
export class AppVersionPage {

  appName;packageName;versionCode;versionNumber:any;


  constructor(public navCtrl: NavController, public plt: Platform) {
    this.plt.ready().then((readySource)=>{
      this.appName = JSON.stringify(AppVersion.getAppName()) ;
      this.packageName = AppVersion.getPackageName();
      this.versionCode = AppVersion.getVersionCode();
      this.versionNumber = AppVersion.getVersionNumber();
    })

  }

}
