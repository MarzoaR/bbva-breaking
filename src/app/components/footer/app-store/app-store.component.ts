import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './app-store.component.html',
  styleUrls: ['./app-store.component.scss']
})
export class AppStoreComponent {

  stores:any[] = [
    {
      alt: 'App Store',
      img: './assets/app_store/ios_es.png',
      url: 'https://itunes.apple.com/es/app/bbva-espana/id325813155?mt=8'
    },
    {
      alt: 'Google Play',
      img: './assets/app_store/android_es.png',
      url: 'https://play.google.com/store/apps/details?id=com.bbva.bbvacontigo&hl=es'
    },
    {
      alt: 'App Gallery',
      img: './assets/app_store/hos_es.png',
      url: 'https://appgallery.huawei.com/#/app/C101673739'
    }
  ]

}
