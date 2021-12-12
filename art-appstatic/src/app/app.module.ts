import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingViewComponent } from './components/landing-view/landing-view.component';
import { HeaderComponent } from './components/header/header.component';

import {AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment.prod';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EnterEmailComponent } from './components/enter-email/enter-email.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    HeaderComponent,
    EnterEmailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  entryComponents: [EnterEmailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
