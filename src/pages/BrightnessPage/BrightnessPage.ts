import { Component } from '@angular/core';

import { Brightness } from 'ionic-native';

import { NavController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-Brightness',
  templateUrl: 'BrightnessPage.html'
})

export class BrightnessPage {

  constructor(public navCtrl: NavController, public plt:Platform) {

    this.plt.ready().then((readySource)=>{

      Brightness.getBrightness().then((brightness)=>{

        alert(brightness);

        Brightness.setBrightness(0).then((brightness)=>{
          alert(brightness);
        })

      })



setTimeout(()=>{
      Brightness.getBrightness().then((brightness)=>{

        alert(brightness);

        Brightness.setBrightness(1).then((brightness)=>{
          alert(brightness);
        })

      })
},100)

//setKeepScreenOn()

    }).catch((err)=>{

    })
      
  }

}
