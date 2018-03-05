import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import {FormsModule} from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyDGZGp2-CW7VjC6wcN8luN4m8VQfX64UKc",
  authDomain: "contact-list-d4c6c.firebaseapp.com",
  databaseURL: "https://contact-list-d4c6c.firebaseio.com",
  projectId: "contact-list-d4c6c",
  storageBucket: "contact-list-d4c6c.appspot.com",
  messagingSenderId: "850322123248"

};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule,              
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
