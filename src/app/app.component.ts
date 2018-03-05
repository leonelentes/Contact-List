import { Component } from '@angular/core';


import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface ContactList{
FirstName: string;
LastName: string;
Phone: string;
Mobile: string;
email: string;
Address: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postsCol: AngularFirestoreCollection<ContactList>;
  ContactList:Observable<ContactList[]>;

  FirstName:string;
  LastName:string;
  Phone:string;
  Mobile:string;
  email:string;
  Address:string;
  
  constructor(private afs: AngularFirestore){

  }
  ngOninit(){
    this.postsCol= this.afs.collection('ContactList');
    this.ContactList = this.postsCol.valueChanges();
  }
  addPost(){
    this.afs.collection('ContactList').add({'FirstName':this.FirstName, 'LastName':this.LastName, 'Phone':this.Phone, 'Mobile':this.Mobile, 'email':this.email, 'Address':this.Address});
  }
}
