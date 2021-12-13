import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EnterEmailComponent } from '../enter-email/enter-email.component';
import { PrivacyComponent } from '../privacy/privacy.component';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.scss']
})
export class LandingViewComponent implements OnInit {
  data: Observable<any>[] = [];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  enterEmail(): void {
    const dialog = this.dialog.open(EnterEmailComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    });
  }

  openPrivacy(): void {
    const dialogPrivacy = this.dialog.open(PrivacyComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    })
  }
}
