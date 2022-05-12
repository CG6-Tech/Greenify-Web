import { Component, OnInit } from '@angular/core';
import { doc, docData, Firestore, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss'],
})
export class PlantDetailComponent implements OnInit {
  plant: any;
  constructor(public router: ActivatedRoute, private firestore: Firestore) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      docData(doc(this.firestore, 'plants/' + id)).subscribe((plant) => {
        this.plant = plant;
      });
    });
  }
}
