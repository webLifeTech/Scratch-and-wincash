import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
//     "cordova-plugin-firebase-analytics": "^5.0.0",
//     "cordova-plugin-firebase-config": "^5.0.0",
      
//       "cordova": {
//         "cordova-plugin-firebase-config": {
//           "ANDROID_FIREBASE_CONFIG_VERSION": "20.0.+"
//         },
//       }
//     try {
//         window.cordova.plugins.firebase.config.fetch(1).then((isfetch: any) => {
//             window.cordova.plugins.firebase.config.fetchAndActivate().then((res: any) => {
//                 window.cordova.plugins.firebase.config.getString('Token').then((urlRes: any) => {
//                   this.service.allVersionDetails = JSON.parse(urlRes);

//                   this.service.getAllVideos().then(
//                     (res) => {
//                       this.service.videoList = res['result'];
//                     },
//                     (err) => { }
//                   );

//                   this.appVersion.getVersionNumber().then(
//                     (versionNumber) => {
//                       this.service.bucketUrl = this.service.allVersionDetails['newBucketUrl'];
//                       this.service.statusMakerBucketUrl = this.service.allVersionDetails['statusMakerBucketUrl'];

//                       if (this.service.allVersionDetails['version'] != versionNumber) {
//                         this.updatePopup();
//                       }
//                     },
//                     (err) => { }
//                   );
//                 }).catch((error: any) => console.error(error));
//             });
//         }).catch((err) => {
//           console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' + err);
//         });
//     } catch (ex) { }
//   }
  }
}
