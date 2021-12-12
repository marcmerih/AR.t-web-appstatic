import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EnterEmailComponent } from '../enter-email/enter-email.component';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.scss']
})
export class LandingViewComponent implements OnInit {
  data: Observable<any>[] = [];
  constructor(private database: AngularFireDatabase, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  enterEmail(): void {
    this.dialog.open(EnterEmailComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    });
  }
}
