import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  constructor(
private fireAuth:AngularFireAuth
  ) { }

 glogin(){
   var provider = new firebase.auth.GoogleAuthProvider();
     this.fireAuth.auth.signInWithPopup(provider);
}

flogin(){//not working...
  var provider = new firebase.auth.FacebookAuthProvider();
    this.fireAuth.auth.signInWithPopup(provider);
}

}
