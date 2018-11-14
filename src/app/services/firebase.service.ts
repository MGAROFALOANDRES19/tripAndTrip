import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public data: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  getItems(tabla){
    this.data = this.db.list(tabla).valueChanges();
    return this.data
  }
}
