import { Component } from '@angular/core';

import { Diagnostic } from 'ionic-native';

import { NavController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-Diagnostic',
  templateUrl: 'DiagnosticPage.html'
})

export class DiagnosticPage {

  constructor(public navCtrl: NavController, public plt:Platform) {

    this.plt.ready().then((readySource)=>{

      alert(
        " isLocationAvailable : " + (Diagnostic.isLocationAvailable()?"yes":"no") + 
        " isWifiAvailable : " + (Diagnostic.isWifiAvailable()?"yes":"no") + 
        " isCameraAvailable : " + (Diagnostic.isCameraAvailable()?"yes":"no") + 
        " isBluetoothAvailable : " + (Diagnostic.isBluetoothAvailable()?"yes":"no")
      )



/*

permission
permissionStatus
locationAuthorizationMode
permissionGroups
locationMode
bluetoothState



isLocationAvailable()
isWifiAvailable()
isCameraAvailable()
isBluetoothAvailable()

switchToLocationSettings()
Platforms: Android  Windows 10 

Displays the device location settings to allow user to enable location services/change location mode.

switchToMobileDataSettings()
Platforms: Android  Windows 10 

Displays mobile settings to allow user to enable mobile data.

switchToBluetoothSettings()
Platforms: Android  Windows 10 

Displays Bluetooth settings to allow user to enable Bluetooth.

switchToWifiSettings()
Platforms: Android  Windows 10 

Displays WiFi settings to allow user to enable WiFi.

isWifiEnabled()
Platforms: Android  Windows 10 

Returns true if the WiFi setting is set to enabled, and is the same as isWifiAvailable()

Returns: Promise<boolean>

setWifiState(state)
Platforms: Android  Windows 10 

Enables/disables WiFi on the device. Requires ACCESS_WIFI_STATE and CHANGE_WIFI_STATE permissions on Android

Param	Type	Details
state	boolean	
Returns: Promise<any>

setBluetoothState(state)
Platforms: Android  Windows 10 

Enables/disables Bluetooth on the device. Requires BLUETOOTH and BLUETOOTH_ADMIN permissions on Android

Param	Type	Details
state	boolean	
Returns: Promise<any>

isLocationEnabled()
Platforms: Android  iOS 

Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.

Returns: Promise<boolean>

isLocationAuthorized()
Checks if the application is authorized to use location. Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.

Returns: Promise<any>

getLocationAuthorizationStatus()
Platforms: Android  iOS 

Returns the location authorization status for the application.

Returns: Promise<any>

requestLocationAuthorization()
Platforms: Android  iOS 

Returns the location authorization status for the application. Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.

mode - (iOS-only / optional) location authorization mode: “always” or “when_in_use”. If not specified, defaults to “when_in_use”.

Returns: Promise<any>

isCameraPresent()
Platforms: Android  iOS 

Checks if camera hardware is present on device.

Returns: Promise<any>

isCameraAuthorized()
Platforms: Android  iOS 

Checks if the application is authorized to use the camera. Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.

Returns: Promise<any>

getCameraAuthorizationStatus()
Platforms: Android  iOS 

Returns the camera authorization status for the application.

Returns: Promise<any>

requestCameraAuthorization()
Platforms: Android  iOS 

Requests camera authorization for the application.

Returns: Promise<any>

isMicrophoneAuthorized()
Platforms: Android  iOS 

Checks if the application is authorized to use the microphone.

Returns: Promise<boolean>

getMicrophoneAuthorizationStatus()
Platforms: Android  iOS 

Returns the microphone authorization status for the application.

Returns: Promise<any>

requestMicrophoneAuthorization()
Platforms: Android  iOS 

Requests microphone authorization for the application.

Returns: Promise<any>

isContactsAuthorized()
Platforms: Android  iOS 

Checks if the application is authorized to use contacts (address book).

Returns: Promise<boolean>

getContactsAuthorizationStatus()
Platforms: Android  iOS 

Returns the contacts authorization status for the application.

Returns: Promise<any>

requestContactsAuthorization()
Platforms: Android  iOS 

Requests contacts authorization for the application.

Returns: Promise<any>

isCalendarAuthorized()
Platforms: Android  iOS 

Checks if the application is authorized to use the calendar.

Notes for Android:

This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
Notes for iOS:

This relates to Calendar Events (not Calendar Reminders)
Returns: Promise<boolean>

getCalendarAuthorizationStatus()
Platforms: Android  iOS 

Returns the calendar authorization status for the application.

Notes for Android:

This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
Notes for iOS:

This relates to Calendar Events (not Calendar Reminders)
Returns: Promise<any>

requestCalendarAuthorization()
Platforms: Android  iOS 

Requests calendar authorization for the application.

Notes for iOS:

Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
This relates to Calendar Events (not Calendar Reminders)
Notes for Android:

This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
This requests permission for READ_CALENDAR run-time permission
Required permissions must be added to AndroidManifest.xml as appropriate - see Android permissions: READ_CALENDAR, WRITE_CALENDAR
Returns: Promise<any>

switchToSettings()
Platforms: Android  iOS 

Opens settings page for this app. On Android, this opens the “App Info” page in the Settings app. On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.

Returns: Promise<any>

getBluetoothState()
Platforms: Android  iOS 

Returns the state of Bluetooth on the device.

Returns: Promise<any>

registerBluetoothStateChangeHandler(handler)
Platforms: Android  iOS 

Registers a function to be called when a change in Bluetooth state occurs.

Param	Type	Details
handler		
registerLocationStateChangeHandler(handler)
Platforms: Android  iOS 

Registers a function to be called when a change in Location state occurs.

Param	Type	Details
handler		
isGpsLocationAvailable()
Platforms: Android 

Checks if high-accuracy locations are available to the app from GPS hardware. Returns true if Location mode is enabled and is set to “Device only” or “High accuracy” AND if the app is authorised to use location.

Returns: Promise<boolean>

isGpsLocationEnabled()
Platforms: Android 

Checks if location mode is set to return high-accuracy locations from GPS hardware. Returns true if Location mode is enabled and is set to either:

Device only = GPS hardware only (high accuracy)
High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
Returns: Promise<any>

isNetworkLocationAvailable()
Platforms: Android 

Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points. Returns true if Location mode is enabled and is set to “Battery saving” or “High accuracy” AND if the app is authorised to use location.

Returns: Promise<any>

isNetworkLocationEnabled()
Platforms: Android 

Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points. Returns true if Location mode is enabled and is set to either:

Battery saving = network triangulation and Wifi network IDs (low accuracy)
High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
Returns: Promise<any>

getLocationMode()
Platforms: Android 

Returns the current location mode setting for the device.

Returns: Promise<any>

getPermissionAuthorizationStatus(permission)
Platforms: Android 

Returns the current authorisation status for a given permission. Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.

Param	Type	Details
permission		
Returns: Promise<any>

getPermissionsAuthorizationStatus(permissions)
Platforms: Android 

Returns the current authorisation status for multiple permissions. Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.

Param	Type	Details
permissions		
Returns: Promise<any>

requestRuntimePermission(permission)
Platforms: Android 

Requests app to be granted authorisation for a runtime permission. Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.

Param	Type	Details
permission		
Returns: Promise<any>

requestRuntimePermissions(permissions)
Platforms: Android 

Requests app to be granted authorisation for multiple runtime permissions. Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.

Param	Type	Details
permissions		
Returns: Promise<any>

isRequestingPermission()
Indicates if the plugin is currently requesting a runtime permission via the native API. Note that only one request can be made concurrently because the native API cannot handle concurrent requests, so the plugin will invoke the error callback if attempting to make more than one simultaneous request. Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.

Returns: boolean

registerPermissionRequestCompleteHandler(handler)
Registers a function to be called when a runtime permission request has completed. Pass in a falsey value to de-register the currently registered function.

Param	Type	Details
handler	Function	
isBluetoothEnabled()
Platforms: Android 

Checks if the device setting for Bluetooth is switched on. This requires BLUETOOTH permission on Android

Returns: Promise<boolean>

hasBluetoothSupport()
Platforms: Android 

Checks if the device has Bluetooth capabilities.

Returns: Promise<boolean>

hasBluetoothLESupport()
Platforms: Android 

Checks if the device has Bluetooth Low Energy (LE) capabilities.

Returns: Promise<boolean>

hasBluetoothLEPeripheralSupport()
Platforms: Android 

Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.

Returns: Promise<boolean>

isCameraRollAuthorized()
Platforms: iOS 

Checks if the application is authorized to use the Camera Roll in Photos app.

Returns: Promise<boolean>

getCameraRollAuthorizationStatus()
Platforms: iOS 

Returns the authorization status for the application to use the Camera Roll in Photos app.

Returns: Promise<boolean>

requestCameraRollAuthorization()
Platforms: iOS 

Requests camera roll authorization for the application. Should only be called if authorization status is NOT_REQUESTED. Calling it when in any other state will have no effect.

Returns: Promise<any>

isRemoteNotificationsEnabled()
Platforms: iOS 

Checks if remote (push) notifications are enabled.

Returns: Promise<boolean>

isRegisteredForRemoteNotifications()
Platforms: iOS 

Indicates if the app is registered for remote (push) notifications on the device.

Returns: Promise<boolean>

getRemoteNotificationTypes()
Platforms: iOS 

Indicates the current setting of notification types for the app in the Settings app. Note: on iOS 8+, if “Allow Notifications” switch is OFF, all types will be returned as disabled.

Returns: Promise<any>

isRemindersAuthorized()
Platforms: iOS 

Checks if the application is authorized to use reminders.

Returns: Promise<boolean>

getRemindersAuthorizationStatus()
Platforms: iOS 

Returns the reminders authorization status for the application.

Returns: Promise<any>

requestRemindersAuthorization()
Platforms: iOS 

Requests reminders authorization for the application.

Returns: Promise<any>

isBackgroundRefreshAuthorized()
Platforms: iOS 

Checks if the application is authorized for background refresh.

Returns: Promise<boolean>

getBackgroundRefreshStatus()
Platforms: iOS 

Returns the background refresh authorization status for the application.

Returns: Promise<any>

*/







    }).catch((err)=>{

    })
      
  }

}
