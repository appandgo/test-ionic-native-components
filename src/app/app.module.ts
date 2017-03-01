import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { ActionSheetPage } from '../pages/ActionSheet/ActionSheet';
import { GeolocationPage } from '../pages/GeolocationPage/GeolocationPage';
import { TouchIdPage } from '../pages/TouchIdPage/TouchIdPage';
import { AppVersionPage } from '../pages/AppVersionPage/AppVersionPage';
import { CardIOPage } from '../pages/CardIOPage/CardIOPage';
import { BacklightPage } from '../pages/BacklightPage/BacklightPage';
import { DevicePage } from '../pages/DevicePage/DevicePage';
import { BrightnessPage } from '../pages/BrightnessPage/BrightnessPage';
import { CallNumberPage } from '../pages/CallNumberPage/CallNumberPage';
import { DiagnosticPage } from '../pages/DiagnosticPage/DiagnosticPage';





@NgModule({
  declarations: [
    MyApp,
    Page1,
    ActionSheetPage,
    GeolocationPage,
    TouchIdPage,
    AppVersionPage,
    CardIOPage,
    BacklightPage,
    DevicePage,
    BrightnessPage,
    CallNumberPage,
    DiagnosticPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    ActionSheetPage,
    GeolocationPage,
    TouchIdPage,
    AppVersionPage,
    CardIOPage,
    BacklightPage,
    DevicePage,
    BrightnessPage,
    CallNumberPage,
    DiagnosticPage,


  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
