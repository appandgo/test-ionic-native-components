import { Component } from '@angular/core';

import { Device } from 'ionic-native';

import { NavController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-Device',
  templateUrl: 'DevicePage.html'
})

export class DevicePage {

  constructor(public navCtrl: NavController, public plt:Platform) {

    this.plt.ready().then((readySource)=>{

      alert(
        ' model :' + Device.model + 
        ' platform :' + Device.platform + 
        ' version :' + Device.version + 
        ' manufacturer :' + Device.manufacturer + 
        ' isVirtual :' + Device.isVirtual + 
        ' serial :' + Device.serial
        )

    }).catch((err)=>{

    })
      
  }

}
