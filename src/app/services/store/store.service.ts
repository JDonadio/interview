import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private storage: Storage,
  ) { }

  set(key, value) {
    this.storage.set(key, value);
  }

  get(key) {
    return this.storage.get(key);
  }

  remove(key) {
    return this.storage.remove(key);
  }

  clear() {
    this.storage.clear();
  }
}
