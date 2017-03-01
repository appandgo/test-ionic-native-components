import { Component } from '@angular/core';

import { ActionSheet } from 'ionic-native';


import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-ActionSheet',
  templateUrl: 'ActionSheet.html'
})
export class ActionSheetPage {

  constructor(public navCtrl: NavController, public plt: Platform) {
    this.plt.ready().then((readySource)=>{
      let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
      ActionSheet.show({
        'title': 'What do you want with this image?',
        'buttonLabels': buttonLabels,
        'addCancelButtonWithLabel': 'Cancel',
        'addDestructiveButtonWithLabel' : 'Delete'
      }).then((buttonIndex: number) => {
        console.log('Button pressed: ' + buttonIndex);
      });
    })

  }

}
