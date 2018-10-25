import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import { ActivatedRoute } from '@angular/router'
import { DatePipe } from '@angular/common';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-single-match',
  templateUrl: './single-match.page.html',
  styleUrls: ['./single-match.page.scss'],
})
export class SingleMatchPage implements OnInit {
  public single_event: any = {};
  public id : string;
  datePipe = new DatePipe('es-US');
  formattedDate : any;

  
  constructor(private firestoreService: FirestoreService, private route : ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.firestoreService.getEvent(this.id).subscribe((eventsSnapshot) => {
      this.single_event = {
        id: eventsSnapshot.payload.id,
        data: eventsSnapshot.payload.data()
      }
    });

    this.formattedDate = this.datePipe.transform(this.single_event.data.date, 'EEEE, MMMM d');
    console.log("date",this.formattedDate);

  }
}
