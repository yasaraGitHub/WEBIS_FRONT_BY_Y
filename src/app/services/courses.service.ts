import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {Course} from './course.model';//

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  formData:Course;

  constructor(private db: AngularFirestore) { }

  getCourses(){

    return this.db.collection('courses').snapshotChanges();

  }














  //addCourse(name,author,duration,content,description){}
}
