import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { StoreService } from 'src/app/services/store/store.service';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public sections = [
    { title: 'Interview', url: '/home', icon: 'home' },
    { title: 'Angular', url: '/front-end/angular', icon: 'logo-angular' },
    { title: 'Css', url: '/front-end/css', icon: 'logo-css3' },
    { title: 'TypeScript', url: '/front-end/typescript', icon: 'logo-javascript' },
    { title: 'Git', url: '/git', icon: 'git-pull-request' },
  ];

  constructor(
    private storage: Storage,
    private store: StoreService,
    private menuCtrl: MenuController,
  ) {
    this.init();
  }

  async init() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
  }

  clear() {
    this.store.clear();
    this.menuCtrl.close();
    window.location.reload();
  }
}
