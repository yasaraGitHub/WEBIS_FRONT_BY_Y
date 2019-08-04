import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-webcat-component',
  templateUrl: './webcat-component.component.html',
  styleUrls: ['./webcat-component.component.css']
})
export class WebcatComponentComponent implements OnInit {

  constructor(
    private router:Router

  ) { }

  ngOnInit() {
  }

}
