import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
})
export class AboutusComponent implements OnInit {
  team: any[] = [];
  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    let data = collectionData(collection(this.firestore, 'team'));
    data.subscribe((team) => {
      this.team = team;
    });
  }
}
