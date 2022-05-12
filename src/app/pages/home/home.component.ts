import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

interface Plant {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  stock: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  plants: Plant[] = [];
  categories: any[] = [];
  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    let data = collectionData(collection(this.firestore, 'plants'));
    data.subscribe((plants) => {
      this.plants = plants as Plant[];
    });
    let categories = collection(this.firestore, 'categories');
    let categoriesData = collectionData(categories);
    categoriesData.subscribe((categories) => {
      this.categories = categories;
    });
  }
}
