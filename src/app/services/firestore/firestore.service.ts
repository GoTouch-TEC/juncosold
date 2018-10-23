import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { 

  }
  //Obtiene todos los gatos
  public getEvents() {
    return this.firestore.collection('events').snapshotChanges();
  }
}
