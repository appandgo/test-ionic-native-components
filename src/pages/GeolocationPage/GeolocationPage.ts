import { Component } from '@angular/core';

import { Geolocation } from 'ionic-native';


import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-Geolocation',
  templateUrl: 'GeolocationPage.html'
})
export class GeolocationPage {

  latitude:number;
  longitude:number;
  geolocationChange:number

  constructor(public navCtrl: NavController, public plt: Platform) {

    this.geolocationChange=0

    this.plt.ready().then((readySource)=>{
            
      Geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude =  resp.coords.longitude
      this.geolocationChange++

      }).catch((error) => {
        console.log('Error getting location', error);
      });

      let watch = Geolocation.watchPosition();
      watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.latitude = data.coords.latitude
      this.longitude =  data.coords.longitude
      this.geolocationChange++

      });

    })

  }

}
