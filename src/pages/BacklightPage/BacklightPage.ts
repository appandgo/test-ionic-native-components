import { Component } from '@angular/core';

import { Backlight } from 'ionic-native';

import { NavController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-Backlight',
  templateUrl: 'BacklightPage.html'
})

export class BacklightPage {

  constructor(public navCtrl: NavController, public plt:Platform) {

    this.plt.ready().then((readySource)=>{

      Backlight.off().then(() => alert('backlight off')).catch(()=>{
        alert('Probleme off')
      });


      Backlight.on().then(() => alert('backlight on')).catch(()=>{
        alert('Probleme on')
      });

    }).catch((err)=>{

    })
      
  }

}
