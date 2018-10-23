import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  public events = [];
  constructor(private firestoreService: FirestoreService) { 
    
  }


  ngOnInit() {
    this.firestoreService.getEvents().subscribe((eventsSnapshot) => {
      this.events = [];
      eventsSnapshot.forEach((eventData: any) => {
        this.events.push({
          id: eventData.payload.doc.id,
          data: eventData.payload.doc.data()
        });
      })
    });
  }
}
