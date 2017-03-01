import { Component } from '@angular/core';

import { CardIO } from 'ionic-native';


import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-CardIO',
  templateUrl: 'CardIOPage.html'
})
export class CardIOPage {

  constructor(public navCtrl: NavController, public plt: Platform) {

    this.plt.ready().then((readySource)=>{

      CardIO.canScan()
        .then(
          (res: boolean) => {

            if(res){
              let options = {
                requireExpiry: true,
                requireCCV: false,
                requirePostalCode: false
              };
              CardIO.scan(options).then( 
                (data) => {
                  alert(JSON.stringify(res))
                }, err => {
                    alert("error")
                }
              )
              
            }
            else{
              alert("CANT SCAN")

            }
          }
        ).catch(()=>{
          alert("Problem can SCAN")
        })


    }).catch((err)=>{
        alert("not ready")

    })

  }

}
