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
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { EnterEmailComponent } from './components/enter-email/enter-email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PrivacyComponent } from './components/privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    HeaderComponent,
    EnterEmailComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  entryComponents: [EnterEmailComponent, PrivacyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
