import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent {


    user:firebase.User;
      constructor(private afAuth:AngularFireAuth) {
        afAuth.authState.subscribe(user=>this.user=user);
       }

       logout(){
    this.afAuth.auth.signOut();
    }





}
