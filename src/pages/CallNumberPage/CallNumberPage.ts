import { Component } from '@angular/core';

import { CallNumber } from 'ionic-native';

import { NavController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-CallNumber',
  templateUrl: 'CallNumberPage.html'
})

export class CallNumberPage {

  constructor(public navCtrl: NavController, public plt:Platform) {

    this.plt.ready().then((readySource)=>{

    CallNumber.callNumber("0143408421", true)
      .then(() => alert('Launched dialer!'))
      .catch(() => alert('Error launching dialer'));

    }).catch((err)=>{

    })
      
  }

}
