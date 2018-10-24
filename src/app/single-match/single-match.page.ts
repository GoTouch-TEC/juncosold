import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-match',
  templateUrl: './single-match.page.html',
  styleUrls: ['./single-match.page.scss'],
})
export class SingleMatchPage implements OnInit {
  public event: any;
  public id : string;
  constructor(private firestoreService: FirestoreService, private route : ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.firestoreService.getEvent(this.id).subscribe((eventsSnapshot) => {
      this.event = {
        id: eventsSnapshot.payload.id,
        data: eventsSnapshot.payload.data()
      }
    });
  }
}
