import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from './models/item.model';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
const fb = new FormBuilder();

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  emailForm: FormGroup;

  constructor(private afs: AngularFirestore) {
    this.items = this.afs.collection('Email Collection').valueChanges() as Observable<Item[]>;
    this.emailForm = fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      gateKeeper: ''
    });
  }

  getItems(): Observable<Item[]> {
    return this.items as Observable<Item[]>;
  }

  addEmail(email: string): void {
    this.afs.collection('Email Collection').add(<Item>{
      email: email
    });
  }
}
