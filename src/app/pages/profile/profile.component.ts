import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collection, doc, Firestore } from '@angular/fire/firestore';
import { collectionData, docData } from 'rxfire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  activeSection: string = 'profile';
  user: any;
  plants: any[] = [];
  constructor(private fireauth: Auth, private firestore: Firestore) {}

  ngOnInit(): void {
    // if (this.fireauth.currentUser) {
    let uid = 'vvPeGzeq37SPUyUiddXL';
    docData(doc(this.firestore, 'users/' + uid)).subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
    // }
    collectionData(
      collection(this.firestore, 'users/vvPeGzeq37SPUyUiddXL/plants')
    ).subscribe((plants) => {
      this.plants = plants;
    });
  }

  changeSection(section: string) {
    this.activeSection = section;
  }
}
