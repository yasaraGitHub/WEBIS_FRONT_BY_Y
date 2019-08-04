import { Component, OnInit } from '@angular/core';
import {CoursesService} from './../../services/courses.service';
import {Course} from 'src/app/services/course.model';

@Component({
  selector: 'app-maths-courses',
  templateUrl: './maths-courses.component.html',
  styleUrls: ['./maths-courses.component.css']
})
export class MathsCoursesComponent implements OnInit {
  list: Course[];
  constructor(private service:CoursesService) { }


  ngOnInit() {
    this.service.getCourses().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          //id:item.payload.doc.id,//????????
          ...item.payload.doc.data()
        } as Course;
        })
    });}
    //console.log("ng on init")
      //his.coursesService.getCourses()
    //  .subscribe(response => {
        //this.Course=response;
        //console.log(this.Course);
        //console.log(this.Course.name);
        //console.log(this.Course.duration);
      // this.Course = response["Videos"];
    //});

}
//name:String;
//author:String;
//duration:Number;
//content:String;
//description:String;

//ab(){
 //name: this.name;
 //author:this.author;
 //duration:this.duration;
 //content:this.content;
 //description:this.description
 //this.coursesService.addCourse(this.name,this.author,this.duration,this.content,this.description);
//console.log(this.name);
//console.log(this.author);
//console.log(this.duration);
//console.log(this.content);
//console.log(this.description);
//}
