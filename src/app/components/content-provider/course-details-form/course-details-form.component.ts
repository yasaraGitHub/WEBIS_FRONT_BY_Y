import { Component, OnInit } from '@angular/core';
import {CoursesService} from './../../../services/courses.service';
import { AngularFirestore} from '@angular/fire/firestore';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-course-details-form',
  templateUrl: './course-details-form.component.html',
  styleUrls: ['./course-details-form.component.css']
})
export class CourseDetailsFormComponent implements OnInit {



  constructor(private service:CoursesService, private firestore: AngularFirestore) { }

  ngOnInit() {  this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.formData={
      id:null,
      name:'',
      author:'',
      duration:'',
      content:'',
      description:''
    }
  }

  onSubmit(form:NgForm){
    let data=form.value;
    this.firestore.collection('courses').add(data);

  }


}
