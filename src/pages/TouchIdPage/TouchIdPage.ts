import { Component } from '@angular/core';

import { TouchID } from 'ionic-native';

import { NavController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-TouchId',
  templateUrl: 'TouchIdPage.html'
})
export class TouchIdPage {

  constructor(public navCtrl: NavController, public plt:Platform) {

    this.plt.ready().then((readySource)=>{

      TouchID.isAvailable()
      .then(
        res => {
          TouchID.verifyFingerprint('Scan your fingerprint mopiou')
          .then(
            res => alert('Ok'),
            err => alert('KO')
          );

        },
        err => console.error('TouchID is not available', err)
      );
    }).catch((err)=>{

    })
      
  }

}
